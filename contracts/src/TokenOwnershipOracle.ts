import {
    Field,
    SmartContract,
    state,
    State,
    method,
    DeployArgs,
    Permissions,
    PublicKey,
    Signature,
    PrivateKey, Struct, Encoding,
} from 'snarkyjs';


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
}
const ORACLE_PUBLIC_KEY =
    'B62qqFGos8L5WD45YSAyaF5dkQagnrnUdY54F2rGXU5gcjKnHq84CkS';

export class TokenOwnershipOracle extends SmartContract {

    @state(PublicKey) oraclePublicKey = State<PublicKey>();

    events = {
        verified: VerifiedOwnership
    };

    deploy(args: DeployArgs) {
        super.deploy(args);
        this.setPermissions({
            ...Permissions.default(),
            editState: Permissions.proofOrSignature(),
        });
    }

    @method init(zkappKey: PrivateKey) {
        super.init();
        this.oraclePublicKey.set(PublicKey.fromBase58(ORACLE_PUBLIC_KEY));
        this.requireSignature();
    }

    @method verify(balance: Field, contractAddress: EvmAddress,  signature: Signature , pvKey: PrivateKey) {

        const oraclePublicKey = this.oraclePublicKey.get()
        this.oraclePublicKey.assertEquals(oraclePublicKey);

        const validSignature = signature.verify(oraclePublicKey, [balance, contractAddress.chainId, ...contractAddress.fields]);
        validSignature.assertTrue();

        balance.assertGte(Field(1));

        const verifiedOwnership = new VerifiedOwnership({evmContractAddress: contractAddress, minaAddress: pvKey.toPublicKey()})
        this.emitEvent('verified', verifiedOwnership);


    }

    @method updateOraclePublicKey(newOraclePublicKey: PublicKey, admin: PrivateKey) {
        const currentOraclePublicKey = this.oraclePublicKey.get();
        this.oraclePublicKey.assertEquals(currentOraclePublicKey);
        this.oraclePublicKey.set(newOraclePublicKey);
        const adminPk = admin.toPublicKey();
        this.account.delegate.assertEquals(adminPk);
    }

}