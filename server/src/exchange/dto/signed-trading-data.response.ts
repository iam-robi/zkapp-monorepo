import { ObjectType } from '@nestjs/graphql';
import { Signed } from '../../sign/types';
import { TradingData } from './trading-data.response';

@ObjectType()
export default class SignedTradingData extends Signed(TradingData) {}
