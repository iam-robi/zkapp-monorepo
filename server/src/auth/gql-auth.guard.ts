import {ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import {SSXGuard} from "./ssx-auth.guard";

@Injectable()
export class GqlAuthGuard extends SSXGuard {

  getRequest(context: ExecutionContext) {

    const ctx = GqlExecutionContext.create(context);
    // if(ctx.getContext().req.ssx.verified){
    //   console.log("loggedIn")
    // } else {
    //   throw new UnauthorizedException("Not signed in with ethereum")
    // }
    const req = ctx.getContext().req.ssx
    console.log("SsX isLoggedIn: ", ctx.getContext().req.ssx)
    return ctx.getContext().req;
  }
}
