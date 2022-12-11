<template>
  <div>
    <n-layout embedded content-style="padding: 24px;">
      <n-card>
        <ClientOnly>
          <OwnershipProofModal></OwnershipProofModal>
        </ClientOnly>
      </n-card>
    </n-layout>
  </div>
</template>
<script setup lang="ts">

import {NCard, NLayout} from "naive-ui";
import OwnershipProofModal from "~/components/OwnershipProofModal.vue";

</script>
<style scoped>

</style>