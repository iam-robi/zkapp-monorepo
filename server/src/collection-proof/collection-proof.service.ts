import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service'
import {CollectionProof} from "./entities/collection-proof.entity";
import { InjectRepository } from '@mikro-orm/nestjs'
import { EntityRepository } from '@mikro-orm/postgresql'

@Injectable()
export class CollectionProofService extends BaseService<CollectionProof>{

  constructor(@InjectRepository(CollectionProof) repository: EntityRepository<CollectionProof>) {
    super(repository)
  }
}
