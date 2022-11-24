import { Module } from '@nestjs/common';
import { ContractService } from './contract.service';
import { ContractResolver } from './contract.resolver';
import {MikroOrmModule} from "@mikro-orm/nestjs";
import {Contract} from "./entities/contract.entity";
import {SignModule} from "../sign/sign.module";
import {UserModule} from "../user/user.module";

@Module({
  imports: [MikroOrmModule.forFeature([Contract]), SignModule, UserModule],

  providers: [ContractResolver, ContractService]
})
export class ContractModule {}
