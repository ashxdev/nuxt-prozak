<script setup lang="ts">
import type { PostI } from "~/types"

defineProps<{
  posts: PostI[] | null
}>()

const dayjs = useDayjs()
</script>
<template>
  <div class="col-md-6 col-lg-3 mb-4">
    <h5 class="mb-4 text-white">Останні новини</h5>
    <template v-for="item in posts" :key="item.id">
      <div class="mb-4 position-relative">
        <div>
          <NuxtLink
            :href="'/' + item.attributes.category.data?.attributes.slug"
            :class="`badge mb-2 ${item.attributes.category.data?.attributes.slug}`"
          >
            <i class="bi bi-circle-fill me-2 small fw-bold"></i>
            {{ item.attributes.category.data?.attributes?.name }}
          </NuxtLink>
        </div>
        <NuxtLink
          :href="
            '/' +
            item.attributes.category.data?.attributes.slug +
            '/' +
            item.attributes.slug
          "
          class="btn-link text-white fw-normal"
        >
          {{ item.attributes?.name }}
        </NuxtLink>
        <ul class="nav nav-divider align-items-center small mt-2 text-muted">
          <li class="nav-item">
            {{ dayjs(item.attributes?.publish_date).format("H:mm | DD MMMM ") }}
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>
