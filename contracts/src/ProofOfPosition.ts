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
    Encoding,
    MerkleMap,
    MerkleMapWitness,
    Struct,
    Poseidon,
    CircuitString,
    UInt64,
  } from 'snarkyjs';
  
  const ORACLE_PUBLIC_KEY =
    'B62qqRNpzrmgdzte55XNWQz2Yj9vtXdib1QSYJzNab6Tc8mcxESHMZ7';
  

    export class PublicPosition extends Struct({
        atLeast: Field,
        tokenAddress: CircuitString,
        targetUsdPrice: Field,
        timestamp: UInt64,
    }) {}


  export class ProofOfPosition extends SmartContract {
    @state(PublicKey) oraclePublicKey = State<PublicKey>();
    @state(Field) commitment = State<Field>();
  
    events = {
      documentPublished: Field,
    };
  
    deploy(args: DeployArgs) {
      super.deploy(args);
      this.account.permissions.set({
        ...Permissions.default(),
        editState: Permissions.none(),
      });
    }
  
    @method init(zkappKey: PrivateKey) {
      super.init();
      let map = new MerkleMap();
      this.commitment.set(map.getRoot());
      this.oraclePublicKey.set(PublicKey.fromBase58(ORACLE_PUBLIC_KEY));
      this.requireSignature();
    }
  
    //position data will be a struct that can be hashed to a field in the zkapp
    @method commitPosition(
      tokenAddress: CircuitString,
      tokenAmount: Field,
      atLeast: Field,
      targetUsdPrice: Field,
      merkleWitness: MerkleMapWitness,
      signature: Signature
    ) {
      const oraclePublicKey = this.oraclePublicKey.get();
      this.oraclePublicKey.assertEquals(oraclePublicKey);
  
      const commitment = this.commitment.get();
      this.commitment.assertEquals(commitment);

    //TODO: validate position data is verified by an oracle and validate conditions 
    //   const validSignature = signature.verify(oraclePublicKey, [
    //         tokenAmount,
    //         ...tokenAddress.toFields(),
    //    ]);
    //   validSignature.assertTrue();

      tokenAmount.assertGreaterThanOrEqual(atLeast);
        
      //for now user can only commit to one position per token, a key in the merkle corresponds to a token address and a mina address
        
      const positionKey = Poseidon.hash([...tokenAddress.toFields(), ...this.sender.toFields()]);

      // by doing so , we validate no position has been committed before
      const [ rootBefore , key ] = merkleWitness.computeRootAndKey(Field(0))

      key.assertEquals(positionKey);
      rootBefore.assertEquals(commitment);
      
      this.network.timestamp.assertEquals(this.network.timestamp.get());
      const epoch = this.network.timestamp.get()
      //commit with the new position data for user account
      const positionDataHash = Poseidon.hash([...tokenAddress.toFields(), atLeast , targetUsdPrice , ...epoch.toFields() ]);
      const [ newRoot , _ ] = merkleWitness.computeRootAndKey(positionDataHash)
      this.commitment.set(newRoot);

                                                                                                                                                                                                                                                                                                                                                                                                                                    
      const publicPosition = new PublicPosition({
        atLeast,
        tokenAddress,
        targetUsdPrice,
        timestamp: epoch,
      })
      // TODO: just public position fails with error)
      ///this.emitEvent('verified', publicPosition);
      const documentID =  positionDataHash

      this.emitEvent( 'documentPublished' , documentID );
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
  