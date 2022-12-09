import { Module } from '@nestjs/common';

import {MikroOrmModule} from "@mikro-orm/nestjs";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver} from "@nestjs/apollo";

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

import { SignModule } from './sign/sign.module';
import GraphQLJSON from "graphql-type-json";
import { ContractModule } from './contract/contract.module';
import { ExchangeModule } from './exchange/exchange.module';
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
    UserModule,
    AuthModule,
    SignModule,
    ContractModule,
    ExchangeModule
  ],
  providers: [],
})

export class AppModule {}
