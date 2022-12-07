import {SignedOwnershipData} from "~/types/oracle/graphql";
import {TokenOwnershipOracle} from "zkapp-oracles";
export interface StepInfo {
    isLoading: Boolean,
    isFinished: Boolean
}
export interface OwnershipOracleSteps {
    snarkyLoad: StepInfo,
    compilation: StepInfo,
    instance: StepInfo,
    signInEvm: StepInfo,
    dataFetch: StepInfo,
    proofTransaction: StepInfo
}

export interface SnarkyState {
    isLoaded: Boolean,
    tokenOwnershipOracleAddress: string,
    currentStep:  Number,
    account?: any,
    zkApp?: any,
    steps: OwnershipOracleSteps
}
