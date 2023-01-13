import { Args, Query, Resolver } from '@nestjs/graphql';
import { ContractService } from './contract.service';
import { Contract } from './entities/contract.entity';
import { BaseResolver } from '../base/base.resolver';
import GetContractListResponse from './dto/get-contract-list.response';
import { UseGuards } from '@nestjs/common';
import { SSXGuard } from '../auth/ssx-auth.guard';

import { Siwe } from '../user/helpers/siwe.decorator';
import SignedOwnershipData from './dto/signed-ownership-data.response';
import {
  ERCType,
  SignedOwnershipDataInput,
} from './dto/signed-ownership-data.input';
import { SignService } from '../sign/sign.service';

@Resolver(() => Contract)
export class ContractResolver extends BaseResolver(
  Contract,
  GetContractListResponse,
) {
  constructor(
    private readonly contractService: ContractService,
    private readonly signService: SignService,
  ) {
    super(contractService);
  }

  @Query(() => SignedOwnershipData, { name: 'getOwnershipSignedData' })
  @UseGuards(SSXGuard)
  async getOwnershipSignedData(
    @Args() args: SignedOwnershipDataInput,
    @Siwe() siwe: any,
  ) {
    const balanceData = await this.contractService.getBalanceData(
      args.address,
      siwe.chainId,
      args.ercType,
      siwe.address,
    );
    const result = await this.signService.signTokenBalance(
      balanceData.balance,
      args.address,
      siwe.chainId,
    );
    return result;
  }

// // query in dev mode 
// @Query(() => SignedOwnershipData, { name: 'getOwnershipSignedData' })

// async getOwnershipSignedData(
//   @Args() args: SignedOwnershipDataInput,
//   @Siwe() siwe: any,
// ) {
//   const balanceData = await this.contractService.getBalanceData(
//     '0x0C3b29321611736341609022C23E981AC56E7f96',
//     43114,
//     ERCType.ERC721,
//     '0x04cB6fd7e278096A8eAB5CcE44a821ea1D43D476',
//   );
//   const result = await this.signService.signTokenBalance(
//     balanceData.balance,
//     '0x0C3b29321611736341609022C23E981AC56E7f96',
//     43114,
//   );
//   return result;
// }

}
