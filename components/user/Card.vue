<template>
  <div class="user-card">
    <NuxtLink class="user-card__link" :to="`/users/${user.id}/`"></NuxtLink>
    
    <p>
        {{ user.firstName }} {{ user.lastname }}
    </p>

    <a 
      class="user-card__email" 
      :href="`mailto:${user.email}`"
    >
        {{ user.email }}
    </a>
  </div>
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: none;
  outline: none;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__email {
    position: relative;
    z-index: 100;
  }

  &:hover {
    background-color: #f0f0f0;
  }

  p {
    font-weight: bold;
    margin: 0 0 5px;
  }
}
</style>
