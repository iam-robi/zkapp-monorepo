import { Field, ArgsType, Int } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';

import { SupportedDex } from '../enums';

registerEnumType(SupportedDex, {
  name: 'SupportedDex',
});
@ArgsType()
export class SignedTradingDataInput {
  @Field()
  dex: SupportedDex;
}
