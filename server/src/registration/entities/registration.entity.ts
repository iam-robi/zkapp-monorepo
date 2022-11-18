import {ObjectType, Field, Int, ID} from '@nestjs/graphql';
import {Entity, PrimaryKey, Property} from "@mikro-orm/core";

@Entity()
@ObjectType()
export class Registration {

  @Field(() => ID)
  @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
  uuid: string;

  @Property()
  name!: string;

  @Field(() => Date)
  @Property()
  createdAt = new Date();

  @Field(() => Date)
  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();


}
