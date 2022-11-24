import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    let user = await this.userService.findByAddress(username);
    if(!user) {
      this.userService.save({
        address: username
      })
      user = await this.userService.findByAddress(username);
    }
    return user;
    // if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    // return null;
  }

  async validateAddress(address): Promise<any> {
    let user = await this.userService.findByAddress(address);
    if(!user) {
      this.userService.save({
        address: address
      })
      user = await this.userService.findByAddress(address);
    }
    return user;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id };
    console.log(this.jwtService)
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
