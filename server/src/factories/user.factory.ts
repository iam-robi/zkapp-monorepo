import { Factory, Faker } from '@mikro-orm/seeder';

import { User } from '../user/entities/user.entity';
import { Gender } from '../user/enums';

export class UserFactory extends Factory<User> {
  model = User;

  definition(faker: Faker): Partial<User> {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    return {
      firstName: firstName,
      lastName: lastName,
      age: faker.datatype.number({ min: 18, max: 90 }),
      gender: faker.helpers.arrayElement([
        Gender.FEMALE,
        Gender.MALE,
        Gender.UNDEFINED,
      ]),
      email: faker.internet.email(firstName, lastName),
      password: faker.lorem.word(5),
    };
  }
}
