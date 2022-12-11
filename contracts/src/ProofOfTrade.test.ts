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
import { ORACLE_PUBLIC_KEY } from './utils/constants';
import { proofOfTradeDataSample } from './utils/data_samples';

let proofsEnabled = false;
function createLocalBlockchain() {
  const Local = Mina.LocalBlockchain({ proofsEnabled });
  Mina.setActiveInstance(Local);
  return Local.testAccounts[0].privateKey;
}

async function localDeploy(
  zkAppInstance: ProofOfTrade,
  zkAppPrivatekey: PrivateKey,
  deployerAccount: PrivateKey
) {
  const txn = await Mina.transaction(deployerAccount, () => {
    AccountUpdate.fundNewAccount(deployerAccount);
    zkAppInstance.deploy({ zkappKey: zkAppPrivatekey });
    zkAppInstance.init(zkAppPrivatekey);
  });
  await txn.prove();
  txn.sign([zkAppPrivatekey]);
  await txn.send();
}

describe('ProofOfTrade', () => {
  let deployerAccount: PrivateKey,
    zkAppAddress: PublicKey,
    zkAppPrivateKey: PrivateKey;

  beforeAll(async () => {
    await isReady;
    if (proofsEnabled) ProofOfTrade.compile();
    let userPrivateKey = PrivateKey.random();
  });

  beforeEach(async () => {
    deployerAccount = createLocalBlockchain();
    zkAppPrivateKey = PrivateKey.random();
    zkAppAddress = zkAppPrivateKey.toPublicKey();
  });

  afterAll(async () => {
    // `shutdown()` internally calls `process.exit()` which will exit the running Jest process early.
    // Specifying a timeout of 0 is a workaround to defer `shutdown()` until Jest is done running all tests.
    // This should be fixed with https://github.com/MinaProtocol/mina/issues/10943
    setTimeout(shutdown, 0);
  });

  it('generates and deploys the `ProofOfTrade` smart contract with a predefined smart contract', async () => {
    const zkAppInstance = new ProofOfTrade(zkAppAddress);
    await localDeploy(zkAppInstance, zkAppPrivateKey, deployerAccount);
    const oraclePublicKey = zkAppInstance.oraclePublicKey.get();
    expect(oraclePublicKey).toEqual(PublicKey.fromBase58(ORACLE_PUBLIC_KEY));
  });

  describe('deploys a verifier contract for token balance', () => {
    it('emits an `verified` event containing the user mina address if their token balance is at least 1', async () => {
      const zkAppInstance = new ProofOfTrade(zkAppAddress);
      await localDeploy(zkAppInstance, zkAppPrivateKey, deployerAccount);

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

      const pvKey = PrivateKey.random();
      //
      const exchange = Encoding.stringToFields('UNI');
      const txn = await Mina.transaction(deployerAccount, () => {
        //AccountUpdate.fundNewAccount(pvKey);
        zkAppInstance.verify(
          swapCounts,
          amountUsd,
          exchange[0],
          signature ?? fail('something is wrong with the signature'),
          pvKey.toPublicKey()
        );
      });
      await txn.prove();
      await txn.sign();
      await txn.send();
      // //
      const events = await zkAppInstance.fetchEvents();
      //
      let verifiedEvent = events[0];

      // // @ts-ignore
      expect(events[0].event).toEqual(pvKey.toPublicKey());
      // // @ts-ignore
    });
  });

  describe('admin', () => {
    it.todo('changes oracle public key');
    it.todo('errors if non admin tries to change oracle public key');
  });
});
