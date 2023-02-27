import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StorageService } from './storage.service';
import { CreateStoreInput } from './dto/create-store.input';
import { Field, isReady } from 'snarkyjs';

@Resolver()
export class StorageResolver {
  constructor(private readonly storageService: StorageService) {}

  @Mutation(() => Boolean, { name: 'store' })
  async createStore(@Args('args') args: CreateStoreInput) {
    await isReady;
    console.log(args.items[0][1]);
    //
    // const test = Field.fromJSON(args.items[0][1]);
    // const j = {
    //   hey: 'there',
    // };
    // let e = JSON.stringify(j);
    // console.log(e);
    // const t = Field.fromJSON(e);
    return true;
  }
}
