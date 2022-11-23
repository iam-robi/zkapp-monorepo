import { Injectable } from '@nestjs/common';
import { CreateRegistrationInput } from './dto/create-registration.input';
import { UpdateRegistrationInput } from './dto/update-registration.input';
import { BaseService } from '../base/base.service'
import {Registration} from "./entities/registration.entity";
import { InjectRepository } from '@mikro-orm/nestjs'
import { EntityRepository } from '@mikro-orm/postgresql'

@Injectable()
export class RegistrationService extends BaseService<Registration>{

  constructor(@InjectRepository(Registration) repository: EntityRepository<Registration>) {
    super(repository)
  }
}
