<template>
  <n-space vertical>

<!--    {{ownershipProofStore.steps.signInEvm.isFinished ? `Connected to ${accountStore.address}` : ''}}-->
<!--    Data: {{ownershipProofStore.oracleData}}-->
    <div v-if="ownershipProofStore.selectedTokenType === 'ERC721' && ownershipProofStore.currentStep  > 4">
      Collection on Open Sea: <nuxt-link :to="`https://opensea.io/assets?search[query]=${ownershipProofStore.selectedTokenAddress}`" target="_blank">
      <n-button >
        <n-icon>
          <md-easel/>
        </n-icon>
      </n-button>
    </nuxt-link>
      Your balance used for proof : {{ownershipProofStore.oracleData?.data?.balance}}
      {{ ownershipProofStore.oracleData?.data?.balance === 0 ? 'Mina will refuse to generate proof as your balance is zero': ''}}
    </div>

    <n-steps vertical :current="ownershipProofStore.currentStep" >
      <n-step
          :status="ownershipProofStore.isLoaded ? 'finish' : 'process'"
          title="Load Snarky JS"
      >

      </n-step>
      <n-step title="Compile Smart Contract" :status="ownershipProofStore.steps.compilation.isFinished ? 'finish' : ownershipProofStore.steps.snarkyLoad.isFinished ? 'process': 'wait'">
        <div class="n-step-description">
<!--          <p>Al through the day, I me mine I me mine, I me mine</p>-->

          <n-button
              :loading="ownershipProofStore.steps.compilation.isLoading"
              v-if="ownershipProofStore.currentStep === 1 && !ownershipProofStore.steps.compilation.isFinished"
              size="small"
              @click="compileZkApp"
          >
            {{ ownershipProofStore.currentStep === 1 && !ownershipProofStore.steps.compilation.isLoading ? 'Compile': ''}}
          </n-button>


        </div>
      </n-step>
      <n-step title="Get ZkApp Instance Info" :status="ownershipProofStore.steps.instance.isFinished ? 'finish' : ownershipProofStore.steps.compilation.isFinished ? 'process': 'wait'">
        <div class="n-step-description">
          <!--          <p>Al through the day, I me mine I me mine, I me mine</p>-->
          <n-button
              v-if="ownershipProofStore.currentStep === 2 && !ownershipProofStore.steps.instance.isFinished"
              :loading="ownershipProofStore.steps.instance.isLoading"
              size="small"
              @click="setZkApp"
          >
            {{ ownershipProofStore.currentStep === 2 && !ownershipProofStore.steps.instance.isLoading ? 'Set Instance': ''}}
          </n-button>
        </div>
      </n-step>
      <n-step title="Start Evm Session" :status="ownershipProofStore.steps.signInEvm.isFinished ? 'finish' : ownershipProofStore.steps.instance.isFinished ? 'process': 'wait'">
        <div class="n-step-description">
          Only Ethereum, Polygon, Avalanche supported. Sign in to chain and wallet where you want to prove ownership.
          <!--          <p>Al through the day, I me mine I me mine, I me mine</p>-->
          <n-button
              v-if="ownershipProofStore.currentStep === 3"
              :loading="ownershipProofStore.steps.signInEvm.isLoading"
              size="small"
              @click="signInToEvm"
          >
            Sign In
          </n-button>
        </div>
      </n-step>
<!--      <n-step title="Get Signed Data" :status="ownershipProofStore.steps.dataFetch.isFinished ? 'finish' : ownershipProofStore.steps.signInEvm.isFinished ? 'process': 'wait'">-->
      <n-step title="Get Signed Data" :status="ownershipProofStore.steps.dataFetch.isFinished ? 'finish' : ownershipProofStore.steps.signInEvm.isFinished ? 'process': 'wait'">
<!--        v-if="ownershipProofStore.currentStep === 4"-->
        <div class="n-step-description"  v-if="![1, 137,43114].includes(ownershipProofStore.selectedChainId) && ownershipProofStore.currentStep === 4" >
          Current chain not supported please sign in again
          <br>
          <n-button @click="ownershipProofStore.currentStep = 3" text style="font-size: 24px">
            <n-icon>
              <arrow-back />
            </n-icon>
          </n-button>


        </div>
        <div class="n-step-description"  v-if="[1, 137,43114].includes(ownershipProofStore.selectedChainId) && ownershipProofStore.currentStep === 4" >
          Please indicate on which contract on which chain you would like to prove ownership.
          ERC20, ERC721 are supported. Mina will emit an event under your mina address proving you own at least 1 asset from this address.
          <br><br>
          You are connected to chain:
          <n-select v-model:value="ownershipProofStore.selectedChainId" disabled :show-arrow="false" size="large" :options="accountStore.chains" label-field="networkName" value-field="chainId" >
          </n-select>

          Indicate Contract Address
          <n-input  placeholder="enter a valid address in chosen network" v-model:value="ownershipProofStore.selectedTokenAddress"/>
          <br>

          <br>
          Select Token Type
          <n-select v-model:value="ownershipProofStore.selectedTokenType" default-value="ERC721" size="large" :options="[{label: 'ERC20'},{label:'ERC721'}]" label-field="label" value-field="label" ></n-select>
          <br>

          <div v-if="ownershipProofStore.selectedTokenType === 'ERC721'">

            Check on Open Sea
            <br>
            <nuxt-link :to="`https://opensea.io/assets?search[query]=${ownershipProofStore.selectedTokenAddress}`" target="_blank">
              <n-button >
                <n-icon>
                  <md-easel/>
                </n-icon>
              </n-button>
            </nuxt-link>

          </div>

          <n-button dashed size="small" @click="useExampleValue">Use example value</n-button>
          <br>
          <br>
          <n-button
              v-if="ownershipProofStore.currentStep === 4"
              :loading="ownershipProofStore.steps.dataFetch.isLoading"
              size="large"
              @click="fetchCertifiedData"
          >
            Get oracle certified data
          </n-button>





        </div>
      </n-step>
      <n-step title="Prove on Mina" :status="ownershipProofStore.steps.proofTransaction.isFinished ? 'finish' : ownershipProofStore.steps.dataFetch.isFinished ? 'process': 'wait'">


        <div class="n-step-description" v-if="ownershipProofStore.currentStep === 5">
          <!--          v-if="ownershipProofStore.currentStep === 5"   :loading="ownershipProofStore.steps.proofTransaction.isLoading"   </p>-->
          <MinaLogIn v-if="!accountStore.minaLoggedIn"></MinaLogIn>
          <n-button
              v-if="ownershipProofStore.currentStep === 5 && accountStore.minaLoggedIn"
              :loading="ownershipProofStore.steps.proofTransaction.isLoading"
              size="small"
              @click="verify"
          >
            Prove on Mina
          </n-button>
        </div>
      </n-step>


    </n-steps>

  </n-space>

</template>
<script setup>
import {NButton, NInput, NRadioButton, NRadioGroup, NSpace, NSteps, NStep, NButtonGroup , NSpin , NSelect, NIcon } from "naive-ui";
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

import { MdArrowBack as ArrowBack } from '@vicons/ionicons4'
import { MdEasel } from '@vicons/ionicons4'

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

  //
  // try {
  //   const txn = await Mina.transaction(() => {
  //     app.verify(
  //         balance,
  //         contractAddress,
  //         signature ?? fail('something is wrong with the signature'),
  //         PublicKey.fromBase58(accountStore.minaAccounts[0])
  //     );
  //   });
  //   console.log(txn)
  //
  //     console.log("start proving")
  //     //TODO: proving completeley
  //     await txn.prove();
  //
  //
  //     const { hash } = await window.mina.sendTransaction({
  //     transaction: txn.toJSON(),
  //     feePayer: {
  //       fee: 0.1,
  //       memo: "zk"
  //     }
  //     })
  //     console.log("transaction hash", hash);//
  //     accountStore.transaction = hash
  // //
  // } catch(err) {
  //   console.log("error", err)
  // }

  ownershipProofStore.steps.proofTransaction.isLoading = false
  ownershipProofStore.steps.proofTransaction.isFinished = true
  ownershipProofStore.currentStep = 6
}
</script>