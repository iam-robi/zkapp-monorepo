import { Migration } from '@mikro-orm/migrations';

export class Migration20221118220226 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "registration" ("uuid" uuid not null default uuid_generate_v4(), "name" varchar(255) not null, "created_at" jsonb not null, "updated_at" jsonb not null, constraint "registration_pkey" primary key ("uuid"));');
  }

}
