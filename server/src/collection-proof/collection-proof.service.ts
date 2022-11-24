import {ForbiddenException, Injectable, NotFoundException} from '@nestjs/common';
import { BaseService } from '../base/base.service'
import {CollectionProof} from "./entities/collection-proof.entity";
import { InjectRepository } from '@mikro-orm/nestjs'
import { EntityRepository } from '@mikro-orm/postgresql'
import {User} from "../user/entities/user.entity";
import { erc721Abi } from "./abis/erc721";
import {ethers} from "ethers";
import networkConfig from "../../config/networkConfig";
import {SignService} from "../sign/sign.service";


@Injectable()
export class CollectionProofService extends BaseService<CollectionProof>{

  constructor(@InjectRepository(CollectionProof) repository: EntityRepository<CollectionProof> , private signService: SignService) {
    super(repository)
  }

  async findByAddress(address: string, chainId: Number): Promise<CollectionProof> {
    return await this.repository.findOne({
      address,
      chainId
    })
  }


  async verify(address: string, chainId: Number, userAddress: string) {
    console.log("hey")
    const collectionData = await this.repository.findOne({
      address,
      chainId
    })

    if(!collectionData) {
      await this.repository.create({
        address,
        chainId
      })
    }
    const conf = networkConfig[`chainId${chainId}`]
    console.log(conf)
    const provider = new ethers.providers.JsonRpcProvider(conf.rpcUrls.Main.url);
    let erc721Contract;
    // console.log(collectionData.address)
    try {
      erc721Contract = new ethers.Contract(address, erc721Abi, provider);
    } catch {
      throw new NotFoundException("Error interacting with contract")
    }
    let quantity = await erc721Contract.balanceOf(userAddress)
    quantity = quantity.toString()


    //register collection as used for verification if not yet register
    if(!collectionData) {
      await this.repository.create({
        address,
        chainId
      })
    }

    const createdAt = new Date();
    let result = {
      address,
      chainId,
      createdAt,
      quantity
    }
    console.log(result)
    let signedResult = await this.signService.minaSign(result);
    return  signedResult

  }
}
