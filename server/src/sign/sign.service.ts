import { Injectable } from '@nestjs/common';
import { PrivateKey, Signature, Field, isReady, Encoding } from 'snarkyjs';
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
    const dex = Encoding.stringToFields(tradingData.dex);
    console.log(dex);
    console.log(dex[0]);
    console.log(Encoding.stringToFields('UNISWAP'));
    console.log(Encoding.stringToFields('UNISWAP')[0]);
    console.log(
      Encoding.stringToFields(
        'UNISWAPUNISWAPUNISWAPUNISWAPUNISWAPUNISWAPUNISWAP',
      ),
    );
    console.log(
      Encoding.stringToFields(
        'UNISWAPUNISWAPUNISWAPUNISWAPUNISWAPUNISWAPUNISWAP',
      )[0],
    );

    const signature = Signature.create(privateKey, [
      Field(tradingData.swapCounts),
      Field(tradingData.amountUsd),
      ...dex,
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
