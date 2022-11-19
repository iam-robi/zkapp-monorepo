import {ObjectType, Field, Int, ID} from '@nestjs/graphql';
import {Entity, PrimaryKey, Property} from "@mikro-orm/core";
import * as crypto from "crypto";

@Entity()
@ObjectType()
export class Registration {

  @Field(() => ID)
  @PrimaryKey({ type: 'uuid'})
  uuid: string = crypto.randomUUID();

  @Property()
  name!: string;

  @Field(() => Date)
  @Property()
  createdAt = new Date();

  @Field(() => Date)
  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();


}
