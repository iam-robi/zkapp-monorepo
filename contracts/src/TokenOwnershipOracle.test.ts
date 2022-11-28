import { TokenOwnershipOracle } from './TokenOwnershipOracle';
import {
  isReady,
  shutdown,
  Field,
  Mina,
  PrivateKey,
  PublicKey,
  AccountUpdate,
  Signature, Encoding,
} from 'snarkyjs';
import {EvmAddress} from "./structs";


const userExampleData = {
  "data": {
    "getOwnershipSignedDataTest": {
      "data": {
        "address": "0x0C3b29321611736341609022C23E981AC56E7f96",
        "chainId": 43114,
        "createdAt": "2022-11-28T09:30:08.226Z",
        "balance": 20
      },
      "signature": {
        "r": "20602730057308047063052483389166938333466728007610673901102282888577720421520",
        "s": "4386131374594108274228104479871987355783710889454917710865910307160901634535"
      },
      "publicKey": "B62qqFGos8L5WD45YSAyaF5dkQagnrnUdY54F2rGXU5gcjKnHq84CkS"
    }
  }
}

// The public key of our trusted data provider
const ORACLE_PUBLIC_KEY =
    'B62qqFGos8L5WD45YSAyaF5dkQagnrnUdY54F2rGXU5gcjKnHq84CkS';
const CONTRACT_ADDRESS = "0x0C3b29321611736341609022C23E981AC56E7f96"
const CHAIN_ID = 43114


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
    const evmAddress = zkAppInstance.evmAddress.get()
    expect(evmAddress.fields).toEqual(Encoding.stringToFields(CONTRACT_ADDRESS))
    expect(evmAddress.chainId).toEqual(Field(CHAIN_ID))
    console.log(evmAddress.fields)
  });



  describe('deploys a verifier contract for token balance', () => {
    it('emits an `verified` event containing the user mina address if their token balance is at least 1', async () => {
      const zkAppInstance = new TokenOwnershipOracle(zkAppAddress);
      await localDeploy(zkAppInstance, zkAppPrivateKey, deployerAccount);

      // const response = await fetch(
      //     'https://mina-credit-score-signer-pe3eh.ondigitalocean.app/user/1'
      // );
      // const data = await response.json();

      const balance = Field(userExampleData.data.getOwnershipSignedDataTest.data.balance)
      const chainId = Field(userExampleData.data.getOwnershipSignedDataTest.data.chainId)
      const addressToFields = Encoding.stringToFields(userExampleData.data.getOwnershipSignedDataTest.data.address);
      //TODO: add created at , read about how to use timestamps

      const signature = Signature.fromJSON(userExampleData.data.getOwnershipSignedDataTest.signature);
      const validSignature = signature.verify(PublicKey.fromBase58(ORACLE_PUBLIC_KEY), [balance,chainId,...addressToFields]);
      validSignature.assertTrue()

      let snarkyAddress = new EvmAddress({ fields: addressToFields, chainId: chainId});

      const txn = await Mina.transaction(deployerAccount, () => {
        zkAppInstance.verify(
            balance,
            snarkyAddress,
            signature ?? fail('something is wrong with the signature')
        );
      });
      await txn.prove();
      await txn.send();
      //
      const events = await zkAppInstance.fetchEvents();

      events.map(event => {
        if(event.type === 'verified'){
          console.log(event.event.toString())
        }
      })
      // const verifiedEventValue = events[0].event.toFields(null)[0];
      // expect(verifiedEventValue).toEqual(id);
    });
    it('errors if wrong chain Id is provided', async () => {
      const zkAppInstance = new TokenOwnershipOracle(zkAppAddress);
      await localDeploy(zkAppInstance, zkAppPrivateKey, deployerAccount);
      const balance = Field(userExampleData.data.getOwnershipSignedDataTest.data.balance)
      const chainId = Field(userExampleData.data.getOwnershipSignedDataTest.data.chainId)
      const addressToFields = Encoding.stringToFields(userExampleData.data.getOwnershipSignedDataTest.data.address);
      //TODO: add created at , read about how to use timestamps
      const signature = Signature.fromJSON(userExampleData.data.getOwnershipSignedDataTest.signature);
      let snarkyAddress = new EvmAddress({ fields: addressToFields, chainId: Field(1)});
      //@ts-ignore
      expect(async () => {
        await Mina.transaction(deployerAccount, () => {
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
  });

});