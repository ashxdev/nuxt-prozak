<script setup lang="ts">
import type { CategoryI, Homepage } from "@/types"

defineProps<{
  homepage: Homepage | null
  categories: CategoryI[] | null
}>()
</script>

<template>
  <header class="navbar-light navbar-sticky header-static">
    <link
      type="text/css"
      rel="stylesheet"
      id="style-switch"
      href="/css/style.css"
    />
    <AppHeaderCookie />
    <AppHeaderTopMenu />
    <AppHeaderMainMenu :homepage="homepage" :categories="categories" />
  </header>
</template>
