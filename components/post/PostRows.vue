<script setup lang="ts">
import type { PostI } from "~/types"
defineProps<{
  posts: PostI[] | null
  title: string
  categorySlug: string
}>()
</script>
<template>
  <section class="pt-4">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div
            class="mb-4 d-md-flex justify-content-between align-items-center"
          >
            <h2 class="m-0">
              <i class="bi bi-megaphone"></i>&nbsp; {{ title }}
            </h2>
            <NuxtLink :href="categorySlug" class="text-body small">
              <u>Всі новини: {{ title }}</u>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="row">
        <template v-for="item in posts" :key="item.id">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <PreviewXsSizePost :post="item" />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
