import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';
import { Property } from '@mikro-orm/core';
import { SupportedDex } from '../enums';

@ObjectType()
export class TradingData {
  @Field()
  address!: string;

  @Field(() => String)
  @Property()
  dex!: SupportedDex;

  @Field(() => Int)
  @Property()
  swapCounts!: number;

  @Field(() => Int)
  @Property()
  amountUsd!: number;

  @Field(() => Date)
  createdAt: Date = new Date();
}
