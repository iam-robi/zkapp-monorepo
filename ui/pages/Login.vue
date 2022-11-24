<template>
  <div>
    <h1 class="test">
      <n-button @click="go">$t('account.signin')</n-button>
      <n-button @click="accountStore.getUserInfo">getUserInfo</n-button>
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