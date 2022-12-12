<template>
  <div >
    ZK Dashboard gathers every proofs you want to make publicly available under your Mina Account. with zk dashboard you can prove ownership of specific nft in a collection, or trading volume under specific exchange , without revealing your address.

    <n-grid x-gap="12" :cols="2">
      <n-gi>
        <n-card title="Proof Of Ownership (NFTs) Events">

          <template #header-extra>
            <n-button @click="showOwnershipModal = true">New Proof</n-button>
          </template>

          <div v-if="ownershipProofStore.eventsLoading">
            <n-skeleton height="40px" style="margin-bottom: 7px;" width="100%" :sharp="false" />
            <n-skeleton height="40px" style="margin-bottom: 7px;" width="100%" :sharp="false" />
            <n-skeleton height="40px" style="margin-bottom: 7px;" width="100%" :sharp="false" />
          </div>
        <n-data-table
            v-else
            :columns="ownershipColumns"
            :data="ownershipProofStore.events"
            :pagination="pagination"
            :bordered="false"
        />

        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="Proof Of Trade Events">

          <template #header-extra>
            <n-skeleton  text width="60%" />
            <n-button  @click="showTradeModal = true" >New Proof</n-button>
          </template>
          <div v-if="tradeProofStore.eventsLoading">
            <n-skeleton height="40px" style="margin-bottom: 7px;" width="100%" :sharp="false" />
            <n-skeleton height="40px" style="margin-bottom: 7px;" width="100%" :sharp="false" />
            <n-skeleton height="40px" style="margin-bottom: 7px;" width="100%" :sharp="false" />
          </div>
          <n-data-table
              v-else
              :columns="tradeColumns"
              :data="tradeProofStore.events"
              :pagination="pagination"
              :bordered="false"
          />

        </n-card>
      </n-gi>
    </n-grid>

    <ClientOnly>
    <n-modal v-model:show="showOwnershipModal" :mask-closable="false" preset="dialog" style="width:900px" :show-icon="false" :on-after-leave="ownershipModalStatusClosed">

      <OwnershipProofModal></OwnershipProofModal>

    </n-modal>
    </ClientOnly>
    <ClientOnly>

      <n-modal v-model:show="showTradeModal" :mask-closable="false" preset="dialog" style="width:900px" :show-icon="false" :on-after-leave="tradeModalStatusClosed" >

        <TradeProofModal></TradeProofModal>

      </n-modal>
    </ClientOnly>

  </div>
</template>
<script setup>
import {NCard, NGrid, NGi, NList, NListItem, NTag, NThing,   NDataTable , NButton , NModal , NSkeleton} from "naive-ui";
import {h, ref} from "vue";
import {onMounted} from "../.nuxt/imports";
const router = useRouter();
import {useOwnershipProof} from "../store/ownershipProof/ownershipProof.index";
const ownershipProofStore = useOwnershipProof()
import {useTradeProof} from "../store/tradeProof/tradeProof.index";
import {Bool, Encoding, Field, PublicKey} from "snarkyjs";
const tradeProofStore = useTradeProof()
onMounted(async () => {
  //await tradeProofStore.getZkAppInstance()
  tradeProofStore.eventsLoading = true
  ownershipProofStore.eventsLoading = true
  await tradeProofStore.getEvents()
  tradeProofStore.eventsLoading = false
  await ownershipProofStore.getEvents()
  ownershipProofStore.eventsLoading = false
})

const showOwnershipModal = ref(false)
const ownershipModalStatusClosed = async function () {
  let events;
  if(ownershipProofStore.currentStep === 6){
    events = await ownershipProofStore.getEvents()
  } else {
    events = ownershipProofStore.events
  }
  ownershipProofStore.$reset()
}
const ownershipColumns = [
  {
    title: 'ID',
    key: 'id'
  },
  {
    title: 'Token Address',
    key: 'tokenAddress'
  },
  {
    title: 'Chain Id',
    key: 'chainId'
  },
  {
    title: 'DateTime',
    key: 'dateTime'
  },
  {
    title: 'Link',
    key: 'link',
    render (row) {
      return h(
          NButton,
          {
            tag: 'a',
            href: `https://opensea.io/assets?search[query]=${row.tokenAddress}`,
            size: 'small',
            target: '_blank'
          },
          { default: () => 'Opensea' }
      )
    }
  },
  {
    title: 'Account',
    key: 'minaAddress',
    render (row) {
      return h(
          NButton,
          {
            tag: 'a',
            href: `https://berkeley.minaexplorer.com/wallet/${row.minaAddress}`,
            size: 'small',
            target: '_blank'
          },
          { default: () => `${row.minaAddress.slice(0,5)}...${row.minaAddress.slice(-4)}` }
      )
    }
  }

  ]

const showTradeModal = ref(false)
const tradeModalStatusClosed = async function () {
  let events;
  if(tradeProofStore.currentStep === 6){
    events = await tradeProofStore.getEvents()
  } else {
    events = tradeProofStore.events
  }
  tradeProofStore.$reset()
}
const tradeColumns = [
  {
    title: 'ID',
    key: 'id'
  },
  {
    title: 'Exchange',
    key: 'exchange'
  },
  {
    title: 'DateTime',
    key: 'dateTime'
  },
  {
    title: 'Trade Volume ($)',
    key: 'tradeVolume'
  },
  {
    title: 'Account',
    key: 'minaAddress',
    render (row) {
      return h(
          NButton,
          {
            tag: 'a',
            href: `https://berkeley.minaexplorer.com/wallet/${row.minaAddress}`,
            size: 'small',
            target: '_blank'
          },
          { default: () => `${row.minaAddress.slice(0,5)}...${row.minaAddress.slice(-4)}` }
      )
    }
  }
  ]

const pagination =  false

</script>