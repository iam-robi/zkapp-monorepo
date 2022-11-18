import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MikroOrmModule} from "@mikro-orm/nestjs";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver} from "@nestjs/apollo";
import { RegistrationModule } from './registration/registration.module';
@Module({
  imports: [
    MikroOrmModule.forRoot({
      // entities: ['./dist/entities'],
      // //entitiesTs: ['./src/**/entities'],
      // entitiesTs: ['./src/**/**.entity{.ts,.js}'],
      //https://github.com/mikro-orm/nestjs-realworld-example-app/blob/master/src/mikro-orm.config.ts.example
      entities: ['dist/**/*.entity.js'],
      entitiesTs: ['src/**/*.entity.ts'],
      // entities: [Registration],
      user: process.env.MIKROORM_USERNAME,
      password: process.env.MIKROORM_PASSWORD,
      host: process.env.MIKROORM_HOST,
      dbName: 'minaserver',
      type: 'postgresql',
      baseDir: '/usr/src/app'
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
      debug: false,
      playground: true,
      introspection: true,
      persistedQueries: false
    }),
    RegistrationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
