<script setup lang="ts">
import type { CategoryI } from "@/types"

defineProps<{
  categorySlug: string
  categories: CategoryI[] | null
}>()
</script>

<template>
  <div data-sticky data-margin-top="80" data-sticky-for="767">
    <CategorySideBarList :categories="categories" />
    <div class="col-12 col-sm-6 col-lg-12 my-4">
      <AdsDLSRandom />

      <div class="text-end mt-2">
        <NuxtLink href="/all-posts" class="text-muted">
          <u>Усі новини</u>
        </NuxtLink>
      </div>

      <div class="col-12 col-sm-6 col-lg-12 my-4">
        <Adsbygoogle
          style="display: block"
          ad-slot="3881119466"
          ad-format="auto"
          full-width-responsive="true"
        />
      </div>
    </div>
  </div>
</template>
