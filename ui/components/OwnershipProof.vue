<template>
<div class="mina_proof_container">
    <div class="mina_card">
        <div class="mina_card_header">
            <h1 class="mina_title" style="margin: 0; flex-grow: 2">New Proof of Ownership</h1>
          <n-button :focusable="false" quaternary circle type="primary">
            <template #icon>
              <n-icon @click="ownershipProofStore.privateMode = false" ghost :focusable="false"  v-if="ownershipProofStore.privateMode" color="#2D2D2D"><eye-off/></n-icon>
              <n-icon v-else @click="ownershipProofStore.privateMode = true" color="#D6EAF7"><eye/></n-icon>
            </template>
          </n-button>
            <n-button class="mina_login_button" @click="closeModal()">Cancel</n-button>

        </div>
        <div class="mina_item">
            <div class="mina_flex gap-8" style="width: 100%; align-items: center">
                <div style="flex-grow: 3">            
                <h3 class="mina_text" style="margin: 0">Step One</h3>
                <h2 class="mina_subtitle" style="margin: 0">Set up Private Environment</h2>
            </div>
            <div>
<!--                <loader v-if="ownershipProofStore.steps.snarkyLoad.isLoading"/>-->

                <div class="mina_tag success" v-if="ownershipProofStore.currentStep >= 3">Loaded</div>
<!--              <n-button text-color="black"  :loading="ownershipProofStore.steps.snarkyLoad.isLoading || ownershipProofStore.currentStep > 2"  @click="launchSetup"></n-button>-->

              <n-button v-if="ownershipProofStore.currentStep < 3" text-color="#F6603B"  :loading="ownershipProofStore.steps.snarkyLoad.isLoading || (ownershipProofStore.currentStep >= 1 && ownershipProofStore.currentStep <= 4)"  :bordered="false" @click="launchSetup"></n-button>
            </div>
            </div>
          <n-button v-if="!ownershipProofStore.currentStep" class="mina_new_proof_button" @click="launchSetup">Launch Setup</n-button>
<!--s-->
        </div>

        <div class="mina_item" v-if="ownershipProofStore.currentStep >= 3">
            <div class="mina_flex gap-8" style="width: 100%; align-items: center">
                <div style="flex-grow: 3">            
                <h3 class="mina_text" style="margin: 0">Step Two</h3>
                <h2 class="mina_subtitle" style="margin: 0">Start Evm Session</h2>
                </div>
                <div>

                    <loader v-if="ownershipProofStore.steps.signInEvm.isLoading"/>
                    <div class="mina_tag info" v-if="ownershipProofStore.steps.signInEvm.isFinished">{{ownershipProofStore.privateMode ? '0x**' : `${$ssx?.address().slice(0,6)}...${$ssx?.address().slice(-4)}`}}</div>
                </div>
            </div>
          <div class="mina_item_description" v-if="ownershipProofStore.currentStep === 3">
            <p class="mina_text" style="opacity: 0.6;">Only Ethereum, Polygon, Avalanche supported. Sign in to chain and wallet where you want to prove ownership.</p>
            <n-button class="mina_new_proof_button" @click="signInToEvm">Sign in</n-button>
          </div>
        </div>

        <div class="mina_item"  v-if="ownershipProofStore.currentStep >= 4">
            <div class="mina_flex gap-8" style="width: 100%; align-items: center">
                <div style="flex-grow: 3">            
                  <h3 class="mina_text" style="margin: 0">Step Three</h3>
                  <h2 class="mina_subtitle" style="margin: 0">Get Signed Data</h2>
                </div>
              <div>
                <div class="mina_tag alert" v-if="![1, 137,43114].includes(ownershipProofStore.selectedChainId) && ownershipProofStore.currentStep === 4">Chain not supported</div>
                  <loader v-if="ownershipProofStore.steps.dataFetch.isLoading"/>
                <n-space align="center">
                  <n-tooltip v-if="ownershipProofStore.steps.dataFetch.isFinished" trigger="hover" :show-arrow="false">
                    Token Balance
                    <template #trigger>
                      <div class="mina_tag info" v-if="ownershipProofStore.steps.dataFetch.isFinished">{{ ownershipProofStore.privateMode ? '**' : ownershipProofStore.oracleData?.data?.balance}}</div>

                    </template>

                  </n-tooltip>

                  <nuxt-link :href="`https://opensea.io/assets?search[query]=${ownershipProofStore.selectedTokenAddress}`" target="_blank">
                <n-button :focusable="false"  quaternary circle type="primary">
                  <template #icon>
                    <n-icon  ghost :focusable="false"   color="#2D2D2D"><exit/></n-icon>
                  </template>
                </n-button>
                  </nuxt-link>
                </n-space>
                </div>
              </div>
              <div v-if="![1, 137,43114].includes(ownershipProofStore.selectedChainId) && ownershipProofStore.currentStep === 4">
                  <n-button class="mina_new_proof_button" @click="ownershipProofStore.currentStep = 3">Go Back</n-button>
              </div>
              <div  v-if="[1, 137,43114].includes(ownershipProofStore.selectedChainId) && ownershipProofStore.currentStep === 4">
                <p class="mina_text" style="opacity: 0.6;">Please indicate on which contract on which chain you would like to prove ownership. ERC20, ERC721 are supported. Mina will emit an event under your mina address proving your own at least 1 asset from this address.</p>
                <p class="mina_text">You are connected to chain:</p>
                <n-select v-model:value="ownershipProofStore.selectedChainId" disabled :show-arrow="false" size="large" :options="accountStore.chains" label-field="networkName" value-field="chainId" >
              </n-select>
                <p class="mina_text">Indicate Contract Address</p>
                <n-input  placeholder="Enter a valid address in chosen network" v-model:value="ownershipProofStore.selectedTokenAddress"/>
                <p class="mina_text">Select Token Type</p>
                <n-select v-model:value="ownershipProofStore.selectedTokenType" default-value="ERC721" size="large" :options="[{label: 'ERC20'},{label:'ERC721'}]" label-field="label" value-field="label" ></n-select>

                 <div class="mina_flex"  style="gap: 24px; margin-top:24px; align-items:center">
                  <a :href="`https://opensea.io/assets?search[query]=${ownershipProofStore.selectedTokenAddress}`" target="_blank">
                      <n-button class="mina_orange_outline">Check on Open Sea</n-button>
                  </a>
                  <n-button
                  class="mina_new_proof_button"
                  v-if="ownershipProofStore.currentStep === 4"
                  :loading="ownershipProofStore.steps.dataFetch.isLoading"
                  @click="fetchCertifiedData"
                >
                  Get oracle certified data
                </n-button>
                </div>
              </div>
            
            </div>
      <div class="mina_item" v-if="ownershipProofStore.currentStep >= 5">
            <div class="mina_flex gap-8" style="width: 100%; align-items: center">
                <div style="flex-grow: 3">            
                <h3 class="mina_text" style="margin: 0">Step Four</h3>
                <h2 class="mina_subtitle" style="margin: 0">Prove on Mina</h2>
            </div>
              <div>
                <div class="mina_tag success" v-if="ownershipProofStore.currentStep >= 6 && ownershipProofStore.steps.proofTransaction.isFinished">Proved</div>
                <n-button v-if="ownershipProofStore.steps.proofTransaction.isLoading" text-color="#F6603B"  :loading="ownershipProofStore.steps.proofTransaction.isLoading"  :bordered="false" @click="launchSetup"></n-button>
              </div>
            <div>
            </div>
            </div>
            <MinaLogIn v-if="!accountStore.minaLoggedIn"></MinaLogIn>
            <n-button
            class="mina_new_proof_button"
              v-if="ownershipProofStore.currentStep === 5 && accountStore.minaLoggedIn && !ownershipProofStore.steps.proofTransaction.isLoading"
              :loading="ownershipProofStore.steps.proofTransaction.isLoading"
              
              @click="verify"
          >
            Prove on Mina
          </n-button>

        </div>
      <div class="mina_item" v-if="ownershipProofStore.currentStep >= 6">
        <div class="mina_flex gap-8" style="width: 100%; align-items: center">
          <div style="flex-grow: 3">

            <h2 class="mina_subtitle" style="margin: 0">Congratulations !!!</h2>
          </div>
          <div>

            <n-button v-if="ownershipProofStore.steps.proofTransaction.isLoading" text-color="#F6603B"  :loading="ownershipProofStore.steps.proofTransaction.isLoading"  :bordered="false" @click="launchSetup"></n-button>
          </div>
          <div>
          </div>
        </div>
        <p class="mina_text_large">You successfully created a proof on Mina. <nuxt-link :href="`https://berkeley.minaexplorer.com/transaction/${accountStore.transaction}`" target="_blank">See transaction</nuxt-link></p>
        <n-button
            :loading="ownershipProofStore.eventsLoading"
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
import {NButton, NInput, NRadioButton, NRadioGroup, NSpace, NSteps, NStep, NButtonGroup , NSpin , NSelect, NIcon, NResult , NTooltip , NProgress , NTimeline, NTimelineItem} from "naive-ui";
import { MdEye as Eye , MdEyeOff as EyeOff , MdExit as Exit } from '@vicons/ionicons4'

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
import {useOwnershipProof} from "../store/ownershipProof/ownershipProof.index";
import {TokenOwnershipOracle , EvmAddress} from "zkapp-oracles";
import MinaLogIn from "~/components/wallets/MinaLogIn";
import {useNuxtApp} from "nuxt/app";

import {useDisplay} from "../store/display/display.index";
import {MainDisplayOptions} from "../store/display/display.types";

const displayStore = useDisplay();
const accountStore = useAccount()

const ownershipProofStore = useOwnershipProof();
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const launchSetup = async () => {
  ownershipProofStore.currentStep = 0
  ownershipProofStore.steps.snarkyLoad.isLoading = true
  await isReady
  ownershipProofStore.steps.snarkyLoad.isLoading = false
  ownershipProofStore.steps.snarkyLoad.isFinished = true
  ownershipProofStore.currentStep = 1
  sleep(500)
  await compileZkApp()
  await setZkApp()
}
const compileZkApp = async (zkAppAddress) => {
  ownershipProofStore.steps.compilation.isLoading = true
  await sleep(500)
  await TokenOwnershipOracle.compile()
  console.log("compilation finished")
  ownershipProofStore.steps.compilation.isLoading = false
  ownershipProofStore.steps.compilation.isFinished = true
  ownershipProofStore.currentStep = 2
  await sleep(500)
}
const setZkApp = async () => {
  if(!ownershipProofStore.zkApp){
    ownershipProofStore.steps.instance.isLoading = true;
    await ownershipProofStore.getZkAppInstance()
    ownershipProofStore.steps.instance.isLoading = false;
  }
  ownershipProofStore.steps.instance.isFinished = true;
  ownershipProofStore.currentStep = 3
  sleep(500)
}
const signInToEvm = async function() {
  ownershipProofStore.steps.signInEvm.isLoading = true
  await accountStore.signIn()
  const {$ssx} = useNuxtApp();
  ownershipProofStore.selectedChainId = $ssx.chainId()
  ownershipProofStore.steps.signInEvm.isLoading = false
  ownershipProofStore.steps.signInEvm.isFinished = true
  ownershipProofStore.currentStep = 4
}
const useExampleValue = function() {
  const {$ssx} = useNuxtApp()

  const currentChain = $ssx.chainId()
  if (currentChain === 43114) {
    ownershipProofStore.selectedTokenAddress = "0x0C3b29321611736341609022C23E981AC56E7f96"
  } else if(currentChain === 1) {
    ownershipProofStore.selectedTokenAddress = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
  } else if(currentChain === 137) {
    ownershipProofStore.selectedTokenAddress = "0xB2435253C71FcA27bE41206EB2793E44e1Df6b6D"
  }

  ownershipProofStore.selectedChainId = $ssx.chainId()
  ownershipProofStore.selectedTokenType = "ERC721"
}
const fetchCertifiedData = async function() {
  ownershipProofStore.steps.dataFetch.isLoading = true
  await ownershipProofStore.getSignedOwnershipData(ownershipProofStore.selectedTokenAddress , ownershipProofStore.selectedTokenType)
  ownershipProofStore.steps.dataFetch.isLoading = false
  ownershipProofStore.steps.dataFetch.isFinished = true
  ownershipProofStore.currentStep = 5
}
const verify = async function() {
  ownershipProofStore.steps.proofTransaction.isLoading = true
  await sleep(500)

  let addressToFields =  Encoding.stringToFields(ownershipProofStore.oracleData.data.address)
  let balance = Field(ownershipProofStore.oracleData.data.balance)
  let chainId = Field(Number(ownershipProofStore.oracleData.data.chainId))

  const signature = Signature.fromJSON(ownershipProofStore.oracleData.signature)
  // for debugging: check signature
  const validSignature = signature.verify(PublicKey.fromBase58(ownershipProofStore.oracleSignerPublicKey), [balance,chainId,...addressToFields]);
  console.log("validSignature", validSignature)


  let app = new TokenOwnershipOracle(PublicKey.fromBase58(ownershipProofStore.zkAppAddress));
  let contractAddress = new EvmAddress({ fields: addressToFields, chainId: chainId});

  const accounts = await window.mina.requestAccounts();
  const senderAccount = PublicKey.fromBase58(accounts[0]);
  try {
    const txn = await Mina.transaction(senderAccount, () => {
      app.verify(
          balance,
          contractAddress,
          signature ?? fail('something is wrong with the signature')
      );
    });
    console.log(txn)

      console.log("start proving")
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
      ownershipProofStore.currentStep = 6
  //
  } catch(err) {
    console.log("error", err)
  }

  ownershipProofStore.steps.proofTransaction.isLoading = false
  ownershipProofStore.steps.proofTransaction.isFinished = true

}
const emit= defineEmits(["modalState"])

async function closeModal() {
    let events;
    displayStore.main = [MainDisplayOptions.POOEVENTS, MainDisplayOptions.POTEVENTS]
    if(ownershipProofStore.currentStep === 6){
      await ownershipProofStore.getEvents()
      events = ownershipProofStore.events
    } else {
      events = ownershipProofStore.events
    }
    console.log(events)
    ownershipProofStore.$reset()
    ownershipProofStore.events = events

    }
</script>
<style scoped>
.mina_proof_container{
    margin: 0 auto;
    width: 560px;
}
</style>
