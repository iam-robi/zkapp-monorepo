<template>
  <div>
    <h1 class="test">
      <n-button @click="go">$t('account.signin')</n-button>
      <n-button @click="accountStore.getUserInfo">getUserInfo</n-button>
      <n-button @click="accountStore.getSignedCollectionProof('0x0C3b29321611736341609022C23E981AC56E7f96')">Owned (Novax)</n-button>
      <n-button @click="accountStore.getSignedCollectionProof('0x09BE62ccCA8d6815fbAb477A953A0935176262CF')">Not Owned</n-button>
      <n-button @click="accountStore.getSignedCollectionProof('0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D')">Not Owned (eth bopred ape)</n-button>
    </h1>
  </div>
</template>
<script setup lang="ts">
import {NButton, NInput} from "naive-ui";
import {useAsyncData, useCookie, useFetch, useRoute} from "#app";
import { useAccount } from "~/store/account/account.index";
import {useGqlCors} from "#imports";

const accountStore = useAccount()
const go = async function() {
  await accountStore.signIn()
}

useGqlCors({credentials: "include" , client: 'oracle'})

</script>
<style scoped>

</style>