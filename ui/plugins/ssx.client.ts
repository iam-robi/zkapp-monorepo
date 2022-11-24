import {defineNuxtPlugin} from "#app";
import {ethers} from "ethers";
import { SSX } from "@spruceid/ssx";

const ssx = new SSX({

    enableDaoLogin: true,
    // resolveEns: true,
    providers: {
        web3: { driver: window.ethereum },
        server: { host: "http://localhost:3008" },
    },
});

export default defineNuxtPlugin(( nuxtApp) => {

    nuxtApp.provide('ssx', ssx)
})