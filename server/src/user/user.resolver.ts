import {Resolver, Query, Mutation, Args, Int, ObjectType} from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import {CurrentUser} from "./helpers/CurrentUser";
import {SignService} from "../sign/sign.service";
import {SignedUser} from "../sign/types";


@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService, private signService: SignService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query(() => [User], { name: 'user' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.userService.findOne(id);
  }

  @Query(() => SignedUser, { name: 'userProfile' })
  @UseGuards(GqlAuthGuard)
  async getUserProfile(@CurrentUser() user: User) {
    const userData = await this.userService.findOne(user.id);
    const signedData = this.signService.minaSign(userData);
    return signedData;
    // return this.userService.findOne(user.id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }
}
