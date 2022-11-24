import { Module } from '@nestjs/common';

import {MikroOrmModule} from "@mikro-orm/nestjs";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver} from "@nestjs/apollo";
import { RegistrationModule } from './registration/registration.module';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

import { SignModule } from './sign/sign.module';
import GraphQLJSON from "graphql-type-json";
import {AuthService} from "./auth/auth.service";
@Module({
  imports: [
    MikroOrmModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
      debug: false,
      playground: true,
      introspection: true,
      persistedQueries: false,
      resolvers: { JSON: GraphQLJSON },
      cors: {
        origin: /^(.*)/,
        credentials: true,
      },
    }),
    RegistrationModule,
    UserModule,
    AuthModule,
    SignModule
  ],
  providers: [],
})
export class AppModule {}
