<template>
  <NuxtLink class="user-card" to="/">
    <p>{{ user.firstName }} {{ user.lastname }}</p>
    <a :href="user.email">
      {{ user.email }}
    </a>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.user-card {
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  p {
    font-weight: bold;
    margin: 0 0 5px;
  }
}
</style>
