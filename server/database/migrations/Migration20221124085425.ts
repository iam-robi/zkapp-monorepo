import { Migration } from '@mikro-orm/migrations';

export class Migration20221124085425 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" alter column "email" type varchar(255) using ("email"::varchar(255));');
    this.addSql('alter table "user" alter column "email" drop not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" alter column "email" type varchar(255) using ("email"::varchar(255));');
    this.addSql('alter table "user" alter column "email" set not null;');
  }

}
