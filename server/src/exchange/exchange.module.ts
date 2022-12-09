import { Module } from '@nestjs/common';
import { ExchangeService } from './exchange.service';
import { ExchangeResolver } from './exchange.resolver';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { SignModule } from '../sign/sign.module';
import { UserModule } from '../user/user.module';
import { Exchange } from './entities/exchange.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Exchange]), SignModule, UserModule],
  providers: [ExchangeResolver, ExchangeService],
})
export class ExchangeModule {}
