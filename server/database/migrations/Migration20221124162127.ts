import { Migration } from '@mikro-orm/migrations';

export class Migration20221124162127 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "collection_proof" alter column "name" type varchar(255) using ("name"::varchar(255));');
    this.addSql('alter table "collection_proof" alter column "name" drop not null;');
    this.addSql('alter table "collection_proof" alter column "description" type text using ("description"::text);');
    this.addSql('alter table "collection_proof" alter column "description" drop not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "collection_proof" alter column "name" type varchar(255) using ("name"::varchar(255));');
    this.addSql('alter table "collection_proof" alter column "name" set not null;');
    this.addSql('alter table "collection_proof" alter column "description" type text using ("description"::text);');
    this.addSql('alter table "collection_proof" alter column "description" set not null;');
  }

}
