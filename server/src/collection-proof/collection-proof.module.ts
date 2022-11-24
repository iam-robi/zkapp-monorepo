import { Module } from '@nestjs/common';
import { CollectionProofService } from './collection-proof.service';
import { CollectionProofResolver } from './collection-proof.resolver';
import {MikroOrmModule} from "@mikro-orm/nestjs";
import {CollectionProof} from "./entities/collection-proof.entity";
import {SignModule} from "../sign/sign.module";
import {UserModule} from "../user/user.module";

@Module({
  imports: [MikroOrmModule.forFeature([CollectionProof]), SignModule, UserModule],

  providers: [CollectionProofResolver, CollectionProofService]
})
export class CollectionProofModule {}
