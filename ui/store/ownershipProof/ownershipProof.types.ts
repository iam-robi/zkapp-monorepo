import { SignedOwnershipData } from "~/types/oracle/graphql";
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

export interface OwnershipProofState {
  isLoaded: Boolean;
  zkAppAddress: string;
  oracleSignerPublicKey: string;
  selectedTokenAddress: string | null;
  selectedChainId?: number;
  selectedTokenType: ERCType;
  oracleData: SignedOwnershipData | null;
  currentStep: Number;
  account?: any;
  zkApp?: any;
  steps: OwnershipOracleSteps;
  events: any;
}
