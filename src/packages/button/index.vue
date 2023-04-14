<template>
  <div :class="tClass">
    <button><slot></slot></button>
  </div>
</template>

<script>
  export default {
    name: 'tButton',
  }
</script>

<script setup>
  import { computed } from "vue"
  const props = defineProps({
    type: {
      type: String,
      default: 'default',
    }
  })
  const tClass = computed(() => {
    return [
      "t-button",
      `t-button-${props.type}`,
    ]
  })
</script>

<style lang='scss'>
  button {
    outline: none;
    border: 0;
    background: none;
    cursor: pointer;
  }

  .t-button {
    button {
      padding: 12px 24px;
      border-radius: 4px;
      border: 1px solid #f0f0f0;
    }
    &:hover {
      opacity: 0.8;
    }
  }

  .t-button-default {
    button {
      background: #f0f0f0;
    }
  }

  .t-button-success {
    button {
      background: #11b342;
    }
  }

  .t-button-warning {
    button {
      background: #c6c019;
    }
  }
</style>