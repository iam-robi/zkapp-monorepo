<template>
  <div>
    <n-space>
    <h1 class="test">
      <n-button type="primary" @click="go">{{$t('account.signIn')}}</n-button>
      <n-button type="primary" @click="accountStore.getUserInfo">getUserInfo</n-button>
      <div>
        <n-button type="primary" @click="accountStore.getSignedOwnershipData('0x0C3b29321611736341609022C23E981AC56E7f96' , 'ERC721')">NFT Owned (Novax)</n-button>
        <n-button type="primary" @click="accountStore.getSignedOwnershipData('0x09BE62ccCA8d6815fbAb477A953A0935176262CF', 'ERC721')">NFT Not Owned</n-button>
        <n-button type="primary" @click="accountStore.getSignedOwnershipData('0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D', 'ERC721')">NFT Not Owned (eth bopred ape)</n-button>
      </div>

      <div>
        <n-button type="primary" @click="accountStore.getSignedOwnershipData('0x8a0cAc13c7da965a312f08ea4229c37869e85cB9' , 'ERC20')">ERC20 Owned (GRT)</n-button>
        <n-button  type="primary" @click="accountStore.getSignedOwnershipData('0xc7198437980c041c805A1EDcbA50c1Ce5db95118', 'ERC20')">ERC20 Not Owned (usdt)</n-button>
        <!--        <n-button @click="accountStore.getSignedOwnershipData('0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D', 'ERC20')">NFT Not Owned (eth bopred ape)</n-button>-->
      </div>


    </h1>
    </n-space>
    <n-space>

        <n-button type="info" @click="go">Verify</n-button>
      <ClientOnly>
        <Test></Test>
      </ClientOnly>

    </n-space>
  </div>
</template>
<script setup lang="ts">
import {NButton, NInput} from "naive-ui";
import {useAsyncData, useCookie, useFetch, useRoute} from "#app";
import { useAccount } from "~/store/account/account.index";
import {onMounted, useGqlCors, ref} from "#imports";
import { Test } from '#components'



const accountStore = useAccount()
const go = async function() {
  await accountStore.signIn()
}
const verify = async function() {
  await accountStore.verifyOwnership()
}

useGqlCors({credentials: "include" , client: 'oracle'})

</script>
<style scoped>

</style>