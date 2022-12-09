<template>
  <n-space vertical>
Current Step{{snarkyStore.currentStep}} , {{snarkyStore.steps.signInEvm.isFinished ? `Connected to ${accountStore.address}` : ''}}
    Data: {{accountStore.ownershipData}}
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
      <n-step title="Set ZkApp Instance" :status="snarkyStore.steps.instance.isFinished ? 'finish' : snarkyStore.steps.compilation.isFinished ? 'process': 'wait'">
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
      <n-step title="Get Signed Data" :status="snarkyStore.steps.dataFetch.isFinished ? 'finish' : snarkyStore.steps.signInEvm.isFinished ? 'process': 'wait'">
        <div class="n-step-description"  v-if="snarkyStore.currentStep === 4" >
          Selected Contract 0x0C3b29321611736341609022C23E981AC56E7f96 (Avalanche)
          <n-button
              v-if="snarkyStore.currentStep === 4"
              :loading="snarkyStore.steps.dataFetch.isLoading"
              size="small"
              @click="fetchCertifiedData"
          >
            Get oracle certified data
          </n-button>

        </div>
      </n-step>
      <n-step title="Prove on Mina" :status="snarkyStore.steps.proofTransaction.isFinished ? 'finish' : snarkyStore.steps.dataFetch.isFinished ? 'process': 'wait'">

        <div class="n-step-description">
          <!--          v-if="snarkyStore.currentStep === 5"   :loading="snarkyStore.steps.proofTransaction.isLoading"   </p>-->
          <n-button
              v-if="snarkyStore.currentStep === 5"
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
import {NButton, NInput, NRadioButton, NRadioGroup, NSpace, NSteps, NStep, NButtonGroup , NSpin } from "naive-ui";
import { MdArrowRoundBack, MdArrowRoundForward } from '@vicons/ionicons4'

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
    console.log(`Found deployed zkapp, with state ${value.toBase58()}`);
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
  snarkyStore.steps.signInEvm.isLoading = false
  snarkyStore.steps.signInEvm.isFinished = true
  snarkyStore.currentStep = 4
}
const fetchCertifiedData = async function() {
  snarkyStore.steps.dataFetch.isLoading = true
  await accountStore.getSignedOwnershipData('0x0C3b29321611736341609022C23E981AC56E7f96' , 'ERC721')
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