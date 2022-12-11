<template>
  <n-space vertical>

    <!--    {{tradeProofStore.steps.signInEvm.isFinished ? `Connected to ${accountStore.address}` : ''}}-->
    <!--    Data: {{accountStore.ownershipData}}-->
    Proving for exchange: {{tradeProofStore.selectedExchange}}
    Number of swap found: {{tradeProofStore.oracleData?.data?.swapCounts}}
    Volume USD found: {{tradeProofStore.oracleData?.data?.amountUsd}}
    <n-steps vertical :current="tradeProofStore.currentStep" >
      <n-step
          :status="tradeProofStore.isLoaded ? 'finish' : 'process'"
          title="Load Snarky JS"
      >


      </n-step>
      <n-step title="Compile Smart Contract" :status="tradeProofStore.steps.compilation.isFinished ? 'finish' : tradeProofStore.steps.snarkyLoad.isFinished ? 'process': 'wait'">
        <div class="n-step-description">
          <!--          <p>Al through the day, I me mine I me mine, I me mine</p>-->

          <n-button
              :loading="tradeProofStore.steps.compilation.isLoading"
              v-if="tradeProofStore.currentStep === 1 && !tradeProofStore.steps.compilation.isFinished"
              size="small"
              @click="compileZkApp"
          >
            {{ tradeProofStore.currentStep === 1 && !tradeProofStore.steps.compilation.isLoading ? 'Compile': ''}}
          </n-button>


        </div>
      </n-step>
      <n-step title="Get ZkApp Instance Info" :status="tradeProofStore.steps.instance.isFinished ? 'finish' : tradeProofStore.steps.compilation.isFinished ? 'process': 'wait'">
        <div class="n-step-description">
          <!--          <p>Al through the day, I me mine I me mine, I me mine</p>-->
          <n-button
              v-if="tradeProofStore.currentStep === 2 && !tradeProofStore.steps.instance.isFinished"
              :loading="tradeProofStore.steps.instance.isLoading"
              size="small"
              @click="setZkApp"
          >
            {{ tradeProofStore.currentStep === 2 && !tradeProofStore.steps.instance.isLoading ? 'Set Instance': ''}}
          </n-button>
        </div>
      </n-step>
      <n-step title="Start Evm Session" :status="tradeProofStore.steps.signInEvm.isFinished ? 'finish' : tradeProofStore.steps.instance.isFinished ? 'process': 'wait'">
        <div class="n-step-description">
          Only Uniswap dex supported. Sign in to ethereum chain to prove trading.
          <!--          <p>Al through the day, I me mine I me mine, I me mine</p>-->
          <n-button
              v-if="tradeProofStore.currentStep === 3"
              :loading="tradeProofStore.steps.signInEvm.isLoading"
              size="small"
              @click="signInToEvm"
          >
            Sign In
          </n-button>
        </div>
      </n-step>
<!--      &lt;!&ndash;      <n-step title="Get Signed Data" :status="tradeProofStore.steps.dataFetch.isFinished ? 'finish' : tradeProofStore.steps.signInEvm.isFinished ? 'process': 'wait'">&ndash;&gt;-->
      <n-step title="Get Signed Data" :status="tradeProofStore.steps.dataFetch.isFinished ? 'finish' : tradeProofStore.steps.signInEvm.isFinished ? 'process': 'wait'">
        <!--        v-if="tradeProofStore.currentStep === 4"-->
        <div class="n-step-description"  v-if="![1].includes(tradeProofStore.selectedChainId) && tradeProofStore.currentStep === 4" >
          Current chain not supported please sign in again
          <br>
          <n-button @click="tradeProofStore.currentStep = 3" text style="font-size: 24px">
            <n-icon>
              <arrow-back />
            </n-icon>
          </n-button>


        </div>
        <div class="n-step-description"  v-if="[1].includes(tradeProofStore.selectedChainId) && tradeProofStore.currentStep === 4" >
          Please indicate Exchange where you want to prove trading.
          Only Uniswap supported for now.
          <br><br>
          You are connected to chain:
          <n-select v-model:value="tradeProofStore.selectedChainId" disabled :show-arrow="false" size="large" :options="accountStore.chains" label-field="networkName" value-field="chainId" >
          </n-select>


          <br>
          <br>
          <n-button
              v-if="tradeProofStore.currentStep === 4"
              :loading="tradeProofStore.steps.dataFetch.isLoading"
              size="large"
              @click="fetchCertifiedData"
          >
            Get oracle certified data
          </n-button>





        </div>
      </n-step>
      <n-step title="Prove on Mina" :status="tradeProofStore.steps.proofTransaction.isFinished ? 'finish' : tradeProofStore.steps.dataFetch.isFinished ? 'process': 'wait'">


        <div class="n-step-description" v-if="tradeProofStore.currentStep === 5">
          <!--          v-if="tradeProofStore.currentStep === 5"   :loading="tradeProofStore.steps.proofTransaction.isLoading"   </p>-->
          <MinaLogIn v-if="!accountStore.minaLoggedIn"></MinaLogIn>
          <n-button
              v-if="tradeProofStore.currentStep === 5 && accountStore.minaLoggedIn"
              :loading="tradeProofStore.steps.proofTransaction.isLoading"
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
import { useTradeProof } from "../store/tradeProof/tradeProof.index";
import {ProofOfTrade , EvmAddress} from "zkapp-oracles";
import MinaLogIn from "~/components/wallets/MinaLogIn";
import {useNuxtApp} from "nuxt/app";

import { MdArrowBack as ArrowBack } from '@vicons/ionicons4'
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
  tradeProofStore.steps.instance.isLoading = true
  //const pk = PublicKey.fromBase58(tradeProofStore.tokenOwnershipOracleAddress);
  let { account, error } = await fetchAccount({ publicKey: PublicKey.fromBase58(tradeProofStore.zkAppAddress)})
  console.log('account', JSON.stringify(account, null, 2));
  console.log('error', JSON.stringify(error, null, 2));
  tradeProofStore.steps.instance.isLoading = false
  tradeProofStore.steps.instance.isFinished = true
  try {
    tradeProofStore.zkApp = new ProofOfTrade(PublicKey.fromBase58(tradeProofStore.zkAppAddress));
    let value = tradeProofStore.zkApp.oraclePublicKey.get()
    console.log(`Found deployed zkapp, with state oraclePublic Key =  ${value.toBase58()}`);
  } catch (error) {
    console.log(error)
  }
  tradeProofStore.account = account
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
    //
  } catch(err) {
    console.log("error", err)
  }

  tradeProofStore.steps.proofTransaction.isLoading = false
  tradeProofStore.steps.proofTransaction.isFinished = true
  tradeProofStore.currentStep = 6
}
</script>