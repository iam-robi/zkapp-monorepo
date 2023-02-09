import { isReady, shutdown, Struct, CircuitString, Poseidon, Encoding, MerkleMap, MerkleMapWitness, PublicKey , Field, PrivateKey} from "snarkyjs";
await isReady;
const grtToken = CircuitString.fromString("0xc944e90c64b2c07662a292be6244bdf05cda44a7")

const userPvKey = PrivateKey.random();
const userAccount = userPvKey.toPublicKey();

class PublicPosition extends Struct({
    atLeast: Field,
    tokenAddress: CircuitString,
    targetUsdPrice: Field,
    account: PublicKey,
}) {}

const positionData = new PublicPosition({
    atLeast: Field(100),
    tokenAddress: grtToken,
    targetUsdPrice: Field(1),
    account: userAccount
})

console.log(positionData);


shutdown()