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
    PrivateKey,
} from 'snarkyjs';

// The public key of our trusted data provider
const ORACLE_PUBLIC_KEY =
    'B62qqFGos8L5WD45YSAyaF5dkQagnrnUdY54F2rGXU5gcjKnHq84CkS';

export class OracleExample extends SmartContract {
    // Define contract state
    @state(PublicKey) oraclePublicKey = State<PublicKey>();

    // Define contract events
    events = {
        verified: Field,
    };

    deploy(args: DeployArgs) {
        super.deploy(args);
        this.setPermissions({
            ...Permissions.default(),
            editState: Permissions.proofOrSignature(),
        });
    }

    @method init(zkappKey: PrivateKey) {
        super.init(zkappKey);
        // Initialize contract state
        this.oraclePublicKey.set(PublicKey.fromBase58(ORACLE_PUBLIC_KEY));
        // Specify that caller should include signature with tx instead of proof
        this.requireSignature();
    }

    @method verify(id: Field, creditScore: Field, signature: Signature) {
        // Get the oracle public key from the contract state
        const oraclePublicKey = this.oraclePublicKey.get()
        this.oraclePublicKey.assertEquals(oraclePublicKey);

        const validSignature = signature.verify(oraclePublicKey, [id, creditScore]);
        validSignature.assertTrue()

        creditScore.assertGte(Field(700));
        this.emitEvent('verified', id);

        // Check that the signature is valid

        // Check that the provided credit score is greater than 700

        // Emit an event containing the verified users id

    }
}