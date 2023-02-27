import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { Contract } from './entities/contract.entity';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/postgresql';
import { erc721Abi } from './abis/erc721';
import { ethers } from 'ethers';
import networkConfig from '../../config/networkConfig';
import { SignService } from '../sign/sign.service';
import { ERCType } from './dto/signed-ownership-data.input';
import { erc20Abi } from './abis/erc20';

@Injectable()
export class ContractService extends BaseService<Contract> {
  constructor(
    @InjectRepository(Contract) repository: EntityRepository<Contract>,
    private signService: SignService,
  ) {
    super(repository);
  }

  async findByAddress(address: string, chainId: Number): Promise<Contract> {
    return await this.repository.findOne({
      address,
      chainId,
    });
  }

  async getBalanceData(
    address: string,
    chainId: Number,
    ercType: ERCType,
    userAddress: string,
  ) {
    const contractData = await this.repository.findOne({
      address,
      chainId,
    });
    if (!contractData) {
      await this.repository.create({
        address,
        chainId,
      });
    }

    const conf = networkConfig[`chainId${chainId}`];
    const provider = new ethers.providers.JsonRpcProvider(
      conf.rpcUrls.Main.url,
    );

    let contract;

    if (ercType === ERCType.ERC721) {
      try {
        contract = new ethers.Contract(address, erc721Abi, provider);
      } catch {
        throw new NotFoundException('Error interacting with contract');
      }
    }

    if (ercType === ERCType.ERC20) {
      try {
        contract = new ethers.Contract(address, erc20Abi, provider);
      } catch {
        throw new NotFoundException('Error interacting with contract');
      }
    }
    // console.log(contractData.address)

    let balance = await contract.balanceOf(userAddress);
    console.log(balance, 'balance');

    if (ercType === ERCType.ERC20) {
      balance = ethers.utils.formatEther(balance);
      balance = parseInt(balance);
    } else {
      balance = balance.toString();
    }

    //register contract as used for verification if not yet register
    if (!contractData) {
      await this.repository.create({
        address,
        chainId,
      });
    }

    const createdAt = new Date();
    return {
      address,
      chainId,
      createdAt,
      balance,
    };
  }

  //query transactions {
  //     mints(orderBy: timestamp, orderDirection: desc, where: { to: "0x04cB6fd7e278096A8eAB5CcE44a821ea1D43D476" }) {
  //       id
  //       transaction {
  //         id
  //         timestamp
  //       }
  //       pair {
  //         id
  //         token0 {
  //           id
  //           symbol
  //         }
  //         token1 {
  //           id
  //           symbol
  //         }
  //       }
  //       to
  //       liquidity
  //       amount0
  //       amount1
  //       amountUSD
  //     }
  //     burns(orderBy: timestamp, orderDirection: desc, where: { sender: "0x04cB6fd7e278096A8eAB5CcE44a821ea1D43D476" }) {
  //       id
  //       transaction {
  //         id
  //         timestamp
  //       }
  //       pair {
  //         id
  //         token0 {
  //           symbol
  //         }
  //         token1 {
  //           symbol
  //         }
  //       }
  //       sender
  //       to
  //       liquidity
  //       amount0
  //       amount1
  //       amountUSD
  //     }
  //     swaps(orderBy: timestamp, orderDirection: desc, where: { to: "0x04cB6fd7e278096A8eAB5CcE44a821ea1D43D476" }) {
  //       id
  //       transaction {
  //         id
  //         timestamp
  //       }
  //       pair {
  //         token0 {
  //           symbol
  //         }
  //         token1 {
  //           symbol
  //         }
  //       }
  //       amount0In
  //       amount0Out
  //       amount1In
  //       amount1Out
  //       amountUSD
  //       to
  //     }
  // }
}
