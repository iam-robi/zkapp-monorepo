import { Field, ArgsType, Int } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';

import { SupportedExchanges } from '../enums';

registerEnumType(SupportedExchanges, {
  name: 'SupportedExchanges',
});
@ArgsType()
export class SignedTradingDataInput {
  @Field()
  exchange: SupportedExchanges;
}
