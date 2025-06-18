<template>
  <div :class="$style.wrapper">
    <VButton
      v-for="category in CATEGORIES"
      :key="category.id"
      rounded="small"
      color="transparent"
      :active="store.state.todos.currentTab === category.value"
      @click="onChangeTab(category.value)"
    >
      {{ category.title }}
    </VButton>
  </div>
</template>

<script setup lang="ts">
import { CATEGORIES } from '@/constants/todos';
import { useStore } from 'vuex';

import { ICategoryItem } from '@/types';

import VButton from '@/components//ui/VButton.vue';

const store = useStore();

const onChangeTab = (event: ICategoryItem['value']) => {
  store.dispatch('changeCategory', event);
};
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
