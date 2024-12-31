<script setup lang="ts">
import type { CategoryI } from "@/types"

defineProps<{
  categories: CategoryI[] | null
}>()
</script>
<template>
  <div class="row g-2">
    <h5>Інші категорії</h5>
    <template v-for="item in categories" :key="item.id">
      <div
        :class="[
          'd-flex justify-content-between align-items-center  rounded p-2 position-relative mb-2',
          item.attributes.slug
        ]"
      >
        <h6 class="m-0 text-white">{{ item.attributes.name }}</h6>
        <NuxtLink
          :href="`/${item.attributes.slug}`"
          :class="['text-dark stretched-link mb-2', item.attributes.slug]"
        ></NuxtLink>
      </div>
    </template>
  </div>
</template>
