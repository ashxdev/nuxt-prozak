<script setup lang="ts">
import type { CategoryI, Homepage } from "~/types"

defineProps<{
  homepage: Homepage | null
  categories: CategoryI[] | null
}>()

const { data: recentPosts } = useGetRecentPosts()
</script>

<template>
  <footer class="bg-dark pt-5">
    <div class="container">
      <div class="row pt-5">
        <AppFooterRecentPost :posts="recentPosts" />

        <AppFooterNavigation :categories="categories" />

        <div class="col-sm-6 col-lg-3 mb-4">
          <AdsDLSBachataLadyStyle titleClass="text-white" />
        </div>
      </div>

      <AppFooterHotTopics />
    </div>

    <AppFooterCopyright />
  </footer>
</template>
