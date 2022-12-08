import {defineNuxtPlugin} from "#app";
import { SSX } from "@spruceid/ssx";


const ssx = new SSX({

    enableDaoLogin: false,
    // resolveEns: true,
    providers: {
        // @ts-ignore
        web3: { driver: window.ethereum },
        server: { host: process.env.ORACLE_SERVER_ENDPOINT },
    },
});

export default defineNuxtPlugin(( nuxtApp) => {

    nuxtApp.provide('ssx', ssx)
})