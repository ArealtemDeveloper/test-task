<template>
  <div :class="$style.wrapper">
    <div :class="$style.content">
      <VCheckbox v-model="checkbox" />

      <span :class="$style.title">
        {{ todo.title }}
      </span>
    </div>

    <VButton color="red" @click="handleDeleteTodo">{{ BUTTON_LABEL }}</VButton>
  </div>
</template>

<script setup lang="ts">
import VCheckbox from '@/components/ui/VCheckbox.vue';
import VButton from '@/components/ui/VButton.vue';

import { ITask } from '@/types';
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

const BUTTON_LABEL = 'Удалить';

const store = useStore();

const props = defineProps<{
  todo: ITask;
}>();

const checkbox = ref(props.todo.completed || false);

const onChangeTodo = () => {
  store.dispatch('changeTodoCompleted', {
    id: props.todo.id,
    completed: checkbox.value,
  });
};

const handleDeleteTodo = () => {
  store.dispatch('deleteTodo', {
    id: props.todo.id,
  });
};

watch(checkbox, () => {
  onChangeTodo();
});
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid $base-300;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: $base-0;
  transition: 0.3s background-color ease;

  &:hover {
    background-color: $base-100;
  }
}

.content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.title {
  color: $base-900;
  font-size: 18px;
  max-width: 600px;
}
</style>
