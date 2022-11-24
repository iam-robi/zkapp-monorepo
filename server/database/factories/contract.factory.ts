import { Factory, Faker } from '@mikro-orm/seeder';
import { Gender } from '../../src/user/enums';
import {Contract} from "../../src/contract/entities/contract.entity";


export class ContractFactory extends Factory<Contract> {
    model = Contract;

    definition(faker: Faker): Partial<Contract> {
        const name = faker.lorem.words(3);
        const description = faker.lorem.paragraph();
        const address = faker.finance.ethereumAddress();
        const chainId = faker.helpers.arrayElement([1, 5, 43114])
        return {
            name,
            description,
            address,
            chainId
        };
    }
}
