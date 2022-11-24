// following this example https://github.com/productdevbook/oku-nuxt3-template/tree/master/src
import { defineStore } from 'pinia'
import { AccountState } from "~/store/account/account.types";
import { useNuxtApp, useRuntimeConfig } from "#app";
import {GqlGetOwnershipProof, GqlGetOwnershipSignedData, GqlGetSignedCollectionProof, GqlUserProfile} from "#imports";
export enum ERCType  {
    ERC20 = 'ERC20',
    ERC721 = 'ERC721'
}
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
        },
        getUserInfo: async function(){
            try {
                const res = await GqlUserProfile()
            } catch (error) {
            }
        },
        getSignedOwnershipData: async function(address: string, ercType: ERCType){
            try {
                const res = await GqlGetOwnershipSignedData({address, ercType})
            } catch (error) {
            }
        }
    }

})