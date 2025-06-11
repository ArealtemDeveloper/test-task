<template>
  <div class="home-page">
    <InputSearch v-model="test" placeholder="Enter text" />
    <div class="home-page__users-list">
      <UserCard v-for="user in users" :user="user" />
    </div>
  </div>
</template>

<script setup>
const PAGE_TITLE = "Home Page";
const users = ref([]);
const test = ref("test");

useHead({
  title: PAGE_TITLE,
});

definePageMeta({
  title: PAGE_TITLE,
  meta: [
    {
      name: "description",
      content: "This is the home page of the application.",
    },
  ],
});

onMounted(async () => {
  const data = await $fetch("/api/users");
  users.value = data.users || [];
});
</script>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;

  &__users-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
}
</style>
