import {
    Poseidon,
    Field,
    Bool,
    MerkleTree,
    MerkleWitness,
    Signature,
    PublicKey,
    Circuit,
} from 'snarkyjs';

export class MerkleWitness4 extends MerkleWitness(4) {}