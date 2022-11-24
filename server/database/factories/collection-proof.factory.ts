import { Factory, Faker } from '@mikro-orm/seeder';
import { Gender } from '../../src/user/enums';
import {CollectionProof} from "../../src/collection-proof/entities/collection-proof.entity";


export class CollectionProofFactory extends Factory<CollectionProof> {
    model = CollectionProof;

    definition(faker: Faker): Partial<CollectionProof> {
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
