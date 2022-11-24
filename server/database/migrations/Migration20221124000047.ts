import { Migration } from '@mikro-orm/migrations';

export class Migration20221124000047 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" add column "address" varchar(255) not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" drop column "address";');
  }

}
