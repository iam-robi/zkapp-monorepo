// following this example https://github.com/productdevbook/oku-nuxt3-template/tree/master/src
import { defineStore } from "pinia";
import {
  SupportedExchanges,
  TradeProofState,
} from "~/store/tradeProof/tradeProof.types";
import { GqlGetEvents, GqlGetTradingSignedData } from "#imports";
import { ERCType } from "~/store/account/account.index";
// import {Encoding, Field, isReady} from "snarkyjs";
import {
  fetchAccount,
  isReady,
  Mina,
  PublicKey,
  setGraphqlEndpoint,
} from "snarkyjs";
import { ProofOfTrade } from "zkapp-oracles";

export const useTradeProof = defineStore("tradeProof", {
  state: (): TradeProofState => ({
    isLoaded: false,
    zkAppAddress: "B62qiq7snXyJYL2VSJ7mL7rB4952TsMUBu8yUzVDe61rv56T4ynD3Vn",
    oracleSignerPublicKey:
      "B62qqFGos8L5WD45YSAyaF5dkQagnrnUdY54F2rGXU5gcjKnHq84CkS",
    account: undefined,
    zkApp: undefined,
    selectedExchange: SupportedExchanges.UNISWAP,
    oracleData: null,
    currentStep: 0,
    events: [],
    steps: {
      snarkyLoad: {
        isLoading: false,
        isFinished: false,
      },
      compilation: {
        isLoading: false,
        isFinished: false,
      },
      instance: {
        isLoading: false,
        isFinished: false,
      },
      signInEvm: {
        isLoading: false,
        isFinished: false,
      },
      dataFetch: {
        isLoading: false,
        isFinished: false,
      },
      proofTransaction: {
        isLoading: false,
        isFinished: false,
      },
    },
    defaultSteps: {
      snarkyLoad: {
        isLoading: false,
        isFinished: false,
      },
      compilation: {
        isLoading: false,
        isFinished: false,
      },
      instance: {
        isLoading: false,
        isFinished: false,
      },
      signInEvm: {
        isLoading: false,
        isFinished: false,
      },
      dataFetch: {
        isLoading: false,
        isFinished: false,
      },
      proofTransaction: {
        isLoading: false,
        isFinished: false,
      },
    },
  }),

  actions: {
    getSignedTradingData: async function (exchange: SupportedExchanges) {
      try {
        const res = await GqlGetTradingSignedData({ exchange });
        this.oracleData = res.getTradingSignedData;
      } catch (error) {}
    },
    getZkAppInstance: async function () {
      await isReady;

      const graphqlEndpoint = "https://proxy.berkeley.minaexplorer.com/graphql";
      setGraphqlEndpoint(graphqlEndpoint);
      let Berkeley = Mina.Network(graphqlEndpoint);
      Mina.setActiveInstance(Berkeley);
      //const pk = PublicKey.fromBase58(ownershipProofStore.zkAppAddress);
      let { account, error } = await fetchAccount({
        publicKey: PublicKey.fromBase58(this.zkAppAddress),
      });
      try {
        this.zkApp = new ProofOfTrade(PublicKey.fromBase58(this.zkAppAddress));
        let value = this.zkApp.oraclePublicKey.get();

        console.log(
          `Found deployed zkapp, with state oraclePublic Key =  ${value.toBase58()}`
        );
      } catch (error) {
        console.log(error);
      }
      this.account = account;
    },
    getEvents: async function () {
      if (!this.zkApp) {
        console.log("setting instance from fetch events");
        await this.getZkAppInstance();
      }
      this.events = await GqlGetEvents({ zkAppAddress: this.zkAppAddress });
    },
  },
  getters: {},
});
