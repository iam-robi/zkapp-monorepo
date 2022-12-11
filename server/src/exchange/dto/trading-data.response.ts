import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';
import { Property } from '@mikro-orm/core';
import { SupportedExchanges } from '../enums';

@ObjectType()
export class TradingData {
  @Field(() => String)
  @Property()
  exchange!: SupportedExchanges;

  @Field(() => Int)
  @Property()
  swapCounts!: number;

  @Field(() => Int)
  @Property()
  amountUsd!: number;

  @Field(() => Date)
  createdAt: Date = new Date();
}
