<template>
<div>
    Hello trade proof
</div>
</template>
<script setup>
import {NButton, NInput, NRadioButton, NRadioGroup, NSpace, NSteps, NStep, NButtonGroup , NSpin , NSelect, NIcon, NResult } from "naive-ui";
//import { MdArrowRoundBack, MdArrowRoundForward } from '@vicons/ionicons4'
import {
  Field,
  PrivateKey,
  PublicKey,
  Mina,
  isReady,
  shutdown,
  fetchAccount,
  setGraphqlEndpoint, Encoding, Signature,
} from 'snarkyjs';

import {onMounted, ref, computed} from "#imports";
import { useAccount } from "../store/account/account.index";
import { useTradeProof } from "../store/tradeProof/tradeProof.index";
import {ProofOfTrade , EvmAddress} from "zkapp-oracles";
import MinaLogIn from "~/components/wallets/MinaLogIn";
import {useNuxtApp} from "nuxt/app";

import { MdArrowBack as ArrowBack , IosExit as Exit} from '@vicons/ionicons4'
import { MdEasel } from '@vicons/ionicons4'

const accountStore = useAccount()


const tradeProofStore = useTradeProof();
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

onMounted(async () => {
  tradeProofStore.steps.snarkyLoad.isLoading = true
  if(!tradeProofStore.steps.snarkyLoad.isFinished) {
    await isReady;
  }

  tradeProofStore.steps.snarkyLoad.isLoading = false
  tradeProofStore.isLoaded = true
  tradeProofStore.steps.snarkyLoad.isFinished = true
  const graphqlEndpoint = 'https://proxy.berkeley.minaexplorer.com/graphql'
  setGraphqlEndpoint(graphqlEndpoint)
  let Berkeley = Mina.Network(graphqlEndpoint)
  Mina.setActiveInstance(Berkeley)
  tradeProofStore.currentStep = 1

})

const compileZkApp = async (zkAppAddress) => {
  tradeProofStore.steps.compilation.isLoading = true
  await sleep(500)
  await ProofOfTrade.compile()
  console.log("compilation finished")
  tradeProofStore.steps.compilation.isLoading = false
  tradeProofStore.steps.compilation.isFinished = true
  tradeProofStore.currentStep = 2
  await sleep(500)
}
const setZkApp = async () => {
  if(!tradeProofStore.zkApp){
    tradeProofStore.steps.instance.isLoading = true;
    await tradeProofStore.getZkAppInstance()
    tradeProofStore.steps.instance.isLoading = false;
  }
  tradeProofStore.steps.instance.isFinished = true;
  tradeProofStore.currentStep = 3
}
const signInToEvm = async function() {
  tradeProofStore.steps.signInEvm.isLoading = true
  await accountStore.signIn()
  const {$ssx} = useNuxtApp();
  tradeProofStore.selectedChainId = $ssx.chainId()
  tradeProofStore.steps.signInEvm.isLoading = false
  tradeProofStore.steps.signInEvm.isFinished = true
  tradeProofStore.currentStep = 4
}
const useExampleValue = function() {
  const {$ssx} = useNuxtApp()

  const currentChain = $ssx.chainId()
  if (currentChain === 43114) {
    tradeProofStore.selectedTokenAddress = "0x0C3b29321611736341609022C23E981AC56E7f96"
  } else if(currentChain === 1) {
    tradeProofStore.selectedTokenAddress = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
  } else if(currentChain === 137) {
    tradeProofStore.selectedTokenAddress = "0xB2435253C71FcA27bE41206EB2793E44e1Df6b6D"
  }

  tradeProofStore.selectedChainId = $ssx.chainId()
  tradeProofStore.selectedTokenType = "ERC721"
}
const fetchCertifiedData = async function() {
  tradeProofStore.steps.dataFetch.isLoading = true
  await tradeProofStore.getSignedTradingData(tradeProofStore.selectedExchange)
  tradeProofStore.steps.dataFetch.isLoading = false
  tradeProofStore.steps.dataFetch.isFinished = true
  tradeProofStore.currentStep = 5
}
const verify = async function() {
  tradeProofStore.steps.proofTransaction.isLoading = true

  let exchangeToField =  Encoding.stringToFields(tradeProofStore.selectedExchange)[0]
  let swapCounts = Field(tradeProofStore.oracleData.data.swapCounts)
  let amountUsd = Field(tradeProofStore.oracleData.data.amountUsd)

  const signature = Signature.fromJSON(tradeProofStore.oracleData.signature)
  // for debugging: check signature
  const validSignature = signature.verify(PublicKey.fromBase58(tradeProofStore.oracleSignerPublicKey), [swapCounts,amountUsd,exchangeToField]);
  console.log("validSignature", validSignature)

  let app = new ProofOfTrade(PublicKey.fromBase58(tradeProofStore.zkAppAddress));

  try {
    const txn = await Mina.transaction(() => {
      app.verify(
          swapCounts,
          amountUsd,
          exchangeToField,
          signature ?? fail('something is wrong with the signature'),
          PublicKey.fromBase58(accountStore.minaAccounts[0])
      );
    });

    //TODO: proving completeley
    await txn.prove();


    const { hash } = await window.mina.sendTransaction({
      transaction: txn.toJSON(),
      feePayer: {
        fee: 0.1,
        memo: "zk"
      }
    })
    console.log("transaction hash", hash);//
    tradeProofStore.transaction = hash
    tradeProofStore.currentStep = 6
    //
  } catch(err) {
    console.log("error", err)
  }

  tradeProofStore.steps.proofTransaction.isLoading = false
  tradeProofStore.steps.proofTransaction.isFinished = true

}
</script>