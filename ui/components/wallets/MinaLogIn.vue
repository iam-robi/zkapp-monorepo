<template>
  <div >
  <nuxt-link v-if="!$mina" to="https://www.aurowallet.com" target="_blank">
    <n-button class="mina_login_button">Install Auro Wallet</n-button>
  </nuxt-link>
  <n-button class="mina_login_button" v-if="$mina && !accountStore.minaLoggedIn" @click="accountStore.minaSignIn()">Login</n-button>
  <n-button class="mina_login_button" v-if="accountStore.minaLoggedIn" > {{accountStore.minaAccounts ? `${accountStore.minaAccounts[0].slice(0,6)}...${accountStore.minaAccounts[0].slice(-4)}` : ''}}</n-button>
  </div>
</template>
<script setup>
import {useAccount} from "../../store/account/account.index";
import {NButton} from "naive-ui";

const accountStore = useAccount()
</script>
<style scoped>
.mina_login_button, .mina_login_button:hover{
  background: #FFFFFF;
border: 0.5px solid #2D2D2D;
border-radius: 4px 0px;
text-transform: uppercase;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;
font-family: 'IBM Plex Mono', monospace;
text-decoration: none;
color: var(--rich-black); 
outline: none;
}
</style>