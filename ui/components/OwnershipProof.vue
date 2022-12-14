<template>
<div class="mina_proof_container">
    <div class="mina_card">
        <div class="mina_card_header">
            <h1 class="mina_title" style="margin: 0; flex-grow: 2">New Proof of Ownership</h1>
            <n-button class="mina_login_button" @click="closeModal()">Cancel</n-button>
        </div>
        <div class="mina_item">
            <div class="mina_flex gap-8" style="width: 100%; align-items: center">
                <div style="flex-grow: 3">            
                <h3 class="mina_text" style="margin: 0">Step One</h3>
                <h2 class="mina_subtitle" style="margin: 0">Load SnarkyJS</h2>
            </div>
            <div>
                <loader v-if="ownershipProofStore.steps.snarkyLoad.isLoading"/>
                <div class="mina_tag success" v-if="ownershipProofStore.steps.snarkyLoad.isFinished">Loaded</div>
            </div>
            </div>
        </div>
        <div class="mina_item" v-if="ownershipProofStore.currentStep >= 1 && !ownershipProofStore.steps.compilation.isFinished">
            <div class="mina_flex gap-8" style="width: 100%; align-items: center">
                <div style="flex-grow: 3">            
                <h3 class="mina_text" style="margin: 0">Step Two</h3>
                <h2 class="mina_subtitle" style="margin: 0">Compile Smart Contract</h2>
            </div>
            <div>
                <div class="mina_tag success" v-if="ownershipProofStore.currentStep >= 2 && !ownershipProofStore.steps.instance.isFinished">Compiled</div>
                <loader v-if="ownershipProofStore.steps.compilation.isLoading"/>
            </div>
            </div>
            <n-button class="mina_new_proof_button" @click="compileZkApp">Compile</n-button>
        </div>
        <div class="mina_item" v-if="ownershipProofStore.currentStep >= 2 && !ownershipProofStore.steps.instance.isFinished">
            <div class="mina_flex gap-8" style="width: 100%; align-items: center">
                <div style="flex-grow: 3">            
                <h3 class="mina_text" style="margin: 0">Step Three</h3>
                <h2 class="mina_subtitle" style="margin: 0">Set SkApp Instance</h2>
            </div>
            <div>
                <div class="mina_tag success" v-if="ownershipProofStore.steps.instance.isFinished">Instance Set</div>
                <loader v-if="ownershipProofStore.steps.instance.isLoading"/>
            </div>
            </div>
            <n-button class="mina_new_proof_button" @click="setZkApp">Set instance</n-button>
        </div>
        <div class="mina_item" v-if="ownershipProofStore.currentStep >= 3">
            <div class="mina_flex gap-8" style="width: 100%; align-items: center">
                <div style="flex-grow: 3">            
                <h3 class="mina_text" style="margin: 0">Step Four</h3>
                <h2 class="mina_subtitle" style="margin: 0">Start Evm Session</h2>
                </div>
                <div>

                    <loader v-if="ownershipProofStore.steps.signInEvm.isLoading"/>
                    <div class="mina_tag info" v-if="ownershipProofStore.steps.signInEvm.isFinished">{{`${$ssx?.address().slice(0,6)}...${$ssx?.address().slice(-4)}`}}</div>
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
                  <h3 class="mina_text" style="margin: 0">Step Five</h3>
                  <h2 class="mina_subtitle" style="margin: 0">Get Signed Data</h2>
                </div>
              <div>
                <div class="mina_tag alert" v-if="![1, 137,43114].includes(ownershipProofStore.selectedChainId) && ownershipProofStore.currentStep === 4">Chain not supported</div>
                  <loader v-if="ownershipProofStore.steps.dataFetch.isLoading"/>
                  <n-tooltip v-if="ownershipProofStore.steps.dataFetch.isFinished" trigger="hover" :show-arrow="false">
                    Token Balance
                    <template #trigger>
                      <div class="mina_tag info" v-if="ownershipProofStore.steps.dataFetch.isFinished">{{ownershipProofStore.oracleData?.data?.balance}}</div>
                    </template>

                  </n-tooltip>
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
                <h3 class="mina_text" style="margin: 0">Step Six</h3>
                <h2 class="mina_subtitle" style="margin: 0">Prove on Mina</h2>
            </div>
            <div>
            </div>
            </div>
            <MinaLogIn v-if="!accountStore.minaLoggedIn"></MinaLogIn>
            <n-button
            class="mina_new_proof_button"
              v-if="ownershipProofStore.currentStep === 5 && accountStore.minaLoggedIn"
              :loading="ownershipProofStore.steps.proofTransaction.isLoading"
              
              @click="verify"
          >
            Prove on Mina
          </n-button>

        </div>


        </div>
</div>
    
</template>
<script setup>
import {NButton, NInput, NRadioButton, NRadioGroup, NSpace, NSteps, NStep, NButtonGroup , NSpin , NSelect, NIcon, NResult , NTooltip } from "naive-ui";
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
import {useOwnershipProof} from "../store/ownershipProof/ownershipProof.index";
import {TokenOwnershipOracle , EvmAddress} from "zkapp-oracles";
import MinaLogIn from "~/components/wallets/MinaLogIn";
import {useNuxtApp} from "nuxt/app";

import { MdArrowBack as ArrowBack , IosExit as Exit} from '@vicons/ionicons4'
import { MdEasel } from '@vicons/ionicons4'
import {useDisplay} from "../store/display/display.index";
import {MainDisplayOptions} from "../store/display/display.types";
const displayStore = useDisplay();
const accountStore = useAccount()


const ownershipProofStore = useOwnershipProof();
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

onMounted(async () => {
  ownershipProofStore.steps.snarkyLoad.isLoading = true
  if(!ownershipProofStore.steps.snarkyLoad.isFinished) {
    await isReady;
  }

  ownershipProofStore.steps.snarkyLoad.isLoading = false
  ownershipProofStore.isLoaded = true
  ownershipProofStore.steps.snarkyLoad.isFinished = true
  const graphqlEndpoint = 'https://proxy.berkeley.minaexplorer.com/graphql'
  setGraphqlEndpoint(graphqlEndpoint)
  let Berkeley = Mina.Network(graphqlEndpoint)
  Mina.setActiveInstance(Berkeley)
  ownershipProofStore.currentStep = 1

})

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

  let addressToFields =  Encoding.stringToFields(ownershipProofStore.oracleData.data.address)
  let balance = Field(ownershipProofStore.oracleData.data.balance)
  let chainId = Field(Number(ownershipProofStore.oracleData.data.chainId))

  const signature = Signature.fromJSON(ownershipProofStore.oracleData.signature)
  // for debugging: check signature
  const validSignature = signature.verify(PublicKey.fromBase58(ownershipProofStore.oracleSignerPublicKey), [balance,chainId,...addressToFields]);
  console.log("validSignature", validSignature)


  let app = new TokenOwnershipOracle(PublicKey.fromBase58(ownershipProofStore.zkAppAddress));
  let contractAddress = new EvmAddress({ fields: addressToFields, chainId: chainId});


  try {
    const txn = await Mina.transaction(() => {
      app.verify(
          balance,
          contractAddress,
          signature ?? fail('something is wrong with the signature'),
          PublicKey.fromBase58(accountStore.minaAccounts[0])
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
    if(ownershipProofStore.currentStep === 6){
      events = await ownershipProofStore.getEvents()
    } else {
      events = ownershipProofStore.events
    }
    ownershipProofStore.$reset()
    ownershipProofStore.events = events
    displayStore.main = [MainDisplayOptions.POOEVENTS, MainDisplayOptions.POTEVENTS]
    }
</script>
<style scoped>
.mina_proof_container{
    margin: 0 auto;
    width: 560px;
}
</style>
