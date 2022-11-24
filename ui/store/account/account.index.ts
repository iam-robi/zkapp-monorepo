// following this example https://github.com/productdevbook/oku-nuxt3-template/tree/master/src
import { defineStore } from 'pinia'
import { AccountState } from "~/store/account/account.types";
import { useNuxtApp, useRuntimeConfig } from "#app";
import {GqlGetOwnershipProof, GqlGetSignedCollectionProof, GqlUserProfile} from "#imports";

export const useAccount = defineStore('account', {
    state: (): AccountState => ({
        address: "",
        email: "",
        loading: false,
        walletType: null,
        connected: false,
        provider: null,
        userInfo: null,
        balance: null,
        nfts: []
    }),

    actions: {
        signIn: async function() {
            const config = useRuntimeConfig();
            let { $ssx } = useNuxtApp();
            await $ssx.signIn();
            const userAddress = $ssx.address();
            const session = $ssx.session;
            console.log(userAddress, session)

        },
        getUserInfo: async function(){
            try {
                const res = await GqlUserProfile()
            } catch (error) {
            }
        },
        getSignedCollectionProof: async function(address: string){
            try {
                const res = await GqlGetOwnershipProof({address})
            } catch (error) {
            }
        }
    }


})