import { Migration } from '@mikro-orm/migrations';

export class Migration20221119124554 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "registration" ("uuid" uuid not null, "name" varchar(255) not null, "created_at" jsonb not null, "updated_at" jsonb not null, constraint "registration_pkey" primary key ("uuid"));');
  }

}
