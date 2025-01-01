<script setup lang="ts">
import type { CategoryI, Homepage } from "~/types"

defineProps<{
  homepage: Homepage | null
  categories: CategoryI[] | null
}>()

const isShowMobileMenu = ref(false)
</script>
<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <NuxtLink class="navbar-brand" href="/">
        <NuxtImg
          format="webp"
          class="navbar-brand-item light-mode-item"
          src="/logo.png"
          alt="logo"
        />
        <NuxtImg
          format="webp"
          class="navbar-brand-item dark-mode-item"
          src="/logo.png"
          alt="logo"
        />
      </NuxtLink>

      <button
        type="button"
        class="navbar-toggler ms-auto"
        aria-expanded="false"
        data-bs-toggle="collapse"
        aria-label="Toggle navigation"
        aria-controls="navbarCollapse"
        data-bs-target="#navbarCollapse"
        @click="() => (isShowMobileMenu = !isShowMobileMenu)"
      >
        <span class="text-body h6 d-none d-sm-inline-block">Меню</span>
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        id="navbarCollapse"
        class="collapse navbar-collapse"
        :class="{
          show: isShowMobileMenu
        }"
      >
        <ul class="navbar-nav navbar-nav-scroll mx-auto" id="megaMenu">
          <li class="nav-item">
            <NuxtLink class="nav-link" href="/"> Головна </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" href="/all-posts"> Усі новини </NuxtLink>
          </li>
          <template v-for="category in categories" :key="category.id">
            <AppHeaderMainMenuSubItem
              :homepage="homepage"
              :category="category"
            />
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>
