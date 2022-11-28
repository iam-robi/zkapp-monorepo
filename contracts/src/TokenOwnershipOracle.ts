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
import {EvmAddress, VerifiedOwnership} from "./structs";

// The public key of our trusted data provider
const ORACLE_PUBLIC_KEY =
    'B62qqFGos8L5WD45YSAyaF5dkQagnrnUdY54F2rGXU5gcjKnHq84CkS';
const CONTRACT_ADDRESS = "0x0C3b29321611736341609022C23E981AC56E7f96"
const CHAIN_ID = 43114


export class TokenOwnershipOracle extends SmartContract {

    @state(PublicKey) oraclePublicKey = State<PublicKey>();
    // @state(EvmAddress) evmAddress = State<EvmAddress>();


    // Define contract events
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
        // Initialize contract state
        this.oraclePublicKey.set(PublicKey.fromBase58(ORACLE_PUBLIC_KEY));
        // let fields = Encoding.stringToFields(CONTRACT_ADDRESS)
        // let chainIdField = Field(CHAIN_ID)
        // let evmAddress = new EvmAddress({fields, chainId: chainIdField})
        // this.evmAddress.set(evmAddress)
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
        // this.emitEvent('test',  {
        //     "de": "ddd"
        // });

    }
}