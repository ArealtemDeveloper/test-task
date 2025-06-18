<template>
  <input type="checkbox" :class="$style.checkbox" v-model="model" />
</template>

<script setup lang="ts">
const model = defineModel();
</script>

<style lang="scss" module>
.checkbox {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  border: 2.5px solid $indigo-400;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  transition:
    background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  vertical-align: middle;
  outline-offset: 4px;
}

.checkbox:hover {
  border-color: $indigo-500;
  box-shadow: 0 0 6px 2px rgba(99, 102, 241, 0.4);
}

.checkbox:focus-visible {
  outline: 3px solid $indigo-400;
  outline-offset: 4px;
  box-shadow: 0 0 8px 3px rgba(99, 102, 241, 0.6);
}

.checkbox:checked {
  background-color: $indigo-400;
  border-color: $indigo-500;
}

.checkbox:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0.3em;
  height: 0.6em;
  border-style: solid;
  border-color: white;
  border-width: 0 2px 2px 0;
  transform: translate(-50%, -60%) rotate(45deg);
  transition: all 0.3s ease-in-out;
  box-sizing: content-box;
  pointer-events: none;
}

.checkbox:disabled {
  border-color: $base-400;
  background-color: $base-200;
  cursor: not-allowed;
  opacity: 0.7;
}

input:disabled::after {
  border-color: $base-100;
}
</style>
