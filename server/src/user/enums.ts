import {User} from "./entities/user.entity";
import {PublicKey, Signature} from "snarkyjs";

export enum Gender {
    FEMALE,
    MALE,
    NB,
    UNDEFINED
}

export type SignedUser = {
    data: User
    signature: Signature
    publicKey: PublicKey
}