import { Migration } from '@mikro-orm/migrations';

export class Migration20221124084845 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" drop column "password";');
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" add column "password" varchar(255) not null;');
  }

}
