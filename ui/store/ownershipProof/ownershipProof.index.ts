// following this example https://github.com/productdevbook/oku-nuxt3-template/tree/master/src
import { defineStore } from "pinia";
import { OwnershipProofState } from "~/store/ownershipProof/ownershipProof.types";
import { ERCType } from "~/store/account/account.index";
import { GqlGetOwnershipSignedData } from "#imports";
// import {Encoding, Field, isReady} from "snarkyjs";

export const useOwnershipProof = defineStore("ownershipProof", {
  state: (): OwnershipProofState => ({
    isLoaded: false,
    zkAppAddress: "B62qrYrpVQHev7f1jQ3EaM44nCSFsTYbxCMqqDCm8GCJEZQM8EAVbMG",
    oracleSignerPublicKey:
      "B62qqFGos8L5WD45YSAyaF5dkQagnrnUdY54F2rGXU5gcjKnHq84CkS",
    account: undefined,
    zkApp: undefined,
    selectedTokenAddress: null,
    selectedChainId: undefined,
    selectedTokenType: ERCType.ERC721,
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
    getSignedOwnershipData: async function (address: string, ercType: ERCType) {
      try {
        const res = await GqlGetOwnershipSignedData({ address, ercType });
        console.log("res", res);
        this.oracleData = res.getOwnershipSignedData;
      } catch (error) {}
    },
  },
  getters: {},
});
