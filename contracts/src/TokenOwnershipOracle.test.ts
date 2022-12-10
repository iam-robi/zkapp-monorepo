import { TokenOwnershipOracle } from './TokenOwnershipOracle';
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

import { tokenOwnershipDataSample } from './utils/data_samples';
import { EvmAddress } from './TokenOwnershipOracle';
// The public key of our trusted data provider
const ORACLE_PUBLIC_KEY =
  'B62qqFGos8L5WD45YSAyaF5dkQagnrnUdY54F2rGXU5gcjKnHq84CkS';

let proofsEnabled = false;
function createLocalBlockchain() {
  const Local = Mina.LocalBlockchain({ proofsEnabled });
  Mina.setActiveInstance(Local);
  return Local.testAccounts[0].privateKey;
}

async function localDeploy(
  zkAppInstance: TokenOwnershipOracle,
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

describe('TokenOwnershipOracle', () => {
  let deployerAccount: PrivateKey,
    zkAppAddress: PublicKey,
    zkAppPrivateKey: PrivateKey;

  beforeAll(async () => {
    await isReady;
    if (proofsEnabled) TokenOwnershipOracle.compile();
    let contractAddress =
      tokenOwnershipDataSample.data.getOwnershipSignedData.data.address;
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

  it('generates and deploys the `TokenOwnershipOracle` smart contract with a predefined smart contract', async () => {
    const zkAppInstance = new TokenOwnershipOracle(zkAppAddress);
    await localDeploy(zkAppInstance, zkAppPrivateKey, deployerAccount);
    const oraclePublicKey = zkAppInstance.oraclePublicKey.get();
    expect(oraclePublicKey).toEqual(PublicKey.fromBase58(ORACLE_PUBLIC_KEY));
  });

  describe('deploys a verifier contract for token balance', () => {
    it('emits an `verified` event containing the user mina address if their token balance is at least 1', async () => {
      const zkAppInstance = new TokenOwnershipOracle(zkAppAddress);
      await localDeploy(zkAppInstance, zkAppPrivateKey, deployerAccount);

      const balance = Field(
        tokenOwnershipDataSample.data.getOwnershipSignedData.data.balance
      );
      const chainId = Field(
        tokenOwnershipDataSample.data.getOwnershipSignedData.data.chainId
      );
      const addressToFields = Encoding.stringToFields(
        tokenOwnershipDataSample.data.getOwnershipSignedData.data.address
      );
      //TODO: add created at , read about how to use timestamps

      const signature = Signature.fromJSON(
        tokenOwnershipDataSample.data.getOwnershipSignedData.signature
      );
      const validSignature = signature.verify(
        PublicKey.fromBase58(ORACLE_PUBLIC_KEY),
        [balance, chainId, ...addressToFields]
      );
      validSignature.assertTrue();

      let contractAddress = new EvmAddress({
        fields: addressToFields,
        chainId: chainId,
      });

      const pvKey = PrivateKey.random();

      const txn = await Mina.transaction(deployerAccount, () => {
        //AccountUpdate.fundNewAccount(pvKey);
        zkAppInstance.verify(
          balance,
          contractAddress,
          signature ?? fail('something is wrong with the signature'),
          pvKey.toPublicKey()
        );
      });
      await txn.prove();
      await txn.sign();
      await txn.send();
      //
      const events = await zkAppInstance.fetchEvents();

      let verifiedEvent = events[0];

      // @ts-ignore
      expect(verifiedEvent.event.minaAddress.toBase58()).toEqual(
        pvKey.toPublicKey().toBase58()
      );
      // @ts-ignore
      expect(verifiedEvent.event.evmContractAddress.chainId.toString()).toEqual(
        String(
          tokenOwnershipDataSample.data.getOwnershipSignedData.data.chainId
        )
      );
      // @ts-ignore
      // console.log(verifiedEvent.event);
      // expect(
      //   Encoding.stringFromFields(verifiedEvent.event.evmContractAddress.fields)
      // ).toEqual(
      //   tokenOwnershipDataSample.data.getOwnershipSignedData.data.address
      // );
    });
    it('errors if wrong chain Id is provided', async () => {
      const zkAppInstance = new TokenOwnershipOracle(zkAppAddress);
      await localDeploy(zkAppInstance, zkAppPrivateKey, deployerAccount);
      const balance = Field(
        tokenOwnershipDataSample.data.getOwnershipSignedData.data.balance
      );
      const chainId = Field(
        tokenOwnershipDataSample.data.getOwnershipSignedData.data.chainId
      );
      const addressToFields = Encoding.stringToFields(
        tokenOwnershipDataSample.data.getOwnershipSignedData.data.address
      );
      //TODO: add created at , read about how to use timestamps
      const signature = Signature.fromJSON(
        tokenOwnershipDataSample.data.getOwnershipSignedData.signature
      );
      let snarkyAddress = new EvmAddress({
        fields: addressToFields,
        chainId: Field(1),
      });
      const randomUser = PrivateKey.random();
      await Mina.transaction(deployerAccount, () => {
        AccountUpdate.fundNewAccount(randomUser);
      });

      //@ts-ignore
      expect(async () => {
        await Mina.transaction(randomUser, () => {
          zkAppInstance.verify(
            balance,
            snarkyAddress,
            signature ?? fail('something is wrong with the signature'),
            randomUser.toPublicKey()
          );
        });
      }).rejects;
    });
    it.todo('errors if signature is wrong');
    it.todo('errors if balance below 1');
    it.todo(
      'errors if feepayer is not same as public key provided (modify smart contract)'
    );
  });

  describe('admin', () => {
    it.todo('changes oracle public key');
    it.todo('errors if non admin tries to change oracle public key');
  });
});
