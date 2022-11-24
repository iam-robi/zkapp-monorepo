import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Entity, PrimaryKey, Property  } from '@mikro-orm/core';
import * as crypto from 'crypto';

@Entity()
@ObjectType()
export class CollectionProof {

  @Field(() => ID)
  @PrimaryKey({ type: 'uuid' })
  id: string = crypto.randomUUID();

  @Field()
  @Property()
  name!: string;

  @Field()
  @Property({type: "text"})
  description: string;

  @Field()
  @Property()
  address!: string;

  @Field()
  @Property()
  chainId!: Number;

  @Field({nullable: true})
  @Property({nullable: true})
  minaProofAddress: string;

  @Field(() => Date)
  @Property()
  createdAt: Date = new Date();
  //
  @Field(() => Date)
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
