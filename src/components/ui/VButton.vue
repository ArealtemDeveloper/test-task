<template>
  <button
    :class="[
      $style.button,
      $style[`_${props.color}`],
      $style[`_rounded-${props.rounded}`],
      { [$style._active]: props.active },
    ]"
    @click.prevent="onClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface IEmits {
  (event: 'click'): void;
}

interface IProps {
  color?: 'red' | 'transparent';
  rounded?: 'small' | 'medium';
  active?: boolean;
}

const emit = defineEmits<IEmits>();

const props = defineProps<IProps>();

const onClick = () => {
  emit('click');
};
</script>

<style lang="scss" module>
.button {
  border: none;
  padding: 8px 12px;
  background-color: $green-0;
  border-radius: 8px;
  transition: 0.3s background-color ease;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: $green-100;
  }

  &._red {
    background-color: $red-0;

    &:hover:not(:disabled) {
      background-color: $red-100;
    }
  }

  &._transparent {
    background-color: $base-0;

    &:hover:not(:disabled) {
      background-color: $base-100;
    }
  }

  &._rounded-small {
    border-radius: 12px;
  }

  &._rounded-medium {
    border-radius: 20px;
  }

  &._active {
    color: $base-0;
    background-color: $indigo-400;

    &:hover:not(:disabled) {
      background-color: $indigo-500;
    }
  }
}
</style>
