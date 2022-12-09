import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateExchangeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
