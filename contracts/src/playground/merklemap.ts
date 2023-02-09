import { isReady, shutdown, Poseidon, Encoding, MerkleMap, MerkleMapWitness, PublicKey , Field, PrivateKey} from "snarkyjs";
await isReady;

//1. Create a merkle map
const merkleTree = new MerkleMap();
const initialStateMerkleRoot = merkleTree.getRoot();

//2. Create a user account that will prove a trade
const userPvKey = PrivateKey.random();
const userAccount = userPvKey.toPublicKey();
console.log("user account", PublicKey.toBase58(userAccount));

//3. compute the account merkle key
const accountMerkleKey = Poseidon.hash(userAccount.toFields());

//we can verify the default value of the merkle key is 0
console.log("🚀 verify merkle key value is 0 by default:", merkleTree.get(accountMerkleKey).toString());
console.log("🚀 display our merkleRoot", merkleTree.getRoot().toString());

//4. Get the merkle witness to prepare modifying the merkle tree
const witness = merkleTree.getWitness(accountMerkleKey);
// console.log("🚀 display our witness", witness)

//5. Zkapp verifies the input is valid for the stored merkle root. + that the user account was not proved before (eg value for account = 0)
// zkapp will verify sender as well to validate user can update its own account
const [ rootBefore , key ] = witness.computeRootAndKey(Field(0))
console.log(key.toString())
console.log(accountMerkleKey.toString())
console.log("key equals uer account", accountMerkleKey.toString() === key.toString());
console.log("roots equals", initialStateMerkleRoot.toString() === rootBefore.toString());

// 6. Zkapp modifies the merkle tree
const newValue = Field(1);
const [ rootAfter , _ ] = witness.computeRootAndKey(Field(1))
console.log("new merkle root/commitment", rootAfter.toString());

//7. verification that the update computes the same root:
const exampleMerkle = new MerkleMap();
exampleMerkle.set(accountMerkleKey, newValue);
console.log("update was successful", exampleMerkle.getRoot().toString() === rootAfter.toString());


shutdown()