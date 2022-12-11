import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Entity, PrimaryKey } from '@mikro-orm/core';
import { SupportedExchanges } from '../enums';
import crypto from 'crypto';

@Entity()
@ObjectType()
export class Exchange {
  @Field(() => ID)
  @PrimaryKey({ type: 'uuid' })
  id: string = crypto.randomUUID();

  @Field(() => SupportedExchanges, {
    description: 'Example field (placeholder)',
  })
  name: SupportedExchanges;
}
