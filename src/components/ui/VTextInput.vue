<template>
  <div :class="$style.wrapper">
    <input v-model="model" :class="$style.input" type="text" />
  </div>
</template>

<script setup lang="ts">
const model = defineModel();
</script>

<style lang="scss" module>
.wrapper {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid $base-400;
  border-radius: 8px;
  transition: 0.3s border ease;

  &:focus-within {
    border: 1px solid $green-200;
  }
}

.input {
  width: 100%;
  border: none;
  outline: none;
}
</style>
