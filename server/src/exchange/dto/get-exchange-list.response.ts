import { ObjectType } from '@nestjs/graphql';
import { BaseListResponse } from '../../base/dto/base-list.response';
import { Exchange } from '../entities/exchange.entity';

@ObjectType()
export default class GetExchangeListResponse extends BaseListResponse(
  Exchange,
) {}
