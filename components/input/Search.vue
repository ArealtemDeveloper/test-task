<template>
  <div class="app-search">
    <Icon name="material-symbols:search" size="20px" class="app-search__icon" />

    <input
      ref="myInput"
      v-model="value"
      type="text"
      :placeholder="placeholder"
      class="app-input__text"
    />
  </div>
</template>

<script setup>
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "Enter text",
  },
});

const input = useTemplateRef('myInput');

const value = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit("update:modelValue", newValue);
  },
});

onMounted(() => {
  input.value.focus();
});
</script>

<style lang="scss" scoped>
.app-search {
  display: flex;
  gap: 10px;
  align-items: center;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
  max-width: 50%;

  &__icon {
    color: gray;
  }

  &:focus-within {
    border: 1px solid blue;
  }
}

.app-input__text {
  border: none;
  background-color: inherit;
  padding: 10px;
  width: 100%;
  outline: none;
}
</style>
