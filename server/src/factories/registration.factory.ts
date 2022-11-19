import { Factory, Faker } from '@mikro-orm/seeder';

import {Registration} from "../registration/entities/registration.entity";

export class RegistrationFactory extends Factory<Registration> {
    model = Registration;

    definition(faker: Faker): Partial<Registration> {

        return {
            name: faker.lorem.words(2)
        };
    }
}