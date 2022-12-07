// following this example https://github.com/productdevbook/oku-nuxt3-template/tree/master/src
import { defineStore } from 'pinia'
import { AccountState } from "~/store/account/account.types";
import { useNuxtApp, useRuntimeConfig } from "#app";
import { GqlGetOwnershipSignedData, GqlUserProfile} from "#imports";
// import {Encoding, Field, isReady} from "snarkyjs";
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
        ownershipData: null,
        session: null,
        transaction: null
    }),

    actions: {
        signIn: async function() {
            const config = useRuntimeConfig();
            let { $ssx } = useNuxtApp();
            await $ssx.signIn();
            const userAddress = $ssx.address();
            const userSession = $ssx.session;
            this.address = userAddress;
            this.session = $ssx.session;

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
                console.log("res",res)
                this.ownershipData = res.getOwnershipSignedData
            } catch (error) {
            }
        },
        verifyOwnership: async function(){
            console.log("hello")

            //await isReady;

            // const address = Field(this.ownershipData.data.chainId)
            // const addressToFields = Encoding.stringToFields(this.ownershipData.data.address);
            // console.log(balance, address, addressToFields)
        },

    },
    getters: {
        getVerificationData(state){

        }
    }

})