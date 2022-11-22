// !!! used by localhost not docker , config not read by production app either
import { MikroOrmModuleOptions as Options } from '@mikro-orm/nestjs';

import { LoadStrategy } from '@mikro-orm/core';

const config: Options = {
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  // entities: [Registration],
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dbName: process.env.DB_DATABASE,
  // port: Number(process.env.PG_PORT),
  type: 'postgresql',
  debug: true,
  loadStrategy: LoadStrategy.JOINED,
  migrations: {
    path: 'dist/src/migrations',
    pathTs: 'src/migrations',
  },
  seeder: {
    defaultSeeder: 'DatabaseSeeder',
    //generated seeder must be moved from dist to src folder (error)
    path: 'dist/src/seeders',
    // pathTs is not changing output
    // pathTs: './src/seeders'
  },
};

export default config;
