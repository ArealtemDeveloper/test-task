<template>
  <div
    v-if="!error && data.users.length"
    class="home-page"
  >
    <InputSearch v-model="test" placeholder="Enter text" />
    
    <div class="home-page__users-list">
      <UserCard 
        v-for="user in filteredUsers" 
        :key="user.id" 
        :user="user" 
      />
    </div>
  </div>

  <div v-else>
    <span>Что-то пошло не так</span>
  </div>
</template>

<script setup>
const PAGE_TITLE = "Home Page";
const test = ref();

useHead({
  title: PAGE_TITLE,
});

const { data, error } = await useAsyncData('users', async () => await $fetch('/api/users'));

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
    return data?.value.users || [];
  }

  return data?.value.users?.length 
    ? data.value.users.filter(item => {
      const lowerCasedVal = test.value.toLowerCase();

      if (item.email.toLowerCase().includes(lowerCasedVal) || item.firstName.toLowerCase().includes(lowerCasedVal)) {
        return item;
      }
    })
    : [];
})
</script>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  box-sizing: border-box;

  &__users-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
}
</style>
