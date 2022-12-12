import { SignedOwnershipData } from "~/types/oracle/graphql";
import { TokenOwnershipOracle } from "zkapp-oracles";
import { ERCType } from "~/store/account/account.index";

import { SignedTradingData } from "~/types/oracle/graphql";

export enum SupportedExchanges {
  UNISWAP = "UNI",
}
export interface StepInfo {
  isLoading: Boolean;
  isFinished: Boolean;
}
export interface TradeProofSteps {
  snarkyLoad: StepInfo;
  compilation: StepInfo;
  instance: StepInfo;
  signInEvm: StepInfo;
  dataFetch: StepInfo;
  proofTransaction: StepInfo;
}

export interface TradeProofState {
  isLoaded: Boolean;
  zkAppAddress: string;
  oracleSignerPublicKey: string;
  selectedExchange: SupportedExchanges;
  currentStep: Number;
  account?: any;
  zkApp?: any;
  steps: TradeProofSteps;
  defaultSteps: TradeProofSteps;
  oracleData: SignedTradingData | null;
  events: any;
  eventsLoading: Boolean;
}
