import { Injectable } from '@nestjs/common';
import {PrivateKey, Signature, Field, isReady, Poseidon, Encoding} from "snarkyjs";
import {User} from "../user/entities/user.entity";
@Injectable()
export class SignService {
  constructor() {}

  async minaSign(data: any) {

    await isReady;
    const privateKey = PrivateKey.fromBase58(process.env.MINA_PRIVATE_KEY);
    const publicKey = privateKey.toPublicKey();
    //TODO: make it format agnostic
    // const dataHash = Poseidon.hash(JSON.stringify(data));
    //TODO: remove password from user data
    // const { password , ...userInfo} = user;

    // const id = Field(user.id);
    // const age = Field(Number(user.age));
    // const gender = Field(Number(user.gender));
    const dataString = JSON.stringify(data);
    const encodedData = Encoding.stringToFields(dataString);

     const signature = Signature.create(privateKey, encodedData);

    const result = {
      data: data,
      signature: signature.toJSON(),
      publicKey: publicKey.toBase58(),
    };

    return result;
    //console.log(result);
    // return result;
  }
}
