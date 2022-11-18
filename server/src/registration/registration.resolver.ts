import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RegistrationService } from './registration.service';
import { Registration } from './entities/registration.entity';
import { CreateRegistrationInput } from './dto/create-registration.input';
import { UpdateRegistrationInput } from './dto/update-registration.input';

@Resolver(() => Registration)
export class RegistrationResolver {
  constructor(private readonly registrationService: RegistrationService) {}

  @Mutation(() => Registration)
  createRegistration(@Args('createRegistrationInput') createRegistrationInput: CreateRegistrationInput) {
    return this.registrationService.create(createRegistrationInput);
  }

  @Query(() => [Registration], { name: 'registration' })
  findAll() {
    return this.registrationService.findAll();
  }

  @Query(() => Registration, { name: 'registration' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.registrationService.findOne(id);
  }

  @Mutation(() => Registration)
  updateRegistration(@Args('updateRegistrationInput') updateRegistrationInput: UpdateRegistrationInput) {
    return this.registrationService.update(updateRegistrationInput.id, updateRegistrationInput);
  }

  @Mutation(() => Registration)
  removeRegistration(@Args('id', { type: () => Int }) id: number) {
    return this.registrationService.remove(id);
  }
}
