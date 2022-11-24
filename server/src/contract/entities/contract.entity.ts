import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Entity, PrimaryKey, Property  } from '@mikro-orm/core';
import * as crypto from 'crypto';

@Entity()
@ObjectType()
export class Contract {

  @Field(() => ID)
  @PrimaryKey({ type: 'uuid' })
  id: string = crypto.randomUUID();

  @Field({nullable: true})
  @Property({nullable: true})
  name: string;

  @Field({nullable: true})
  @Property({type: "text" , nullable: true})
  description: string;

  @Field()
  @Property()
  address!: string;

  @Field(() => Int)
  @Property()
  chainId!: number;

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
