import { ObjectType } from '@nestjs/graphql'
import { BaseListResponse } from '../../base/dto/base-list.response'
import { Registration } from "../entities/registration.entity";

@ObjectType()
export default class GetTagListResponse extends BaseListResponse(Registration) {}