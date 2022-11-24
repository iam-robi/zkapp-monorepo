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
import {SSXGuard} from "../auth/ssx-auth.guard";


@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService, private signService: SignService) {}



  @Query(() => SignedUser, { name: 'userProfile' })
  @UseGuards(SSXGuard)
  async getUserProfile(@CurrentUser() user: User) {
    //TODO: find a way to get current user
    // const userData = await this.userService.find({where: {
    //     id: user.id
    //   }});
    // const signedData = this.signService.minaSign(userData);
    // return signedData;
    return "WIP"
  }

}
