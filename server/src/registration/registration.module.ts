import { Module } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationResolver } from './registration.resolver';
import {MikroOrmModule} from "@mikro-orm/nestjs";
import {Registration} from "./entities/registration.entity";

@Module({
  imports: [MikroOrmModule.forFeature([Registration])],
  providers: [RegistrationResolver, RegistrationService]
})
export class RegistrationModule {}
