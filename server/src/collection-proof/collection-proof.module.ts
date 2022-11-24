import { Module } from '@nestjs/common';
import { CollectionProofService } from './collection-proof.service';
import { CollectionProofResolver } from './collection-proof.resolver';
import {MikroOrmModule} from "@mikro-orm/nestjs";
import {CollectionProof} from "./entities/collection-proof.entity";

@Module({
  imports: [MikroOrmModule.forFeature([CollectionProof])],

  providers: [CollectionProofResolver, CollectionProofService]
})
export class CollectionProofModule {}
