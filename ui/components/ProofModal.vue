<template>
  <n-space vertical>

<!--    {{snarkyStore.steps.signInEvm.isFinished ? `Connected to ${accountStore.address}` : ''}}-->
<!--    Data: {{accountStore.ownershipData}}-->
    <div v-if="snarkyStore.selectedTokenType === 'ERC721' && snarkyStore.currentStep  > 4">
      Collection on Open Sea: <nuxt-link :to="`https://opensea.io/assets?search[query]=${snarkyStore.selectedTokenAddress}`" target="_blank">
      <n-button >
        <n-icon>
          <md-easel/>
        </n-icon>
      </n-button>
    </nuxt-link>
      Your balance used for proof : {{accountStore.ownershipData?.data?.balance}}
      {{ accountStore.ownershipData?.data?.balance === 0 ? 'Mina will refuse to generate proof as your balance is zero': ''}}
    </div>

    <n-steps vertical :current="snarkyStore.currentStep" >
      <n-step
          :status="snarkyStore.isLoaded ? 'finish' : 'process'"
          title="Load Snarky JS"
      >




      </n-step>
      <n-step title="Compile Smart Contract" :status="snarkyStore.steps.compilation.isFinished ? 'finish' : snarkyStore.steps.snarkyLoad.isFinished ? 'process': 'wait'">
        <div class="n-step-description">
<!--          <p>Al through the day, I me mine I me mine, I me mine</p>-->

          <n-button
              :loading="snarkyStore.steps.compilation.isLoading"
              v-if="snarkyStore.currentStep === 1 && !snarkyStore.steps.compilation.isFinished"
              size="small"
              @click="compileZkApp"
          >
            {{ snarkyStore.currentStep === 1 && !snarkyStore.steps.compilation.isLoading ? 'Compile': ''}}
          </n-button>


        </div>
      </n-step>
      <n-step title="Get ZkApp Instance Info" :status="snarkyStore.steps.instance.isFinished ? 'finish' : snarkyStore.steps.compilation.isFinished ? 'process': 'wait'">
        <div class="n-step-description">
          <!--          <p>Al through the day, I me mine I me mine, I me mine</p>-->
          <n-button
              v-if="snarkyStore.currentStep === 2 && !snarkyStore.steps.instance.isFinished"
              :loading="snarkyStore.steps.instance.isLoading"
              size="small"
              @click="setZkApp"
          >
            {{ snarkyStore.currentStep === 2 && !snarkyStore.steps.instance.isLoading ? 'Set Instance': ''}}
          </n-button>
        </div>
      </n-step>
      <n-step title="Start Evm Session" :status="snarkyStore.steps.signInEvm.isFinished ? 'finish' : snarkyStore.steps.instance.isFinished ? 'process': 'wait'">
        <div class="n-step-description">
          Only Ethereum, Polygon, Avalanche supported. Sign in to chain and wallet where you want to prove ownership.
          <!--          <p>Al through the day, I me mine I me mine, I me mine</p>-->
          <n-button
              v-if="snarkyStore.currentStep === 3"
              :loading="snarkyStore.steps.signInEvm.isLoading"
              size="small"
              @click="signInToEvm"
          >
            Sign In
          </n-button>
        </div>
      </n-step>
<!--      <n-step title="Get Signed Data" :status="snarkyStore.steps.dataFetch.isFinished ? 'finish' : snarkyStore.steps.signInEvm.isFinished ? 'process': 'wait'">-->
      <n-step title="Get Signed Data" :status="snarkyStore.steps.dataFetch.isFinished ? 'finish' : snarkyStore.steps.signInEvm.isFinished ? 'process': 'wait'">
<!--        v-if="snarkyStore.currentStep === 4"-->
        <div class="n-step-description"  v-if="![1, 137,43114].includes(snarkyStore.selectedChainId) && snarkyStore.currentStep === 4" >
          Current chain not supported please sign in again
          <br>
          <n-button @click="snarkyStore.currentStep = 3" text style="font-size: 24px">
            <n-icon>
              <arrow-back />
            </n-icon>
          </n-button>


        </div>
        <div class="n-step-description"  v-if="[1, 137,43114].includes(snarkyStore.selectedChainId) && snarkyStore.currentStep === 4" >
          Please indicate on which contract on which chain you would like to prove ownership.
          ERC20, ERC721 are supported. Mina will emit an event under your mina address proving you own at least 1 asset from this address.
          <br><br>
          You are connected to chain:
          <n-select v-model:value="snarkyStore.selectedChainId" disabled :show-arrow="false" size="large" :options="accountStore.chains" label-field="networkName" value-field="chainId" >
          </n-select>

          Indicate Contract Address
          <n-input  placeholder="enter a valid address in chosen network" v-model:value="snarkyStore.selectedTokenAddress"/>
          <br>

          <br>
          Select Token Type
          <n-select v-model:value="snarkyStore.selectedTokenType" default-value="ERC721" size="large" :options="[{label: 'ERC20'},{label:'ERC721'}]" label-field="label" value-field="label" ></n-select>
          <br>

          <div v-if="snarkyStore.selectedTokenType === 'ERC721'">

            Check on Open Sea
            <br>
            <nuxt-link :to="`https://opensea.io/assets?search[query]=${snarkyStore.selectedTokenAddress}`" target="_blank">
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
              v-if="snarkyStore.currentStep === 4"
              :loading="snarkyStore.steps.dataFetch.isLoading"
              size="large"
              @click="fetchCertifiedData"
          >
            Get oracle certified data
          </n-button>





        </div>
      </n-step>
      <n-step title="Prove on Mina" :status="snarkyStore.steps.proofTransaction.isFinished ? 'finish' : snarkyStore.steps.dataFetch.isFinished ? 'process': 'wait'">


        <div class="n-step-description" v-if="snarkyStore.currentStep === 5">
          <!--          v-if="snarkyStore.currentStep === 5"   :loading="snarkyStore.steps.proofTransaction.isLoading"   </p>-->
          <MinaLogIn v-if="!accountStore.minaLoggedIn"></MinaLogIn>
          <n-button
              v-if="snarkyStore.currentStep === 5 && accountStore.minaLoggedIn"
              :loading="snarkyStore.steps.proofTransaction.isLoading"
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
import {useSnarky} from "../store/snarky/snarky.index";
import {TokenOwnershipOracle , EvmAddress} from "zkapp-oracles";
import MinaLogIn from "~/components/wallets/MinaLogIn";
import {useNuxtApp} from "nuxt/app";

import { MdArrowBack as ArrowBack } from '@vicons/ionicons4'
import { MdEasel } from '@vicons/ionicons4'

const accountStore = useAccount()


const snarkyStore = useSnarky();
const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

onMounted(async () => {
  snarkyStore.steps.snarkyLoad.isLoading = true
  if(!snarkyStore.steps.snarkyLoad.isFinished) {
    await isReady;
  }

  snarkyStore.steps.snarkyLoad.isLoading = false
  snarkyStore.isLoaded = true
  snarkyStore.steps.snarkyLoad.isFinished = true
  const graphqlEndpoint = 'https://proxy.berkeley.minaexplorer.com/graphql'
  setGraphqlEndpoint(graphqlEndpoint)
  let Berkeley = Mina.Network(graphqlEndpoint)
  Mina.setActiveInstance(Berkeley)
  snarkyStore.currentStep = 1

})

const compileZkApp = async (zkAppAddress) => {
  snarkyStore.steps.compilation.isLoading = true
  await sleep(500)
  await TokenOwnershipOracle.compile()
  console.log("compilation finished")
  snarkyStore.steps.compilation.isLoading = false
  snarkyStore.steps.compilation.isFinished = true
  snarkyStore.currentStep = 2
  await sleep(500)
}
const setZkApp = async () => {
  snarkyStore.steps.instance.isLoading = true
  //const pk = PublicKey.fromBase58(snarkyStore.tokenOwnershipOracleAddress);
  let { account, error } = await fetchAccount({ publicKey: PublicKey.fromBase58("B62qrYrpVQHev7f1jQ3EaM44nCSFsTYbxCMqqDCm8GCJEZQM8EAVbMG")})
  console.log('account', JSON.stringify(account, null, 2));
  console.log('error', JSON.stringify(error, null, 2));
  snarkyStore.steps.instance.isLoading = false
  snarkyStore.steps.instance.isFinished = true
  try {
    snarkyStore.zkApp = new TokenOwnershipOracle(PublicKey.fromBase58("B62qrYrpVQHev7f1jQ3EaM44nCSFsTYbxCMqqDCm8GCJEZQM8EAVbMG"));
    let value = snarkyStore.zkApp.oraclePublicKey.get()

    console.log(`Found deployed zkapp, with state oraclePublic Key =  ${value.toBase58()}`);
  } catch (error) {
    console.log(error)
  }
  snarkyStore.account = account
  snarkyStore.currentStep = 3
  // snarkyStore.zkApp = new TokenOwnershipOracle(pk);
  // let value = zkApp.value.get();-->
  // <!--    zkappState.value = value-->
  // snarkyStore.tokenOwnershipOracleIsSet = true
}
const signInToEvm = async function() {
  snarkyStore.steps.signInEvm.isLoading = true
  await accountStore.signIn()
  const {$ssx} = useNuxtApp();
  snarkyStore.selectedChainId = $ssx.chainId()
  snarkyStore.steps.signInEvm.isLoading = false
  snarkyStore.steps.signInEvm.isFinished = true
  snarkyStore.currentStep = 4
}
const useExampleValue = function() {
  const {$ssx} = useNuxtApp()

  const currentChain = $ssx.chainId()
  if (currentChain === 43114) {
    snarkyStore.selectedTokenAddress = "0x0C3b29321611736341609022C23E981AC56E7f96"
  } else if(currentChain === 1) {
    snarkyStore.selectedTokenAddress = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
  } else if(currentChain === 137) {
    snarkyStore.selectedTokenAddress = "0xB2435253C71FcA27bE41206EB2793E44e1Df6b6D"
  }

  snarkyStore.selectedChainId = $ssx.chainId()
  snarkyStore.selectedTokenType = "ERC721"
}
const fetchCertifiedData = async function() {
  snarkyStore.steps.dataFetch.isLoading = true
  await accountStore.getSignedOwnershipData(snarkyStore.selectedTokenAddress , snarkyStore.selectedTokenType)
  snarkyStore.steps.dataFetch.isLoading = false
  snarkyStore.steps.dataFetch.isFinished = true
  snarkyStore.currentStep = 5
}
const verify = async function() {
  snarkyStore.steps.proofTransaction.isLoading = true

  let addressToFields =  Encoding.stringToFields(accountStore.ownershipData.data.address)
  let balance = Field(accountStore.ownershipData.data.balance)
  let chainId = Field(Number(accountStore.ownershipData.data.chainId))

  const signature = Signature.fromJSON(accountStore.ownershipData.signature)
  // for debugging: check signature
  const validSignature = signature.verify(PublicKey.fromBase58(snarkyStore.oracleSignerPublicKey), [balance,chainId,...addressToFields]);
  console.log("validSignature", validSignature)


  let app = new TokenOwnershipOracle(PublicKey.fromBase58(snarkyStore.tokenOwnershipOracleAddress));
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
  //
  } catch(err) {
    console.log("error", err)
  }

  snarkyStore.steps.proofTransaction.isLoading = false
  snarkyStore.steps.proofTransaction.isFinished = true
  snarkyStore.currentStep = 6
}
</script>