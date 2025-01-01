<script setup lang="ts">
import type { CategoryI } from "~/types"

defineProps<{ categories: CategoryI[] | null }>()

const { getPostStyle } = usePostStyle()
</script>
<template>
  <div>
    <h4 class="mt-4 mb-3">Популярні категорії</h4>
    <template v-for="item in categories" :key="item.id">
      <div
        class="text-center mb-3 card-bg-scale position-relative overflow-hidden rounded bg-dark-overlay-4"
        :style="{
          backgroundImage:
            'url(' + getPostStyle(item?.attributes.slug).backgroundImage + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center left'
        }"
      >
        <div class="p-3">
          <NuxtLink
            :to="`/${item?.attributes.slug}`"
            class="stretched-link btn-link fw-bold text-white h5"
          >
            {{ item?.attributes.name }}
          </NuxtLink>
        </div>
      </div>
    </template>
  </div>
</template>
