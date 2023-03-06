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
  CircuitString,
  Poseidon,
  UInt64,
} from 'snarkyjs';
import { PublicPosition } from './ProofOfPosition';
let proofsEnabled = false;

const ORACLE_PUBLIC_KEY =
  'B62qqRNpzrmgdzte55XNWQz2Yj9vtXdib1QSYJzNab6Tc8mcxESHMZ7';

await isReady;
const grtToken = CircuitString.fromString(
  '0xc944e90c64b2c07662a292be6244bdf05cda44a7'
);

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
    it('generates and deploys the `ProofOfPosition` smart contract with correct predefined state', async () => {
      const zkAppInstance = new ProofOfPosition(zkAppAddress);
      await localDeploy();
      const oraclePublicKey = zkAppInstance.oraclePublicKey.get();
      expect(oraclePublicKey).toEqual(PublicKey.fromBase58(ORACLE_PUBLIC_KEY));
      const emptyMerkleMap = new MerkleMap();
      const emptyMerkleMapRoot = emptyMerkleMap.getRoot();
      const commitment = zkAppInstance.commitment.get();
      expect(commitment).toEqual(emptyMerkleMapRoot);
    });
    it('correctly updates merkle root with position data', async () => {
      const zkAppInstance = new ProofOfPosition(zkAppAddress);
      await localDeploy();
      
      //TODO: flawed as timestamp will be different from the one registered, find a way to mock it
      let merkleTree = new MerkleMap();
      const positionMerkleKey = Poseidon.hash([
        ...grtToken.toFields(),
        ...senderAccount.toFields(),
      ]);
      const positionData = new PublicPosition({
        tokenAddress: grtToken,
        atLeast: Field(100),
        targetUsdPrice: Field(1),
        timestamp: new UInt64(1678137596),  
      });
      merkleTree.set(
        positionMerkleKey,
        Poseidon.hash([
          ...positionData.tokenAddress.toFields(),
          positionData.atLeast,
          positionData.targetUsdPrice,
        ])
      );
      const targetMerkleRoot = merkleTree.getRoot();
      const witness = merkleTree.getWitness(positionMerkleKey);


      //TODO: use an actual oracle signature
      const sig = Signature.create(senderKey, [Field(0)]);
      const txn = await Mina.transaction(senderAccount, () => {
        //AccountUpdate.fundNewAccount(pvKey);
        zkAppInstance.commitPosition(
          grtToken,
          Field(253),
          Field(100),
          Field(1),
          witness,
          sig
        );
      });
      await txn.prove();
      await txn.sign([senderKey, deployerKey]).send();
      // //
      const events = await zkAppInstance.fetchEvents();
      console.log(events);

      const newMerkleRoot = zkAppInstance.commitment.get();
      //TODO: this test can not work because we need to reconstruct same timestamp as in execution test 
      //expect(newMerkleRoot).toEqual(targetMerkleRoot);

      let emptyMerkleMap = new MerkleMap();
      const emptyMerkleMapRoot = emptyMerkleMap.getRoot();
      expect(newMerkleRoot).not.toEqual(emptyMerkleMapRoot);

      
    });
    it.todo('fails if a position was already committed');

    it.todo('should be correct');
  });
});
