<template>
  <div class="mina_proof_container">
    <div class="mina_card">
      <div class="mina_card_header">
        <h1 class="mina_title" style="margin: 0; flex-grow: 2">New Proof of Trade</h1>
        <n-button :focusable="false" quaternary circle type="primary">
        <template #icon>
          <n-icon @click="tradeProofStore.privateMode = false" ghost :focusable="false"  v-if="tradeProofStore.privateMode" color="#2D2D2D"><eye-off/></n-icon>
          <n-icon v-else @click="tradeProofStore.privateMode = true" color="#D6EAF7"><eye/></n-icon>
        </template>
      </n-button>
        <n-button class="mina_login_button" @click="closeModal">Cancel</n-button>
      </div>
      <div class="mina_item">
        <div class="mina_flex gap-8" style="width: 100%; align-items: center">
          <div style="flex-grow: 3">
            <h3 class="mina_text" style="margin: 0">Step One</h3>
            <h2 class="mina_subtitle" style="margin: 0">Set up Private Environment </h2>

          </div>
          <div>

            <div class="mina_tag success" v-if="tradeProofStore.currentStep >= 3">Loaded</div>

            <n-button v-if="tradeProofStore.currentStep < 3" text-color="#F6603B"  :loading="tradeProofStore.steps.snarkyLoad.isLoading || (tradeProofStore.currentStep >= 1 && tradeProofStore.currentStep <= 4)"  :bordered="false" @click="launchSetup"></n-button>
          </div>
        </div>
        <n-button v-if="!tradeProofStore.currentStep" class="mina_new_proof_button" @click="launchSetup">Launch Setup</n-button>
        <!--s-->
      </div>

      <div class="mina_item" v-if="tradeProofStore.currentStep >= 3">
        <div class="mina_flex gap-8" style="width: 100%; align-items: center">
          <div style="flex-grow: 3">
            <h3 class="mina_text" style="margin: 0">Step Two</h3>
            <h2 class="mina_subtitle" style="margin: 0">Start Evm Session</h2>
          </div>
          <div>

            <loader v-if="tradeProofStore.steps.signInEvm.isLoading"/>
            <div class="mina_tag info" v-if="tradeProofStore.steps.signInEvm.isFinished">{{tradeProofStore.privateMode ?  '0x**' : `${$ssx?.address().slice(0,6)}...${$ssx?.address().slice(-4)}`}}</div>
          </div>
        </div>
        <div class="mina_item__description" v-if="tradeProofStore.currentStep === 3">
          <p class="mina_text" style="opacity: 0.6;">Only UNISWAP supported for now. Please sign in to Ethereum Mainnet.</p>
          <n-button class="mina_new_proof_button" @click="signInToEvm">Sign in</n-button>
        </div>
      </div>


      <div class="mina_item"  v-if="tradeProofStore.currentStep >= 4">
        <div class="mina_flex gap-8" style="width: 100%; align-items: center">
          <div style="flex-grow: 3">
            <h3 class="mina_text" style="margin: 0">Step Three</h3>
            <h2 class="mina_subtitle" style="margin: 0">Get Signed Data</h2>
          </div>
          <div>
            <div class="mina_tag alert" v-if="![1].includes(tradeProofStore.selectedChainId) && tradeProofStore.currentStep === 4">Chain not supported</div>
            <loader v-if="[1].includes(tradeProofStore.selectedChainId) && tradeProofStore.steps.dataFetch.isLoading"/>
            <n-tooltip v-if="tradeProofStore.steps.dataFetch.isFinished" trigger="hover" :show-arrow="false">
              Volume Traded
              <template #trigger>
                <div class="mina_tag info" v-if="tradeProofStore.steps.dataFetch.isFinished">{{tradeProofStore.privateMode ? '**' : tradeProofStore.oracleData?.data?.amountUsd}}</div>
              </template>

            </n-tooltip>

          </div>
        </div>


        <div class="mina_item_description" v-if="![1].includes(tradeProofStore.selectedChainId) && tradeProofStore.currentStep === 4">
          <n-button class="mina_new_proof_button" @click="tradeProofStore.currentStep = 3">Go Back</n-button>
        </div>
        <div class="mina_item_description" v-if="[1].includes(tradeProofStore.selectedChainId) && tradeProofStore.currentStep === 4">
          <p class="mina_text" style="opacity: 0.6;">Please indicate on which contract on which chain you would like to prove ownership. ERC20, ERC721 are supported. Mina will emit an event under your mina address proving your own at least 1 asset from this address.</p>
          <p class="mina_text">You are connected to chain:</p>
          <n-select v-model:value="tradeProofStore.selectedChainId" disabled :show-arrow="false" size="large" :options="accountStore.chains" label-field="networkName" value-field="chainId" >

          </n-select>
          <div class="mina_flex"  style="gap: 24px; margin-top:24px; align-items:center">
            <n-button
                class="mina_new_proof_button"
                v-if="tradeProofStore.currentStep === 4"
                :loading="tradeProofStore.steps.dataFetch.isLoading"
                @click="fetchCertifiedData"
            >
              Get oracle certified data
            </n-button>
          </div>
        </div>

        </div>


      <div class="mina_item" v-if="tradeProofStore.currentStep >= 5">
        <div class="mina_flex gap-8" style="width: 100%; align-items: center">
          <div style="flex-grow: 3">
            <h3 class="mina_text" style="margin: 0">Step Four</h3>
            <h2 class="mina_subtitle" style="margin: 0">Prove on Mina</h2>
          </div>
          <div>

            <div class="mina_tag success" v-if="tradeProofStore.currentStep >= 6 && tradeProofStore.steps.proofTransaction.isFinished">Proved</div>
            <!--              <n-button text-color="black"  :loading="tradeProofStore.steps.snarkyLoad.isLoading || tradeProofStore.currentStep > 2"  @click="launchSetup"></n-button>-->

            <n-button v-if="tradeProofStore.steps.proofTransaction.isLoading" text-color="#F6603B"  :loading="tradeProofStore.steps.proofTransaction.isLoading"  :bordered="false" @click="launchSetup"></n-button>
          </div>
          <div>
          </div>
        </div>
        <MinaLogIn v-if="!accountStore.minaLoggedIn"></MinaLogIn>
        <n-button
            class="mina_new_proof_button"
            v-if="tradeProofStore.currentStep === 5 && accountStore.minaLoggedIn && !tradeProofStore.steps.proofTransaction.isLoading"
            :loading="tradeProofStore.steps.proofTransaction.isLoading"

            @click="verify"
        >
          Prove on Mina
        </n-button>

      </div>

      <div class="mina_item" v-if="tradeProofStore.currentStep >= 6">
        <div class="mina_flex gap-8" style="width: 100%; align-items: center">
          <div style="flex-grow: 3">

            <h2 class="mina_subtitle" style="margin: 0">Congratulations !!!</h2>
          </div>

          <div>
          </div>
        </div>
        <p class="mina_text_large">You successfully created a proof on Mina. <nuxt-link :href="`https://berkeley.minaexplorer.com/transaction/${accountStore.transaction}`" target="_blank">See transaction</nuxt-link></p>
        <n-button
            class="mina_new_proof_button"
            @click="closeModal"
        >
          Back to Dashboard
        </n-button>

      </div>


    </div>
  </div>

</template>
<script setup>
import {NButton, NInput, NRadioButton, NRadioGroup, NSpace, NSteps, NStep, NButtonGroup , NSpin , NSelect, NIcon, NResult , NTooltip} from "naive-ui";
import { MdArrowRoundBack, MdArrowRoundForward , MdEye as Eye , MdEyeOff as EyeOff} from '@vicons/ionicons4'

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
import {ProofOfTrade , EvmAddress} from "zkapp-oracles";
import MinaLogIn from "~/components/wallets/MinaLogIn";
import {useNuxtApp} from "nuxt/app";

import {useDisplay} from "../store/display/display.index";
import {MainDisplayOptions} from "../store/display/display.types";
import {useTradeProof} from "../store/tradeProof/tradeProof.index";
import {SupportedExchanges} from "../types/oracle/graphql";
const displayStore = useDisplay();
const accountStore = useAccount()


const tradeProofStore = useTradeProof();
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

onMounted(async () => {

})
const launchSetup = async () => {
  tradeProofStore.currentStep = 0
  tradeProofStore.steps.snarkyLoad.isLoading = true
  await isReady
  tradeProofStore.steps.snarkyLoad.isLoading = false
  tradeProofStore.steps.snarkyLoad.isFinished = true
  tradeProofStore.currentStep = 1
  sleep(500)
  await compileZkApp()
  await setZkApp()
}
const compileZkApp = async () => {
  await sleep(500)
  await isReady
  tradeProofStore.steps.compilation.isLoading = true
  await sleep(500)
  await ProofOfTrade.compile()
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

const fetchCertifiedData = async function() {
  tradeProofStore.steps.dataFetch.isLoading = true
  await tradeProofStore.getSignedTradingData(SupportedExchanges.Uniswap)
  tradeProofStore.steps.dataFetch.isLoading = false
  tradeProofStore.steps.dataFetch.isFinished = true
  tradeProofStore.currentStep = 5
}
const verify = async function() {
  tradeProofStore.steps.proofTransaction.isLoading = true
  await sleep(500)
  let swapCounts = Field(tradeProofStore.oracleData.data.swapCounts)
  let amountUsd = Field(Number(tradeProofStore.oracleData.data.amountUsd))
  const exchangeFields = Encoding.stringToFields(
      tradeProofStore.oracleData.data.exchange
  );

  const signature = Signature.fromJSON(tradeProofStore.oracleData.signature)
  // for debugging: check signature
  const validSignature = signature.verify(PublicKey.fromBase58(tradeProofStore.oracleSignerPublicKey), [swapCounts,amountUsd,exchangeFields[0]]);
  console.log("validSignature", validSignature)


  let app = new ProofOfTrade(PublicKey.fromBase58(tradeProofStore.zkAppAddress));

  try {
    const txn = await Mina.transaction(() => {
      app.verify(
          swapCounts,
          amountUsd,
          exchangeFields[0],
          signature ?? fail('something is wrong with the signature')
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
    accountStore.transaction = hash
    tradeProofStore.currentStep = 6
    //
  } catch(err) {
    console.log("error", err)
  }

  tradeProofStore.steps.proofTransaction.isLoading = false
  tradeProofStore.steps.proofTransaction.isFinished = true

}
async function closeModal() {
  let events;
  displayStore.main = [MainDisplayOptions.POOEVENTS, MainDisplayOptions.POTEVENTS]
  if(tradeProofStore.currentStep === 6){
    await tradeProofStore.getEvents()
    events = tradeProofStore.events
  } else {
    events = tradeProofStore.events
  }
  tradeProofStore.$reset()
  tradeProofStore.events = events

}
</script>
<style scoped>
.mina_proof_container{
  margin: 0 auto;
  width: 560px;
}
</style>
