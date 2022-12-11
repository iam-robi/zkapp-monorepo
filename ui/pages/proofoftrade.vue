<template>
  <div>
    <n-layout embedded content-style="padding: 24px;">
      <n-card>
        <ClientOnly>
          <TradeProofModal></TradeProofModal>
        </ClientOnly>
      </n-card>
    </n-layout>
  </div>
</template>
<script setup lang="ts">

import TradeProofModal from "~/components/TradeProofModal.vue";
import {NCard, NLayout} from "naive-ui";

</script>
<style scoped>

</style>