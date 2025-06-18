<template>
  <section :class="$style.wrapper">
    <TodoAdd />

    <div>
      <h5 :class="$style.title">
        {{ title }}
      </h5>

      <TransitionGroup name="list">
        <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
      </TransitionGroup>
    </div>
  </section>
</template>

<script setup lang="ts">
import TodoItem from '@/components/TodoItem.vue';
import TodoAdd from '@/components/TodoAdd.vue';

import { computed } from 'vue';
import { useStore } from 'vuex';

const TEXT_LABELS = {
  title: 'Ваши задачи',
  emptyTasks: 'Список задач пуст',
};

const store = useStore();

const title = computed(() => {
  return store.getters.getFilteredTodos.length ? TEXT_LABELS.title : TEXT_LABELS.emptyTasks;
});

const todos = computed(() => {
  return store.getters.getFilteredTodos;
});
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-height: 400px;
  min-width: 800px;
}

.title {
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
}
</style>
