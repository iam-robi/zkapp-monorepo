import { SignedOwnershipData } from "~/types/oracle/graphql";
import { ERCType } from "~/store/account/account.index";
import { Maybe } from "@graphql-tools/utils";
import { Zkapp } from "~/types/minaexplorer/graphql";
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
  zkAppAddress: string;
  oracleSignerPublicKey: string;
  selectedTokenAddress: string | null;
  selectedChainId?: number;
  selectedTokenType: ERCType;
  oracleData: SignedOwnershipData | null;
  currentStep: Number | null;
  account?: any;
  zkApp?: any;
  steps: OwnershipOracleSteps;
  events: Array<Maybe<Zkapp>>;
  eventsLoading: Boolean;
}
