<script setup lang="ts">
const { data: homepage } = useHomePage()
const { data: categories } = useCategories()
</script>

<template>
  <AppHeader :homepage="homepage" :categories="categories" />
  <main>
    <NuxtPage />
  </main>
  <AppFooter :homepage="homepage" :categories="categories" />
</template>
