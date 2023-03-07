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
    UInt64
    
  } from 'snarkyjs';
  
  const ORACLE_PUBLIC_KEY =
    'B62qqRNpzrmgdzte55XNWQz2Yj9vtXdib1QSYJzNab6Tc8mcxESHMZ7';
  
    export class PublicPositionKey extends Struct({
      minaAddress: PublicKey,
      tokenAddress: CircuitString
  }) {}
    export class PublicPositionData extends Struct({
        atLeast: Field,
        tokenAddress: CircuitString,
        targetUsdPrice: Field,
        timestamp: UInt64,
    }) {}

    import {
      offchainState,
      OffchainStateContract,
      OffchainState,
      OffchainStateMap,
      Key,
    } from '@zkfs/contract-api';

  export class ProofOfPosition extends OffchainStateContract {
    
    @state(PublicKey) oraclePublicKey = State<PublicKey>();
    @offchainState() public commitments = OffchainState.fromMap();

  
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
      this.commitments.setRootHash(OffchainStateMap.initialRootHash());
      this.oraclePublicKey.set(PublicKey.fromBase58(ORACLE_PUBLIC_KEY));
      this.requireSignature();
    }

    public getCommitmentKey(publicPositionKey: PublicPositionKey): Key<PublicPositionKey> {
      return Key.fromType<PublicPositionKey>(PublicPositionKey, publicPositionKey);
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
  
      const committer = this.sender;
      const publicPositionKey = new PublicPositionKey({
        minaAddress: committer,
        tokenAddress,
      })
      const storagekey = this.getCommitmentKey(publicPositionKey);
      this.commitments.assertNotExists(storagekey)

      tokenAmount.assertGreaterThanOrEqual(atLeast);

      
    //TODO: validate position data is verified by an oracle and validate conditions 
    //   const validSignature = signature.verify(oraclePublicKey, [
    //         tokenAmount,
    //         ...tokenAddress.toFields(),
    //    ]);
    //   validSignature.assertTrue();

      
        
      //for now user can only commit to one position per token, a key in the merkle corresponds to a token address and a mina address
        
      // const positionKey = Poseidon.hash([...tokenAddress.toFields(), ...this.sender.toFields()]);

      // // by doing so , we validate no position has been committed before
      // const [ rootBefore , key ] = merkleWitness.computeRootAndKey(Field(0))

      // key.assertEquals(positionKey);
      // rootBefore.assertEquals(commitment);
      
      // this.network.timestamp.assertEquals(this.network.timestamp.get());
      
      // //commit with the new position data for user account
      // const positionDataHash = Poseidon.hash([...tokenAddress.toFields(), atLeast , targetUsdPrice , ...epoch.toFields() ]);
      // const [ newRoot , _ ] = merkleWitness.computeRootAndKey(positionDataHash)
      // this.commitment.set(newRoot);

      const epoch = this.network.timestamp.get()                                                                                                                                                                                                                                                                                                                                                                                                                            
      const publicPositionData = new PublicPositionData({
        atLeast,
        tokenAddress,
        targetUsdPrice,
        timestamp: epoch,
      })

      this.commitments.set<PublicPositionKey, PublicPositionData>(PublicPositionData, storagekey, publicPositionData);
      // TODO: just public position fails with error)
      ///this.emitEvent('verified', publicPositionData);
      // const documentID =  positionDataHash

      // this.emitEvent( 'documentPublished' , documentID );
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
  