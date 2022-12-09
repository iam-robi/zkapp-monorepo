// following this example https://github.com/productdevbook/oku-nuxt3-template/tree/master/src
import { defineStore } from "pinia";
import { AccountState } from "~/store/account/account.types";
import { useNuxtApp, useRuntimeConfig } from "#app";
import { GqlGetOwnershipSignedData, GqlUserProfile } from "#imports";
// import {Encoding, Field, isReady} from "snarkyjs";
export enum ERCType {
  ERC20 = "ERC20",
  ERC721 = "ERC721",
}
export const useAccount = defineStore("account", {
  state: (): AccountState => ({
    chains: [
      {
        chainId: 1,
        currencyName: "ETH",
        networkName: "Ethereum Mainnet",
        explorer: "https://etherscan.io/",
        rpcUrls: {
          Main: {
            name: "Main",
            // removed for privacy concerns url: 'https://rpc.ankr.com/eth',
            url: "https://eth-rpc.gateway.pokt.network",
          },
          Figment: {
            name: "Figment",
            url: "https://avalanche--mainnet--rpc.datahub.figment.io/apikey/edb2682adf9c3befbc6ad1ddc18bed45/ext/bc/C/rpc",
          },
        },
      },
      {
        chainId: 43114,
        currencyName: "AVAX",
        networkName: "Avalanche C-Chain",
        explorer: "https://snowtrace.io/",
        rpcUrls: {
          Main: {
            name: "Main",
            url: "https://api.avax.network/ext/bc/C/rpc",
          },
          Figment: {
            name: "Figment",
            url: "https://avalanche--mainnet--rpc.datahub.figment.io/apikey/edb2682adf9c3befbc6ad1ddc18bed45/ext/bc/C/rpc",
          },
        },
      },
      {
        chainId: 137,
        currencyName: "MATIC",
        networkName: "Polygon Mainnet",
        explorer: "https://polygonscan.com/",
        rpcUrls: {
          Main: {
            name: "Main",
            url: "https://polygon-rpc.com",
          },
          Figment: {
            name: "Figment",
            url: "https://avalanche--fuji--rpc.datahub.figment.io/apikey/edb2682adf9c3befbc6ad1ddc18bed45/ext/bc/C/rpc",
          },
        },
      },
    ],
    evmAddress: "",
    loading: false,
    walletType: null,
    connected: false,
    provider: null,
    userInfo: null,
    balance: null,
    ownershipData: null,
    session: null,
    transaction: null,
    minaAccounts: null,
    minaAddress: null,
    minaInstalled: false,
    minaLoggedIn: false,
  }),

  actions: {
    signIn: async function () {
      const config = useRuntimeConfig();
      let { $ssx } = useNuxtApp();
      await $ssx.signIn();
      const userAddress = $ssx.address();
      const userSession = $ssx.session;
      this.evmAddress = userAddress;
      this.session = $ssx.session;
    },
    minaSignIn: async function () {
      const { $mina } = useNuxtApp();
      try {
        this.minaAccounts = await $mina.requestAccounts();
      } catch (err) {
        console.log(err);
      }
      this.minaLoggedIn = true;
    },
    getSignedOwnershipData: async function (address: string, ercType: ERCType) {
      try {
        const res = await GqlGetOwnershipSignedData({ address, ercType });
        console.log("res", res);
        this.ownershipData = res.getOwnershipSignedData;
      } catch (error) {}
    },
    verifyOwnership: async function () {
      console.log("hello");

      //await isReady;

      // const address = Field(this.ownershipData.data.chainId)
      // const addressToFields = Encoding.stringToFields(this.ownershipData.data.address);
      // console.log(balance, address, addressToFields)
    },
  },
  getters: {
    getVerificationData(state) {},
  },
});
