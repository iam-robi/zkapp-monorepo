<template>
  <div>
  <n-form ref="formRef" :rules="rules">
    <n-form-item path="address" label="Token Address">
      <n-input  placeholder="enter a valid address in chosen network" v-model:value="snarkyStore.selectedTokenAddress" @keydown.enter.prevent/>
      <!--              <n-input v-model:value="model.age" @keydown.enter.prevent />-->
    </n-form-item>
    <n-form-item path="chain" label="EVM Chain">
      <n-select v-model:value="snarkyStore.selectedChainId" size="large" :options="accountStore.chains" label-field="networkName" value-field="chainId" ></n-select>
    </n-form-item>
    <n-row :gutter="[0, 24]">
      <n-col :span="24">
        <div style="display: flex; justify-content: flex-end">
          <n-button

              round
              type="primary"
              @click="handleValidate"
          >
            Validate
          </n-button>
        </div>
      </n-col>
    </n-row>
  </n-form>
  </div>
</template>

<script setup>
import {
  FormInst,
  FormItemInst,
  FormItemRule,
  FormValidationError,
  useMessage,
  FormRules
} from 'naive-ui'

const handleValidate = function () {
  console.log("validating")

}
const rules = {
  contractAddress: [
    {
      required: true,
      validator (rule: FormItemRule, value: string) {
        if (!value) {
          return new Error('Address is required')
        } else if (new RegExp('^0x[a-fA-F0-9]{40}$').test(value)
        ) {
          return new Error('Not valid address format')
        }
        return true
      },
      trigger: ['input', 'blur']
    }
  ],
  chainId: [
    {
      required: true,
      message: 'Chain id required'
    }
  ]
}

</script>