import { Resolver, Query, Mutation, Args, Int ,  } from '@nestjs/graphql';
import { ContractService } from './contract.service';
import { Contract } from './entities/contract.entity';
import { BaseResolver } from "../base/base.resolver";
import GetContractListResponse from "./dto/get-contract-list.response";
import {UseGuards} from "@nestjs/common";
import {SSXGuard} from "../auth/ssx-auth.guard";

import {Siwe} from "../user/helpers/siwe.decorator";
import SignedOwnershipData from "./dto/signed-ownership-data.response";
import {SignedOwnershipDataInput} from "./dto/signed-ownership-data.input";


@Resolver(() => Contract)
export class ContractResolver extends BaseResolver(Contract, GetContractListResponse){

  constructor(private readonly collectionProofService: ContractService) {
    super(collectionProofService)
  }

  //@Query(() => SignedContract, { name: 'getSignedContract' })
  @Query(() => SignedOwnershipData, { name: 'getOwnershipSignedData' })
  @UseGuards(SSXGuard)
  async getOwnershipSignedData(@Args() args: SignedOwnershipDataInput, @Siwe() siwe: any) {
    const result = await this.collectionProofService.verify(args.address,  siwe.chainId, args.ercType, siwe.address)
    return result
  }




}
