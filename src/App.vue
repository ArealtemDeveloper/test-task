<template>
  <div :class="$style.container">
    <h1>
      {{ TITLE }}
    </h1>

    <TodoFilter />

    <TodosWrapper>
      <TodoList />
    </TodosWrapper>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import TodoList from '@/components/TodoList.vue';
import TodosWrapper from '@/components/ui/VWrapper.vue';

import { useStore } from 'vuex';
import TodoFilter from '@/components/TodoFilter.vue';

const store = useStore();

const TITLE = 'Список задач';

onMounted(async () => {
  await store.dispatch('fetchTodos');
});
</script>

<style lang="scss" module>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
}
</style>
