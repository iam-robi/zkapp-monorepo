import {Args, Query, Resolver,} from '@nestjs/graphql';
import {ContractService} from './contract.service';
import {Contract} from './entities/contract.entity';
import {BaseResolver} from "../base/base.resolver";
import GetContractListResponse from "./dto/get-contract-list.response";
import {UseGuards} from "@nestjs/common";
import {SSXGuard} from "../auth/ssx-auth.guard";

import {Siwe} from "../user/helpers/siwe.decorator";
import SignedOwnershipData from "./dto/signed-ownership-data.response";
import {ERCType, SignedOwnershipDataInput} from "./dto/signed-ownership-data.input";
import {SignService} from "../sign/sign.service";


@Resolver(() => Contract)
export class ContractResolver extends BaseResolver(Contract, GetContractListResponse){

  constructor(private readonly contractService: ContractService , private readonly signService: SignService) {
    super(contractService)
  }

  //@Query(() => SignedContract, { name: 'getSignedContract' })
  @Query(() => SignedOwnershipData, { name: 'getOwnershipSignedData' })
  @UseGuards(SSXGuard)
  async getOwnershipSignedData(@Args() args: SignedOwnershipDataInput, @Siwe() siwe: any) {
    const result = await this.contractService.verify(args.address,  siwe.chainId, args.ercType, siwe.address)
    return result
  }

  @Query(() => SignedOwnershipData, { name: 'getOwnershipSignedDataTest' })
  // @UseGuards(SSXGuard)
  async getOwnershipSignedDataTest() {
    const result = await this.signService.signTokenBalance( 20, "0x0C3b29321611736341609022C23E981AC56E7f96", 43114)
    //const result = await this.contractService.verify("0x0C3b29321611736341609022C23E981AC56E7f96", 43114, ERCType.ERC721, "0x04cB6fd7e278096A8eAB5CcE44a821ea1D43D476")
    return result

  }





}
