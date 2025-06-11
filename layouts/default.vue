<template>
  <div class="layout-default">
    <CommonHeader 
      class="--app-width" 
    />

    <main class="layout-default__content --app-width">
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
.layout-default {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__content {
    flex: 1;
    display: flex;
    padding-top: 40px;
    box-sizing: border-box;
  }

  .--app-width {
    width: 100%;
    max-width: 1640px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
