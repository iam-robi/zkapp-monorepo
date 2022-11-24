import { ObjectType } from '@nestjs/graphql'
import {Signed} from "../../sign/types";
import {OwnershipProof} from "./ownership-proof.response";

@ObjectType()
export default class SignedOwnershipProof extends Signed(OwnershipProof) {}