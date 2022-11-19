import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { RegistrationFactory} from "../factories/registration.factory";

export class DatabaseSeeder extends Seeder {

  async run(em: EntityManager): Promise<void> {
    new RegistrationFactory(em).make(10)
  }

}
