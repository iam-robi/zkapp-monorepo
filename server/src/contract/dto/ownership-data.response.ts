import {InputType, Int, Field, ObjectType} from '@nestjs/graphql';
import {Property} from "@mikro-orm/core";

@ObjectType()
export class OwnershipData {

    @Field()
    address!: string;

    @Field(() => Int)
    @Property()
    chainId!: number;

    @Field(() => Int)
    @Property()
    balance!: number;

    @Field(() => Date)
    createdAt: Date = new Date();

}
