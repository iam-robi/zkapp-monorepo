import {defineNuxtPlugin, useRuntimeConfig} from "#app";
import { SSX } from "@spruceid/ssx";


const ssx = new SSX({

    enableDaoLogin: false,
    // resolveEns: true,
    providers: {
        // @ts-ignore
        web3: { driver: window.ethereum },
        server: { host: import.meta.env["VITE_ORACLE_SERVER_ENDPOINT"] },
    },
});

export default defineNuxtPlugin(( nuxtApp) => {

    const runtimeConfig = useRuntimeConfig()
    console.log(runtimeConfig.public)
    nuxtApp.provide('ssx', ssx)
})