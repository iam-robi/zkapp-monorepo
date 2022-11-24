import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//TODO: scale up https://docs.ssx.id/scaling-ssx-server
import { SSXServer, SSXExpressMiddleware } from "@spruceid/ssx-server";
import * as cookieParser from 'cookie-parser';

let cors = require('cors')
const ssx = new SSXServer({
  signingKey: process.env.APP_SECRET,
  providers: {
    metrics: { service: "ssx", apiKey: process.env.SSX_API_KEY },
  },
});


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  const options = {
    //TODO: set single host in prod https://github.com/nestjs/nest/issues/1579
    "origin": /^(.*)/,
    "methods": "GET,HEAD,PUT,PATCH,POST",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "credentials":true
  }
  app.enableCors(options);

  app.use(SSXExpressMiddleware(ssx));
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
