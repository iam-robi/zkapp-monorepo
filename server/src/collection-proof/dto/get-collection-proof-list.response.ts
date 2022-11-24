import { ObjectType } from '@nestjs/graphql'
import { BaseListResponse } from '../../base/dto/base-list.response'
import {CollectionProof} from "../entities/collection-proof.entity";

@ObjectType()
export default class GetCollectionProofListResponse extends BaseListResponse(CollectionProof) {}