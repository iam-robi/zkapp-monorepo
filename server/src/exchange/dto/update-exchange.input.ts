import { CreateExchangeInput } from './create-exchange.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateExchangeInput extends PartialType(CreateExchangeInput) {
  @Field(() => Int)
  id: number;
}
