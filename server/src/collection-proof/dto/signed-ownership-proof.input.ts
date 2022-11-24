
import {Field, ArgsType, Int} from '@nestjs/graphql';

@ArgsType()
export class SignedOwnershipProofInput {
    @Field()
    address: string;
}