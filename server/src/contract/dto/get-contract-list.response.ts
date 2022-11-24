import { ObjectType } from '@nestjs/graphql'
import { BaseListResponse } from '../../base/dto/base-list.response'
import { Contract } from '../entities/contract.entity'

@ObjectType()
export default class GetContractListResponse extends BaseListResponse(Contract) {}