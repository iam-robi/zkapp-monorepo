<template>
<div class="mina_body">
  <div class="mina_container">
    <slot />
  </div>
</div>
</template>

<script setup>
import {NLayoutContent, NLayoutSider, NLayout , NSpace , NH2, NButton, NDialogProvider} from "naive-ui";
import { useAccount } from "../store/account/account.index";
import {onMounted, ref, computed} from "#imports";
import MinaLogIn from "~/components/wallets/MinaLogIn";

import {useNuxtApp} from "#app";
onMounted(async () => {
  const {$mina} = useNuxtApp()
  console.log("mounted on layout", $mina)

  //await accountStore.minaSignIn()
})

const accountStore = useAccount();
useHead({
  title: "ZK Dashboard",
})
</script>
