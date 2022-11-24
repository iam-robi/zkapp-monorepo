import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RegistrationService } from './registration.service';
import { Registration } from './entities/registration.entity';
import { CreateRegistrationInput } from './dto/create-registration.input';
import { BaseResolver } from "../base/base.resolver";
import GetTagListResponse from "./dto/get-registration-list.response";


@Resolver(() => Registration)
export class RegistrationResolver extends BaseResolver(Registration, GetTagListResponse){
  constructor(private readonly registrationService: RegistrationService) {
    super(registrationService)
  }


  @Mutation(() => Registration)
  createRegistration(@Args('createRegistrationInput') createRegistrationInput: CreateRegistrationInput) {
    return this.registrationService.save(createRegistrationInput);
  }

}
