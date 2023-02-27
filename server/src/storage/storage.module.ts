import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { StorageResolver } from './storage.resolver';
import {MikroOrmModule} from "@mikro-orm/nestjs";
import {Contract} from "../contract/entities/contract.entity";
import {SignModule} from "../sign/sign.module";
import {UserModule} from "../user/user.module";

@Module({
  providers: [StorageResolver, StorageService]
})
export class StorageModule {}
