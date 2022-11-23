import {ObjectType, Field, Int, ID} from '@nestjs/graphql';
import {Entity, PrimaryKey, Property} from "@mikro-orm/core";
import {Gender} from "../enums";
import * as crypto from "crypto";

@Entity()
@ObjectType()
export class User {

  @Field(() => ID)
  @PrimaryKey({ type: 'uuid'})
  id: string = crypto.randomUUID();

  @Property()
  password!: string;

  @Property()
  password2: string;


  @Field()
  @Property()
  firstName!: string;

  @Field()
  @Property()
  lastName!: string;

  @Field({ nullable: true })
  @Property()
  email!: string;

  @Field()
  @Property({nullable: true})
  age: Number;

  @Field()
  @Property({nullable: true})
  gender: Gender;

  @Field(() => Date)
  @Property()
  createdAt: Date = new Date();
  //
  @Field(() => Date)
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();


}
