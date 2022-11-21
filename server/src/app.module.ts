import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MikroOrmModule} from "@mikro-orm/nestjs";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver} from "@nestjs/apollo";
import { RegistrationModule } from './registration/registration.module';
import {LoadStrategy} from "@mikro-orm/core";
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import {AuthService} from "./auth/auth.service";
import {JwtService} from "@nestjs/jwt";
import { SignModule } from './sign/sign.module';
@Module({
  imports: [
    MikroOrmModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
      debug: false,
      playground: true,
      introspection: true,
      persistedQueries: false
    }),
    RegistrationModule,
    UserModule,
    AuthModule,
    SignModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
