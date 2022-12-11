// following this example https://github.com/productdevbook/oku-nuxt3-template/tree/master/src
import { defineStore } from "pinia";
import {
  SupportedExchanges,
  TradeProofState,
} from "~/store/tradeProof/tradeProof.types";
import { GqlGetOwnershipSignedData, GqlGetTradingSignedData } from "#imports";
import { ERCType } from "~/store/account/account.index";
// import {Encoding, Field, isReady} from "snarkyjs";

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
  }),

  actions: {
    getSignedTradingData: async function (exchange: SupportedExchanges) {
      try {
        const res = await GqlGetTradingSignedData({ exchange });
        this.oracleData = res.getTradingSignedData;
      } catch (error) {}
    },
  },
  getters: {},
});
