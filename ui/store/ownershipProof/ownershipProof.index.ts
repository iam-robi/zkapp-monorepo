// following this example https://github.com/productdevbook/oku-nuxt3-template/tree/master/src
import { defineStore } from "pinia";
import { OwnershipProofState } from "~/store/ownershipProof/ownershipProof.types";
import { ERCType } from "~/store/account/account.index";
import { GqlGetEvents, GqlGetOwnershipSignedData } from "#imports";
import {
  fetchAccount,
  isReady,
  Mina,
  PublicKey,
  setGraphqlEndpoint,
} from "snarkyjs";
import { TokenOwnershipOracle } from "zkapp-oracles";
// import {Encoding, Field, isReady} from "snarkyjs";

export const useOwnershipProof = defineStore("ownershipProof", {
  state: (): OwnershipProofState => ({
    isLoaded: false,
    zkAppAddress: "B62qqDxT8d7dZ7kbToMBU94nwc3BQ2mMjU53JpUYouqP7bNVkopXNuj",
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
    eventsLoading: false,
    events: [],
  }),

  actions: {
    getSignedOwnershipData: async function (address: string, ercType: ERCType) {
      try {
        const res = await GqlGetOwnershipSignedData({ address, ercType });
        console.log("res", res);
        this.oracleData = res.getOwnershipSignedData;
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
        this.zkApp = new TokenOwnershipOracle(
          PublicKey.fromBase58(this.zkAppAddress)
        );
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
