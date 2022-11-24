import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCollectionProofInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
