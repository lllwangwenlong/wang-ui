<template>
  <div>
    <input type="text" :value="modelValue" @input="input" />
  </div>
</template>

<script>
  export default {
    name: 'tInput',
  }
</script>

<script setup>
  const emit = defineEmits(["update:modelValue"])
  const props = defineProps({
    modelValue: String | Number,
  })
  const input = (e) => {
    emit("update:modelValue", e.target.value)
  }
</script>

<style lang='scss'>

</style>