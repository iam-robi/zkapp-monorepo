import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { Exchange } from './entities/exchange.entity';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import networkConfig from '../../config/networkConfig';
import { SignService } from '../sign/sign.service';
import { SupportedExchanges } from './enums';
import { request, gql } from 'graphql-request';
const { _ } = require('lodash');
@Injectable()
export class ExchangeService extends BaseService<Exchange> {
  constructor(
    @InjectRepository(Exchange) repository: EntityRepository<Exchange>,
    private signService: SignService,
  ) {
    super(repository);
  }

  async getTradingData(address: string, exchange: SupportedExchanges) {
    //@ts-ignore
    const getTradingData = gql`
      query transactions($address: Bytes!) {
        swaps(
          orderBy: timestamp
          orderDirection: desc
          where: { to: $address }
        ) {
          id
          to
          amountUSD
          timestamp
        }
      }
    `;

    let data;
    try {
      data = await request(
        'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
        getTradingData,
        // variables are type-checked!
        { address: address },
      );
    } catch (err) {}

    const swapCounts = data.swaps.length;

    const amounts = data.swaps.map((swap) => parseInt(swap.amountUSD));
    const amountUsd = _.sum(amounts);

    const createdAt = new Date();

    return {
      amountUsd,
      swapCounts,
      exchange,
      createdAt,
    };
  }
}
