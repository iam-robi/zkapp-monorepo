import { ProofOfTrade } from './ProofOfTrade';
import {
  isReady,
  shutdown,
  Field,
  Mina,
  PrivateKey,
  PublicKey,
  AccountUpdate,
  Signature,
  Encoding,
} from 'snarkyjs';

import { proofOfTradeDataSample } from './utils/data_samples';
const ORACLE_PUBLIC_KEY =
  'B62qqRNpzrmgdzte55XNWQz2Yj9vtXdib1QSYJzNab6Tc8mcxESHMZ7';

let proofsEnabled = false;


describe('ProofOfTrade', () => {
  let deployerAccount: PublicKey,
    deployerKey: PrivateKey,
    senderAccount: PublicKey,
    senderKey: PrivateKey,
    zkAppAddress: PublicKey,
    zkAppPrivateKey: PrivateKey,
    zkApp: ProofOfTrade;


  beforeAll(async () => {
    await isReady;
    if (proofsEnabled) ProofOfTrade.compile();
  });

  beforeEach(() => {
    const Local = Mina.LocalBlockchain({ proofsEnabled });
    Mina.setActiveInstance(Local);
    ({ privateKey: deployerKey, publicKey: deployerAccount } =
      Local.testAccounts[0]);
    ({ privateKey: senderKey, publicKey: senderAccount } =
      Local.testAccounts[1]);
      ({ privateKey: senderKey, publicKey: senderAccount } =
        Local.testAccounts[2]);
    zkAppPrivateKey = PrivateKey.random();
    zkAppAddress = zkAppPrivateKey.toPublicKey();
    zkApp = new ProofOfTrade(zkAppAddress);
  });

  afterAll(async () => {
    // `shutdown()` internally calls `process.exit()` which will exit the running Jest process early.
    // Specifying a timeout of 0 is a workaround to defer `shutdown()` until Jest is done running all tests.
    // This should be fixed with https://github.com/MinaProtocol/mina/issues/10943
    setTimeout(shutdown, 0);
  });
  async function localDeploy() {
    const txn = await Mina.transaction(deployerAccount, () => {
      AccountUpdate.fundNewAccount(deployerAccount);
      zkApp.deploy({ zkappKey: zkAppPrivateKey });
      zkApp.init(zkAppPrivateKey);
    });
    await txn.prove();
    // this tx needs .sign(), because `deploy()` TokenOwnershipOracles an account update that requires signature authorization
    await txn.sign([deployerKey, zkAppPrivateKey]).send();
  }
  it('generates and deploys the `ProofOfTrade` smart contract with a predefined smart contract', async () => {
    const zkAppInstance = new ProofOfTrade(zkAppAddress);
    await localDeploy();
    const oraclePublicKey = zkAppInstance.oraclePublicKey.get();
    expect(oraclePublicKey).toEqual(PublicKey.fromBase58(ORACLE_PUBLIC_KEY));
  });

  describe('deploys a verifier contract for token balance', () => {
    it('emits an `verified` event containing the user mina address if their token balance is at least 1', async () => {
      const zkAppInstance = new ProofOfTrade(zkAppAddress);
      await localDeploy();

      const swapCounts = Field(
        proofOfTradeDataSample.data.getTradingSignedData.data.swapCounts
      );

      const amountUsd = Field(
        proofOfTradeDataSample.data.getTradingSignedData.data.amountUsd
      );

      const exchangeFields = Encoding.stringToFields(
        proofOfTradeDataSample.data.getTradingSignedData.data.exchange
      );

      //TODO: add created at , read about how to use timestamps

      const signature = Signature.fromJSON(
        proofOfTradeDataSample.data.getTradingSignedData.signature
      );

      // const validSignature = signature.verify(
      //   PublicKey.fromBase58(ORACLE_PUBLIC_KEY),
      //   [balance, chainId, ...addressToFields]
      // );
      // validSignature.assertTrue();

      const exchange = Encoding.stringToFields('UNI');
      const txn = await Mina.transaction(senderAccount, () => {
        //AccountUpdate.fundNewAccount(pvKey);
        zkAppInstance.verify(
          swapCounts,
          amountUsd,
          exchange[0],
          signature ?? fail('something is wrong with the signature'),
          senderKey.toPublicKey()
        );
      });
      await txn.prove();
      await txn.sign([senderKey]).send();
      // //
      const events = await zkAppInstance.fetchEvents();
      //
      let verifiedEvent = events[0];

      // // @ts-ignore
      expect(events[0].event).toEqual(senderKey.toPublicKey());
      // // @ts-ignore
    });
  });

  describe('admin', () => {
    it.todo('changes oracle public key');
    it.todo('errors if non admin tries to change oracle public key');
  });
});
