import { Args, Query, Resolver } from '@nestjs/graphql';
import { ExchangeService } from './exchange.service';
import { Exchange } from './entities/exchange.entity';
import { BaseResolver } from '../base/base.resolver';
import GetExchangeListResponse from './dto/get-exchange-list.response';

import { Siwe } from '../user/helpers/siwe.decorator';
//import SignedTradingData from './dto/signed-ownership-data.response';
// import {
//   ERCType,
//   SignedTradingDataInput,
// } from './dto/signed-ownership-data.input';
import { SignService } from '../sign/sign.service';
import SignedTradingData from './dto/signed-trading-data.response';
import { SignedTradingDataInput } from './dto/signed-trading-data.input';
import { SupportedExchanges } from './enums';
import { UseGuards } from '@nestjs/common';
import { SSXGuard } from '../auth/ssx-auth.guard';

@Resolver(() => Exchange)
export class ExchangeResolver extends BaseResolver(
  Exchange,
  GetExchangeListResponse,
) {
  constructor(
    private readonly exchangeService: ExchangeService,
    private readonly signService: SignService,
  ) {
    super(exchangeService);
  }

  @Query(() => SignedTradingData, { name: 'getTradingSignedData' })
  @UseGuards(SSXGuard)
  async getTradingSignedData(
    @Args() args: SignedTradingDataInput,
    @Siwe() siwe: any,
  ) {
    const tData = await this.exchangeService.getTradingData(
      siwe.data.address,
      SupportedExchanges.Uniswap,
    );

    const result = await this.signService.signTradingData(tData);
    return result;
  }
}
