import { Resolver, Query, Mutation, Args, Int ,  } from '@nestjs/graphql';
import { CollectionProofService } from './collection-proof.service';
import { CollectionProof } from './entities/collection-proof.entity';
import { BaseResolver } from "../base/base.resolver";
import GetCollectionProofListResponse from "./dto/get-collection-proof-list.response";
import {UseGuards} from "@nestjs/common";
import {SSXGuard} from "../auth/ssx-auth.guard";

import {Siwe} from "../user/helpers/siwe.decorator";
import SignedOwnershipProof from "./dto/signed-ownership-proof.response";
import {SignedOwnershipProofInput} from "./dto/signed-ownership-proof.input";


@Resolver(() => CollectionProof)
export class CollectionProofResolver extends BaseResolver(CollectionProof, GetCollectionProofListResponse){

  constructor(private readonly collectionProofService: CollectionProofService) {
    super(collectionProofService)
  }

  //@Query(() => SignedCollectionProof, { name: 'getSignedCollectionProof' })
  @Query(() => SignedOwnershipProof, { name: 'getOwnershipProof' })
  @UseGuards(SSXGuard)
  async getOwnershipProof( @Args() args: SignedOwnershipProofInput, @Siwe() siwe: any) {
    const result = await this.collectionProofService.verify(args.address, siwe.chainId, siwe.address)
    return result

  }




}
