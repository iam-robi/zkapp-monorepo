<template>
  <div>
  <nuxt-link v-if="!$mina" to="https://www.aurowallet.com" target="_blank">
    <n-button>Install Auro Wallet</n-button>
  </nuxt-link>
  <n-button v-if="$mina && !accountStore.minaLoggedIn" @click="accountStore.minaSignIn()">Login</n-button>
  <n-button v-if="accountStore.minaLoggedIn" > {{accountStore.minaAccounts ? `${accountStore.minaAccounts[0].slice(0,6)}...${accountStore.minaAccounts[0].slice(-4)}` : ''}}</n-button>
  </div>
</template>
<script setup>
import {useAccount} from "../../store/account/account.index";
import {NButton} from "naive-ui";

const accountStore = useAccount()
</script>