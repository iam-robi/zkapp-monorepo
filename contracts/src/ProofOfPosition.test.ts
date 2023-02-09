import { ProofOfPosition } from './ProofOfPosition';
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
  MerkleMap,
  MerkleMapWitness,
} from 'snarkyjs';

let proofsEnabled = false;

const ORACLE_PUBLIC_KEY =
  'B62qqRNpzrmgdzte55XNWQz2Yj9vtXdib1QSYJzNab6Tc8mcxESHMZ7';

describe('ProofOfPosition.js', () => {
  let deployerAccount: PublicKey,
    deployerKey: PrivateKey,
    senderAccount: PublicKey,
    senderKey: PrivateKey,
    zkAppAddress: PublicKey,
    zkAppPrivateKey: PrivateKey,
    zkApp: ProofOfPosition;

  beforeAll(async () => {
      await isReady;
      if (proofsEnabled) ProofOfPosition.compile();
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
      zkApp = new ProofOfPosition(zkAppAddress);
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
  describe('Deployment', () => {
    it('generates and deploys the `ProofOfPosition` smart contract with a predefined smart contract', async () => {
      const zkAppInstance = new ProofOfPosition(zkAppAddress);
      await localDeploy();
      const oraclePublicKey = zkAppInstance.oraclePublicKey.get();
      expect(oraclePublicKey).toEqual(PublicKey.fromBase58(ORACLE_PUBLIC_KEY));
      const emptyMerkleMap = new MerkleMap();
      const emptyMerkleMapRoot = emptyMerkleMap.getRoot();
      const commitment = zkAppInstance.commitment.get();
      expect(commitment).toEqual(emptyMerkleMapRoot);
    });


    it.todo('should be correct');
  });
});
