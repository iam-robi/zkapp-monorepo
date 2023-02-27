import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStoreInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  height: number;

  @Field(() => [[String, [String]]], { description: 'Example field (placeholder)' })
  items: any;

  @Field(() => String, { description: 'Example field (placeholder)' })
  zkAppAddress58: string;
}
