<template>
  <div >
    ZK Dashboard gathers every proofs you want to make publicly available under your Mina Account. with zk dashboard you can prove ownership of specific nft in a collection, or trading volume under specific exchange , without revealing your address.

    <n-grid x-gap="12" :cols="2">
      <n-gi>
        <n-card title="Proof Of Ownership (NFTs) Events">
          <template #header-extra>
            <n-button @click="showOwnershipModal = true">New Proof</n-button>
          </template>
        <n-data-table
            :columns="ownershipColumns"
            :data="ownershipData"
            :pagination="pagination"
            :bordered="false"
        />

        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="Proof Of Trade Events">
          <n-data-table
              :columns="tradeColumns"
              :data="tradeData"
              :pagination="pagination"
              :bordered="false"
          />
          <template #header-extra>
            <n-button  @click="showTradeModal = true" >New Proof</n-button>
          </template>
        </n-card>
      </n-gi>
    </n-grid>

    <ClientOnly>
    <n-modal v-model:show="showOwnershipModal" :mask-closable="false" preset="dialog" style="width:900px" :show-icon="false">

      <OwnershipProofModal></OwnershipProofModal>

    </n-modal>
    </ClientOnly>
    <ClientOnly>
      <n-modal v-model:show="showTradeModal" :mask-closable="false" preset="dialog" style="width:900px" :show-icon="false">

        <TradeProofModal></TradeProofModal>

      </n-modal>
    </ClientOnly>

  </div>
</template>
<script setup>
import {NCard, NGrid, NGi, NList, NListItem, NTag, NThing,   NDataTable , NButton , NModal} from "naive-ui";
import {h, ref} from "vue";
const router = useRouter();

const showOwnershipModal = ref(false)

const ownershipData = [
  { id: 1, address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d', date: 'Sun Dec 11 2022',  link : 'https://opensea.io'},
  { id: 2, address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d", date: 'Sun Dec 11 2022', link : 'https://opensea.io'},
  { id: 3, address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d', date: 'Sun Dec 11 2022',link : 'https://opensea.io' }
]

const ownershipColumns = [
  {
    title: 'ID',
    key: 'id'
  },
  {
    title: 'Address',
    key: 'address'
  },
  {
    title: 'Date',
    key: 'date'
  },
  {
    title: 'Link',
    key: 'link',
    render (row) {
      return h(
          NButton,
          {
            tag: 'a',
            href: `https://opensea.io/assets?search[query]=${row.address}`,
            size: 'small',
            target: '_blank'
          },
          { default: () => 'See Collection' }
      )
    }
  }

  ]
const showTradeModal = ref(false)
const tradeData = [
  { id: 1, exchange: 'UNISWAP', date: 'Sun Dec 11 2022' , threshold: '10000' },
  { id: 2, exchange: "UNISWAP", date: 'Sun Dec 11 2022' , threshold: '10000' },
  { id: 3, exchange: 'UNISWAP', date: 'Sun Dec 11 2022' , threshold: '10000' }
]
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
    title: 'Date',
    key: 'date'
  },
  {
    title: 'Threshold ($)',
    key: 'threshold'
  }
  ]

const pagination =  false

</script>