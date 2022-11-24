import type { EntityManager } from '@mikro-orm/core';
import {faker, Seeder} from '@mikro-orm/seeder';
import {UserFactory} from "../factories/user.factory";
import {ContractFactory} from "../factories/contract.factory";
import {Contract} from "../../src/contract/entities/contract.entity";

export class DatabaseSeeder extends Seeder {

  async run(em: EntityManager): Promise<void> {
    new UserFactory(em).make(100)
    new ContractFactory(em).make(10)
    const boredApeExample = em.create(Contract, {
      name: 'Bored Ape Yacht Club',
      description: faker.lorem.paragraph(),
      chainId: 1,
      address: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
    });

  }

}
