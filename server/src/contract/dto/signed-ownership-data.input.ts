
import {Field, ArgsType, Int} from '@nestjs/graphql';
import {registerEnumType} from "@nestjs/graphql";

export enum ERCType  {
    ERC20 = 'ERC20',
    ERC721 = 'ERC721'
}

registerEnumType(ERCType, {
    name: 'ERCType',
});
@ArgsType()
export class SignedOwnershipDataInput {
    @Field()
    address: string;

    @Field()
    ercType: ERCType

}