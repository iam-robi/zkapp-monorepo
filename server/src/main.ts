import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//TODO: scale up https://docs.ssx.id/scaling-ssx-server
import { SSXServer ,SSXExpressMiddleware } from "@spruceid/ssx-server";
import * as cookieParser from 'cookie-parser';
let cors = require('cors')

const ssx = new SSXServer({
  signingKey: process.env.APP_SECRET,
  providers: {
    metrics: { service: "ssx", apiKey: process.env.SSX_API_KEY },
    // sessionConfig: {
    //
    //   //https://github.com/DefinitelyTyped/DefinitelyTyped/blob/a24d35afe48f7fb702e7617b983ddca1904ba36b/types/express-session/index.d.ts#L52
    //   sessionOptions: {
    //     cookie: {
    //       maxAge: 1000 * 60 * 60,
    //       domain: "ui.oracle.staging.lensuscloud.com",
    //       // sameSite: "lax",
    //       sameSite: "none",
    //       secure: true
    //     }
    //   }
    // }
  },
});


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());


  const options = {
    //TODO: set single host in prod https://github.com/nestjs/nest/issues/1579
    "origin": true,
    // "methods": "GET,HEAD,PUT,PATCH,POST",
    // "preflightContinue": false,
    // "optionsSuccessStatus": 204,
    "credentials":true
  }
  app.enableCors(options);

  app.use(SSXExpressMiddleware(ssx));
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
