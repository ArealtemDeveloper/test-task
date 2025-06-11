<template>
  <div
    v-if="!error && data.users.length"
    class="home-page"
  >
    <InputSearch v-model="test" placeholder="Enter text" />
    <div class="home-page__users-list">
      <UserCard v-for="user in filteredUsers" :key="user.id" :user="user" />
    </div>
  </div>

  <div v-else>
    <span>Что-то пошло не так</span>
  </div>
</template>

<script setup>
const PAGE_TITLE = "Home Page";
const users = ref([]);
const test = ref("test");

useHead({
  title: PAGE_TITLE,
});

const { data, error } = useFetch('/api/users');

definePageMeta({
  title: PAGE_TITLE,
  meta: [
    {
      name: "description",
      content: "This is the home page of the application.",
    },
  ],
});

const filteredUsers = computed(() => {
  if (!test.value || test.value.length < 3) {
    return data?.users || [];
  }

  return data?.users?.length 
    ? data.users.filter(item => item.email.toLowerCase().includes(test.value) || item.firstName.toLowerCase().includes(item.value))
    : [];
})
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
    gap: 20px 50px;
  }
}
</style>
