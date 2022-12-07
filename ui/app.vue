<template>
  <n-config-provider :theme="darkTheme">
    <n-loading-bar-provider>
      <n-message-provider placement="top-right">
        <n-notification-provider placement="bottom-right">
          <NuxtLayout>
            <NuxtPage/>
          </NuxtLayout>
        </n-notification-provider>
      </n-message-provider>
      </n-loading-bar-provider>
  </n-config-provider>
</template>
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { darkTheme } from 'naive-ui'
// import header_ from './components/header.vue'
// import intro_ from './components/intro.vue'
// import content from './components/content.vue'
// import footer_ from './components/footer.vue'


</script>