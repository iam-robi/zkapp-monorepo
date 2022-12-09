// following this example https://github.com/productdevbook/oku-nuxt3-template/tree/master/src
import { defineStore } from "pinia";
import { SnarkyState } from "~/store/snarky/snarky.types";
import { ERCType } from "~/store/account/account.index";
// import {Encoding, Field, isReady} from "snarkyjs";

export const useSnarky = defineStore("snarky", {
  state: (): SnarkyState => ({
    isLoaded: false,
    tokenOwnershipOracleAddress:
      "B62qrYrpVQHev7f1jQ3EaM44nCSFsTYbxCMqqDCm8GCJEZQM8EAVbMG",
    oracleSignerPublicKey:
      "B62qqFGos8L5WD45YSAyaF5dkQagnrnUdY54F2rGXU5gcjKnHq84CkS",
    account: undefined,
    zkApp: undefined,
    selectedTokenAddress: null,
    selectedChainId: undefined,
    selectedTokenType: ERCType.ERC721,
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

  actions: {},
  getters: {},
});
