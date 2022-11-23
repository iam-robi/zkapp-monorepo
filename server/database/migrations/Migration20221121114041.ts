import { Migration } from '@mikro-orm/migrations';

export class Migration20221121114040 extends Migration {

    async up(): Promise<void> {
        this.addSql('drop table if exists "registration" cascade;');
        this.addSql('create table "registration" ("id" uuid not null, "name" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, constraint "registration_pkey" primary key ("id"));');
    }

    async down(): Promise<void> {
        this.addSql('drop table if exists "registration" cascade;');
        this.addSql('create table "registration" ("uuid" uuid not null, "name" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, constraint "registration_pkey" primary key ("uuid"));');
    }

}
