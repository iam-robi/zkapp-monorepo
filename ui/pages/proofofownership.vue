<template>
  <div>
    <n-layout embedded content-style="padding: 24px;">
      <n-card>
        <ClientOnly>
          <ProofModal></ProofModal>
        </ClientOnly>
      </n-card>
    </n-layout>
  </div>
</template>
<script setup lang="ts">

import { useGqlCors } from "#imports";
import ProofModal from "~/components/ProofModal.vue";
import {NCard, NLayout} from "naive-ui";
useGqlCors({credentials: "include" , client: 'oracle'})

</script>
<style scoped>

</style>