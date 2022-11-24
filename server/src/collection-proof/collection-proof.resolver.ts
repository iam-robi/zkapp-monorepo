import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CollectionProofService } from './collection-proof.service';
import { CollectionProof } from './entities/collection-proof.entity';
import { CreateCollectionProofInput } from './dto/create-collection-proof.input';
import { BaseResolver } from "../base/base.resolver";
import GetCollectionProofListResponse from "./dto/get-collection-proof-list.response";


@Resolver(() => CollectionProof)
export class CollectionProofResolver extends BaseResolver(CollectionProof, GetCollectionProofListResponse){

  constructor(private readonly collectionProofService: CollectionProofService) {
    super(collectionProofService)
  }


  @Mutation(() => CollectionProof)
  createCollectionProof(@Args('createCollectionProofInput') createCollectionProofInput: CreateCollectionProofInput) {
    return this.collectionProofService.save(createCollectionProofInput);
  }

}
