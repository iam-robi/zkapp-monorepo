import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { RegistrationFactory} from "../factories/registration.factory";
import {UserFactory} from "../factories/user.factory";
import {CollectionProofFactory} from "../factories/collection-proof.factory";

export class DatabaseSeeder extends Seeder {

  async run(em: EntityManager): Promise<void> {
    new RegistrationFactory(em).make(10)
    new UserFactory(em).make(100)
    new CollectionProofFactory(em).make(10)
  }

}
