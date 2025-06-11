<template>
  <div class="user-page">
    <button 
      class="user-page__btn"
      @click="$router.back()"
    >
      {{ TEXT_LABELS.back }}
    </button>

    <UserInfo
      :info="data.info"
    />

    <section class="user-page__wrapper">
        <UserPost 
          v-for="card in data.cards.posts"
          :key="card.id"
          :post="card"
        />
    </section>
  </div>
</template>

<script setup>
const TEXT_LABELS = {
  back: 'Назад',
};

const PAGE_TITLE = "User Page";
const route = useRoute();

const pageLimit = ref(12);

const { data } = await useAsyncData('user', async () => {
  const id = route.params.id;

  try {
    const [info, cards] = await Promise.all([
      $fetch(`/api/user/${id}`), 
      $fetch(`/api/posts/${id}?limit=${pageLimit}`)
    ])

    return {
      info,
      cards,
    }
  } catch { 
    console.warn('error')
  }
});

useHead({
  title: PAGE_TITLE,
});

definePageMeta({
  title: PAGE_TITLE,
  meta: [
    {
      name: "description",
      content: "This is the user page of the application.",
    },
  ],
});

</script>

<style lang="scss" scoped>
  .user-page {
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;

    &__wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    &__btn {
      max-width: 80px;
      border: none;
      border-radius: 8px;
      padding: 8px 12px;
      background-color: #FFAA1D;
      font-size: 18px;
      cursor: pointer;
      transition: background-color .3s ease;

      &:hover {
        background-color: #FFBF00;
      }
    }
  }
</style>
