import {Field, PublicKey, Struct} from "snarkyjs";

export class EvmAddress extends Struct({
    fields: [Field, Field],
    chainId: Field
}) {
    toString() {
        return this.fields.toString();
    }
}

export class VerifiedOwnership extends Struct({
    evmContractAddress: EvmAddress,
    minaAddress: PublicKey
}) {
    // toString() {
    //     return this.fields.toString();
    // }
}


