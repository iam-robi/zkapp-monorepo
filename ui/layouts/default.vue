<template>
  <n-space vertical size="large">
    <n-layout has-sider>
      <n-layout-sider
          collapse-mode="transform"
          :collapsed-width="120"
          :width="240"
          show-trigger="arrow-circle"
          content-style="padding: 24px;"
          bordered
      >
        <nuxt-link class="_xs:hidden _lg:visible" to="/proofofownership" exact> <n-h2>Proof of Ownership</n-h2></nuxt-link>
        <nuxt-link class="_xs:hidden _lg:visible" to="/proofoftrade" exact> <n-h2>Proof of Trade</n-h2></nuxt-link>
        <nuxt-link v-if="!$mina" to="https://www.aurowallet.com" target="_blank">
          <n-button>Install Auro Wallet</n-button>
        </nuxt-link>

        <n-button v-if="$mina && !accountStore.minaLoggedIn" @click="accountStore.minaSignIn()">Login</n-button>
        <n-button v-if="accountStore.minaLoggedIn" > {{accountStore.minaAccounts ? `${accountStore.minaAccounts[0].slice(0,6)}...${accountStore.minaAccounts[0].slice(-4)}` : ''}}</n-button>

      </n-layout-sider>
      <n-layout-content content-style="padding: 24px;">

            <slot />


      </n-layout-content>
    </n-layout>
  </n-space>
</template>

<script setup>
import {NLayoutContent, NLayoutSider, NLayout , NSpace , NH2, NButton} from "naive-ui";
import { useAccount } from "../store/account/account.index";
import {onMounted, ref, computed} from "#imports";
import {isReady, Mina, setGraphqlEndpoint} from "snarkyjs";
import {useNuxtApp} from "#app";
onMounted(async () => {
  const {$mina} = useNuxtApp()
  console.log("mounted on layout", $mina)

  //await accountStore.minaSignIn()
})

const accountStore = useAccount();
</script>