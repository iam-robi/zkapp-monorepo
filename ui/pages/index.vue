<template>
  <div >
   <div class="mina_flex gap-16" style="align-items: baseline;">
    <div style="flex-grow: 2">
       <h1 class="mina_big_title">ZK Dashboard</h1>
      <p class="mina_text">ZK Dashboard gathers every proofs you want to make publicly available under your Mina Account. with zk dashboard you can prove ownership of specific nft in a collection, or trading volume under specific exchange, without revealing your address.</p>
    </div>
    <div>
      <MinaLogIn></MinaLogIn>
    </div>
   </div>
    <n-grid x-gap="12" :cols="2" v-show="displayStore.main[0] === MainDisplayOptions.POOEVENTS && displayStore.main[1] === MainDisplayOptions.POTEVENTS">
      <n-gi>
        <div class="mina_card">
          <div class="mina_card_header">
            <h1 class="mina_title" style="flex-grow: 2">Proof Of Ownership (NFTs) Events</h1>
            <n-button class="mina_new_proof_button" @click="displayStore.main = [ MainDisplayOptions.NEWPOO ]">+ New Proof</n-button>
          </div>
          <div v-if="ownershipProofStore.eventsLoading">
            <n-skeleton height="117px" style="margin-bottom: 7px;" width="100%" :sharp="false" />
            <n-skeleton height="117px" style="margin-bottom: 7px;" width="100%" :sharp="false" />
            <n-skeleton height="117px" style="margin-bottom: 7px;" width="100%" :sharp="false" />
          </div>
          <div class="mina_item" v-if="!ownershipProofStore.eventsLoading" v-for="(m, index) in ownershipProofStore.events" :key="index">
              <p class="mina_text" style="margin-top: 0px">{{m.dateTime}}</p>
              <div class="mina_item_body">
                <img src="/placeholder_logo.png" width="34" height="34"/>
                <div style="flex-grow: 4; overflow: hidden">
                  <h2 class="mina_subtitle token-address">{{m.tokenAddress}} </h2>
                  <nuxt-link> <a :href="`https://berkeley.minaexplorer.com/wallet/${m.minaAddress}`" target="_blank" class="mina_text" style="margin: 0">{{m.minaAddress}}</a></nuxt-link>

                </div>
                <div class="proved_at_least">
                  <p>At least </p>
                  <p>1</p>
                  <p> Proved</p>
                </div>
                <a :href="'https://opensea.io/assets?search[query]=' + m.tokenAddress">
                  <ph-icon name="ArrowSquareOut" size="18px" color="#FF603B"/>
                </a>
              </div>
          </div>
        </div>
      </n-gi>
      <n-gi>
        <div class="mina_card">
          <div class="mina_card_header">
            <h1 class="mina_title" style="flex-grow: 2">Proof Of Trade Events</h1>
            <n-button class="mina_new_proof_button" @click="displayStore.main = [ MainDisplayOptions.NEWPOT ]">+ New Proof</n-button>
          </div>
          <div v-if="tradeProofStore.eventsLoading">
            <n-skeleton height="117px" style="margin-bottom: 7px;" width="100%" :sharp="false" />
            <n-skeleton height="117px" style="margin-bottom: 7px;" width="100%" :sharp="false" />
            <n-skeleton height="117px" style="margin-bottom: 7px;" width="100%" :sharp="false" />
          </div>
          <div class="mina_item" v-if="!tradeProofStore.eventsLoading" v-for="(m, index) in tradeProofStore.events" :key="index">
              <p class="mina_text" style="margin-top: 0px">{{m.dateTime}}</p>
             
              <div class="mina_item_body">
                <img v-if="m.exchange === 'UNISWAP'" src="/uniswap.png" width="34" height="34"/>
                <img v-if="m.exchange === 'PANGOLIN'" src="/pangolin.png" width="34" height="34"/>
                <img v-if="m.exchange === 'BINANCE'" src="/binance.png" width="34" height="34"/>
                <div style="flex-grow: 4; overflow: hidden">
                  <h2 class="mina_subtitle" style="margin: 0">{{m.exchange}} </h2>
                  <nuxt-link> <a :href="`https://berkeley.minaexplorer.com/wallet/${m.minaAddress}`" target="_blank" class="mina_text" style="margin: 0">{{m.minaAddress}}</a></nuxt-link>
                </div>
                <div class="proved_at_least">
                  <p>Volume > </p>
                  <p>{{m.tradeVolume}}$</p>
                  <p> Proved</p>
                </div>
              </div>
          </div>
        </div>
      </n-gi>
    </n-grid>




    <ownership-proof v-show="displayStore.main[0] === MainDisplayOptions.NEWPOO" />

    <TradeProof v-show="displayStore.main[0] === MainDisplayOptions.NEWPOT"></TradeProof>



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
import {useDisplay} from "../store/display/display.index";
import {Bool, Encoding, Field, PublicKey} from "snarkyjs";
const tradeProofStore = useTradeProof()
const displayStore = useDisplay()
import MinaLogIn from "~/components/wallets/MinaLogIn";
import {MainDisplayOptions} from "../store/display/display.types";
onMounted(async () => {
  //await tradeProofStore.getZkAppInstance()
  tradeProofStore.eventsLoading = true
  ownershipProofStore.eventsLoading = true
  await tradeProofStore.getEvents()
  tradeProofStore.eventsLoading = false
  await ownershipProofStore.getEvents()
  // ownershipProofStore.eventsLoading = false
})

let showOwnershipModal = ref(false)
const ownershipModalStatusClosed = async function () {
  let events;
  if(ownershipProofStore.currentStep === 6){
    events = await ownershipProofStore.getEvents()
  } else {
    events = ownershipProofStore.events
  }
  ownershipProofStore.$reset()
  ownershipProofStore.events = events
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
  tradeProofStore.events = events
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
function onOwnershipModalState(){
  showOwnershipModal.value = false
}

</script>
<style scoped>



.mina_item_body{
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
}
.token-address{
   white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0px;
}
.token-address::before{
  float: right;
    content: attr(data-tail);
}
.proved_at_least{
  display: flex;
  padding: 4px 12px;
gap: 10px;
background: #FFFFFF;
border: 1px solid rgba(2, 2, 2, 0.1);
border-radius: 5px;
}
.proved_at_least p{
  white-space: nowrap;
  margin: 0;
  font-family: 'IBM Plex Mono', monospace;
  font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 13px;
}
.proved_at_least p:first-child{
  color: #020202;
  opacity: 0.6;
}
.proved_at_least p:nth-child(2){
  color: #020202;
}
.proved_at_least p:last-child{
  color: #45CA47;
}
</style>