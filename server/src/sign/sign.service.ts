import { Injectable } from '@nestjs/common';
import { PrivateKey, Signature, Field, isReady, Encoding , MerkleMap } from 'snarkyjs';
import { TradingData } from '../exchange/dto/trading-data.response';

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
  }
  async signTradingData(tradingData: TradingData) {
    await isReady;
    const privateKey = PrivateKey.fromBase58(process.env.MINA_PRIVATE_KEY);
    const publicKey = privateKey.toPublicKey();
    // const addressToFields = Encoding.stringToFields(tradingData.address);
    const exchange = Encoding.stringToFields(tradingData.exchange);

    const signature = Signature.create(privateKey, [
      Field(tradingData.swapCounts),
      Field(tradingData.amountUsd),
      exchange[0],
    ]);

    const result = {
      data: tradingData,
      signature: signature.toJSON(),
      publicKey: privateKey.toPublicKey(),
    };
    return result;
  }
  async signTokenBalance(balance: number, address: string, chainId: number) {
    await isReady;
    const privateKey = PrivateKey.fromBase58(process.env.MINA_PRIVATE_KEY);
    const publicKey = privateKey.toPublicKey();

    const addressToFields = Encoding.stringToFields(address);
    //const address = new CircuitString(address)
    // //TODO: add created at , read about how to use timestamps
    //
    const signature = Signature.create(privateKey, [
      Field(balance),
      Field(chainId),
      ...addressToFields,
    ]);
    const createdAt = new Date();

    const result = {
      data: { balance, address, chainId, createdAt },
      signature: signature.toJSON(),
      publicKey: privateKey.toPublicKey(),
    };

    return result;
  }
}
