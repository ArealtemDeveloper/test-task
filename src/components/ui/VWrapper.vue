<template>
  <main :class="$style.wrapper">
    <slot></slot>
  </main>
</template>

<script setup lang="ts"></script>

<style lang="scss" module>
.wrapper {
  border: 1px solid $base-300;
  padding: 40px 60px;
  border-radius: 8px;
  background-color: $base-0;
}
</style>
