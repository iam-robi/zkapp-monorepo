import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from './entities/user.entity';

@Module({
  providers: [UserResolver, UserService],
  exports: [UserService],
  imports: [MikroOrmModule.forFeature({ entities: [User] })],
})
export class UserModule {}
