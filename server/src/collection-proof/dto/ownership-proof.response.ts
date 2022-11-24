import {InputType, Int, Field, ObjectType} from '@nestjs/graphql';
import {Property} from "@mikro-orm/core";

@ObjectType()
export class OwnershipProof {

    @Field()
    address!: string;

    @Field(() => Int)
    @Property()
    chainId!: number;

    @Field(() => Int)
    @Property()
    quantity!: number;

    @Field(() => Date)
    createdAt: Date = new Date();

}
