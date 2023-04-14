<template>
  <div>
    <t-button>测试</t-button>
    <t-button type='success'>测试</t-button>
    <t-button type='warning'>测试</t-button>
    <t-input v-model="val"></t-input>
    <p>双向测试输入框： {{ val }}</p>
  </div>
</template>

<script setup>
  import { ref } from "vue"
  const val = ref("")
</script>

<style lang='scss' scoped>

</style>
