import {Field, Struct} from "snarkyjs";

export class EvmAddress extends Struct({
    fields: [Field, Field],
    chainId: Field
}) {
    toString() {
        return this.fields.toString();
    }
}
