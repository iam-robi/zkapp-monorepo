// following this example https://github.com/productdevbook/oku-nuxt3-template/tree/master/src
import { defineStore } from 'pinia'
import { AccountState } from "~/store/account/account.types";
import { useNuxtApp, useRuntimeConfig } from "#app";
import {SnarkyState} from "~/store/snarky/snarky.types";
// import {Encoding, Field, isReady} from "snarkyjs";

export const useSnarky = defineStore('snarky', {
    state: (): SnarkyState => ({
        isLoaded: false,
        tokenOwnershipOracleAddress: "B62qrYrpVQHev7f1jQ3EaM44nCSFsTYbxCMqqDCm8GCJEZQM8EAVbMG",
        account: undefined,
        zkApp: undefined,
        currentStep: 0,
        steps: {
            snarkyLoad: {
                isLoading: false,
                isFinished: false
            },
            compilation: {
                isLoading: false,
                isFinished: false
            },
            instance: {
                isLoading: false,
                isFinished: false
            },
            signInEvm: {
                isLoading: false,
                isFinished: false
            },
            dataFetch: {
                isLoading: false,
                isFinished: false
            },
            proofTransaction: {
                isLoading: false,
                isFinished: false
            }
        }
    }),

    actions: {


    },
    getters: {

    }

})