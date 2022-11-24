import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import {LocalAuthGuard} from "./auth/local-auth.guard";
import {AuthService} from "./auth/auth.service";
import {JwtAuthGuard} from "./auth/jwt-auth.guard";
import {UserService} from "./user/user.service";
import {Cookie} from "express-session";
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService , private userService: UserService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Req() req) {
    return this.authService.login(req.user);
  }
  @Get('hello')
  getHello(@Req() req ): string {
    console.log("hello", req.cookies)
    console.log("hello", req.ssx)
    return "hello";
    // return this.appService.getHello();
  }


  // @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {

    console.log(req.ssx.verified)
    return req.ssx.verified
    //
    // const userData = this.userService.findOne(req.user.id);
    //
    // return userData;
  }
}
