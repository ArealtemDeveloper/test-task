<template>
  <form :class="$style.wrapper">
    <VTextInput v-model.trim="inputVal" />

    <VButton type="submit" :disabled="!inputVal" @click="onAddTodo">
      <span>{{ BUTTON_LABEL }}</span>
    </VButton>
  </form>
</template>

<script setup lang="ts">
import VTextInput from '@/components/ui/VTextInput.vue';
import VButton from '@/components/ui/VButton.vue';

import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const inputVal = ref('');

const BUTTON_LABEL = 'Добавить';

const onAddTodo = () => {
  store.dispatch('addTodo', {
    id: store.getters.getLastTodoId + 1,
    title: inputVal.value,
    completed: false,
  });

  inputVal.value = '';
};
</script>

<style lang="scss" module>
.wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
