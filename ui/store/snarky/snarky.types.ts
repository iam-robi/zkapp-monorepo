import { SignedOwnershipData } from "~/types/oracle/graphql";
import { TokenOwnershipOracle } from "zkapp-oracles";
import { ERCType } from "~/store/account/account.index";
export interface StepInfo {
  isLoading: Boolean;
  isFinished: Boolean;
}
export interface OwnershipOracleSteps {
  snarkyLoad: StepInfo;
  compilation: StepInfo;
  instance: StepInfo;
  signInEvm: StepInfo;
  dataFetch: StepInfo;
  proofTransaction: StepInfo;
}

export interface SnarkyState {
  isLoaded: Boolean;
  tokenOwnershipOracleAddress: string;
  oracleSignerPublicKey: string;
  selectedTokenAddress: string | null;
  selectedChainId?: number;
  selectedTokenType: ERCType;
  currentStep: Number;
  account?: any;
  zkApp?: any;
  steps: OwnershipOracleSteps;
}
