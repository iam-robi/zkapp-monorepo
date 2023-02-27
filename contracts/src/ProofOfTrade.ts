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
  Struct,
  Encoding,
  AccountUpdate,
} from 'snarkyjs';

const ORACLE_PUBLIC_KEY =
  'B62qqRNpzrmgdzte55XNWQz2Yj9vtXdib1QSYJzNab6Tc8mcxESHMZ7';

export class ProofOfTrade extends SmartContract {
  @state(PublicKey) oraclePublicKey = State<PublicKey>();
  @state(Field) dex = State<Field>();

  events = {
    verified: PublicKey,
  };

  deploy(args: DeployArgs) {
    super.deploy(args);
    this.account.permissions.set({
      ...Permissions.default(),
      editState: Permissions.signature(),
    });
  }

  @method init(zkappKey: PrivateKey) {
    super.init(zkappKey);
    //dex can only be 3 letters
    this.dex.set(Encoding.stringToFields('UNI')[0]);
    this.oraclePublicKey.set(PublicKey.fromBase58(ORACLE_PUBLIC_KEY));
    this.requireSignature();
  }

  //TODO: private key can't be sent as argument by auro wallet - how to access signer of the transaction ?
  @method verify(
    swapCounts: Field,
    amountUsd: Field,
    dex: Field,
    signature: Signature
  ) {
    const oraclePublicKey = this.oraclePublicKey.get();
    this.oraclePublicKey.assertEquals(oraclePublicKey);

    const validSignature = signature.verify(oraclePublicKey, [
      swapCounts,
      amountUsd,
      dex,
    ]);
    validSignature.assertTrue();

    swapCounts.assertGreaterThanOrEqual(Field(2));
    amountUsd.assertGreaterThanOrEqual(Field(10000));

    this.emitEvent('verified', this.sender);
  }

  @method updateOraclePublicKey(
    newOraclePublicKey: PublicKey,
    admin: PrivateKey
  ) {
    const currentOraclePublicKey = this.oraclePublicKey.get();
    this.oraclePublicKey.assertEquals(currentOraclePublicKey);
    this.oraclePublicKey.set(newOraclePublicKey);
    const adminPk = admin.toPublicKey();
    this.account.delegate.assertEquals(adminPk);
  }
}
