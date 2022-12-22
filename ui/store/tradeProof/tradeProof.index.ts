// following this example https://github.com/productdevbook/oku-nuxt3-template/tree/master/src
import { defineStore } from "pinia";
import { TradeProofState } from "~/store/tradeProof/tradeProof.types";
import { GqlGetEvents, GqlGetTradingSignedData } from "#imports";
import { ERCType } from "~/store/account/account.index";
// import {Encoding, Field, isReady} from "snarkyjs";
import {
  Bool,
  fetchAccount,
  Field,
  isReady,
  Mina,
  PublicKey,
  setGraphqlEndpoint,
} from "snarkyjs";
import { ProofOfTrade } from "zkapp-oracles";
import { SupportedExchanges } from "~/types/oracle/graphql";

export const useTradeProof = defineStore("tradeProof", {
  state: (): TradeProofState => ({
    privateMode: true,
    zkAppAddress: "B62qrToYLmfpx7wSerFsRyP8qqw8bZ4BwsmwrybjTTLJBpmSTedmNpe",
    oracleSignerPublicKey:
      "B62qqRNpzrmgdzte55XNWQz2Yj9vtXdib1QSYJzNab6Tc8mcxESHMZ7",
    account: undefined,
    zkApp: undefined,
    selectedExchange: SupportedExchanges.Uniswap,
    oracleData: null,
    currentStep: 0,
    events: [],
    eventsLoading: false,
    steps: {
      snarkyLoad: {
        //1
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
      this.eventsLoading = true;
      const res = await GqlGetEvents({ zkAppAddress: this.zkAppAddress });
      await isReady;

      this.events = res.zkapps.map((event, index) => {
        const dateTime = event.dateTime;
        const verifiedEventStringArray =
          event.zkappCommand.accountUpdates[0].body.events[0].split(",");

        return {
          id: index + 1,
          dateTime: dateTime,
          exchange: "UNISWAP",
          tradeVolume: "10000",
          minaAddress: PublicKey.from({
            x: Field(verifiedEventStringArray[0]),
            isOdd: Bool(Boolean(Number(verifiedEventStringArray[1]))),
          }).toBase58(),
        };
      });
      this.eventsLoading = false;
    },
  },
  getters: {},
});
