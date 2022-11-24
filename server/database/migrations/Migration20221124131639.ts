import { Migration } from '@mikro-orm/migrations';

export class Migration20221124131639 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "collection_proof" alter column "mina_proof_address" type varchar(255) using ("mina_proof_address"::varchar(255));');
    this.addSql('alter table "collection_proof" alter column "mina_proof_address" drop not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "collection_proof" alter column "mina_proof_address" type varchar(255) using ("mina_proof_address"::varchar(255));');
    this.addSql('alter table "collection_proof" alter column "mina_proof_address" set not null;');
  }

}
