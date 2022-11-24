import { CreateCollectionProofInput } from './create-collection-proof.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCollectionProofInput extends PartialType(CreateCollectionProofInput) {
  @Field(() => Int)
  id: number;
}
