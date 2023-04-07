import { TokenOwnershipOracle } from './TokenOwnershipOracle';
import {
  isReady,
  shutdown,
  Field,
  Mina,
  PrivateKey,
  PublicKey,
  AccountUpdate,
  Encoding,
  Signature,
} from 'snarkyjs';
import { tokenOwnershipDataSample } from './utils/data_samples';
import { EvmAddress } from './TokenOwnershipOracle';

/*
 * This file specifies how to test the `TokenOwnershipOracle` example smart contract. It is safe to delete this file and replace
 * with your own tests.
 *
 * See https://docs.minaprotocol.com/zkapps for more info.
 */

let proofsEnabled = false;
const ORACLE_PUBLIC_KEY =
  'B62qqRNpzrmgdzte55XNWQz2Yj9vtXdib1QSYJzNab6Tc8mcxESHMZ7';

describe('TokenOwnershipOracle', () => {
  let deployerAccount: PublicKey,
    deployerKey: PrivateKey,
    senderAccount: PublicKey,
    senderKey: PrivateKey,
    zkAppTokenOwnershipAddress: PublicKey,
    zkAppPrivateKey: PrivateKey,
    zkApp: TokenOwnershipOracle;

  beforeAll(async () => {
    await isReady;
    if (proofsEnabled) TokenOwnershipOracle.compile();
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
    zkAppTokenOwnershipAddress = zkAppPrivateKey.toPublicKey();
    zkApp = new TokenOwnershipOracle(zkAppTokenOwnershipAddress);
  });

  afterAll(() => {
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

  it('generates and deploys the `TokenOwnershipOracle` smart contract', async () => {
    await localDeploy();
    const zkAppInstance = new TokenOwnershipOracle(zkAppTokenOwnershipAddress);
    const oraclePublicKey = zkAppInstance.oraclePublicKey.get();
    expect(oraclePublicKey).toEqual(PublicKey.fromBase58(ORACLE_PUBLIC_KEY));
  });

  describe('deploys a verifier contract for token balance', () => {
    it('emits an `verified` event containing the user mina address if their token balance is at least 1', async () => {
      const zkAppInstance = new TokenOwnershipOracle(
        zkAppTokenOwnershipAddress
      );
      await localDeploy();

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

      const txn = await Mina.transaction(senderAccount, () => {
        zkAppInstance.verify(
          balance,
          contractAddress,
          signature ?? fail('something is wrong with the signature')
        );
      });
      await txn.prove();
      await txn.sign([senderKey]).send();

      //
      const events = await zkAppInstance.fetchEvents();

      let verifiedEvent = events[0];
      // console.log('verifiedEvent', verifiedEvent.event.data.evmContractAddress);
      // @ts-ignore
      expect(verifiedEvent.event.data.minaAddress.toBase58()).toEqual(
        senderKey.toPublicKey().toBase58()
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
      const zkAppInstance = new TokenOwnershipOracle(
        zkAppTokenOwnershipAddress
      );
      await localDeploy();
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
        AccountUpdate.fundNewAccount(randomUser.toPublicKey());
      });

      //@ts-ignore
      expect(async () => {
        await Mina.transaction(randomUser.toPublicKey(), () => {
          zkAppInstance.verify(
            balance,
            snarkyAddress,
            signature ?? fail('something is wrong with the signature')
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

  // it('correctly updates the num state on the `TokenOwnershipOracle` smart contract', async () => {
  //   await localDeploy();

  //   // update transaction
  //   const txn = await Mina.transaction(senderAccount, () => {
  //     zkApp.update();
  //   });
  //   await txn.prove();
  //   await txn.sign([senderKey]).send();

  //   const updatedNum = zkApp.num.get();
  //   expect(updatedNum).toEqual(Field(3));
  // });
});
