<template>
  Hello {{loadingSnarkyJs ? 'loading': 'not loading'}}
</template>
<script setup>
import {
  Field,
  PrivateKey,
  PublicKey,
  Mina,
  isReady,
  shutdown,
  fetchAccount,
  setGraphqlEndpoint,
} from 'snarkyjs';
import {onMounted, ref} from "#imports";
const loadingSnarkyJs = ref(true)

onMounted(async () => {
  console.log("test mounted")
  // let msg = message.create('Loading', { type: 'success', duration: 10000 })
  // await sleep(1500)
  await isReady;
  loadingSnarkyJs.value = false
  console.log("loaded")
  const e = Field(0)
  console.log(e)
  //
  // // create Berkeley connection
  // const graphqlEndpoint = 'https://proxy.berkeley.minaexplorer.com/graphql';
  // setGraphqlEndpoint(graphqlEndpoint);
  // let Berkeley = Mina.BerkeleyQANet(graphqlEndpoint);
  // Mina.setActiveInstance(Berkeley);
  // msg.content = 'Ready to interact with berkeley!'

})
</script>