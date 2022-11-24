import { Migration } from '@mikro-orm/migrations';

export class Migration20221124131453 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "collection_proof" ("id" uuid not null, "name" varchar(255) not null, "description" varchar(255) not null, "address" varchar(255) not null, "chain_id" int not null, "mina_proof_address" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, constraint "collection_proof_pkey" primary key ("id"));');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "collection_proof" cascade;');
  }

}
