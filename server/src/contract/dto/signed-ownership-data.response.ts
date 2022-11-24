import { ObjectType } from '@nestjs/graphql'
import {Signed} from "../../sign/types";
import {OwnershipData} from "./ownership-data.response";

@ObjectType()
export default class SignedOwnershipData extends Signed(OwnershipData) {}