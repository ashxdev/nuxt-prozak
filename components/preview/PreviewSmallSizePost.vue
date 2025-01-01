<script setup lang="ts">
import type { PostI } from "~/types"

defineProps<{ post: PostI }>()

const dayjs = useDayjs()
</script>

<template>
  <div
    class="card card-overlay-bottom card-grid-sm card-bg-scale"
    :style="{
      'background-size': 'cover',
      'background-position': 'center left',
      'background-image': `url(${post?.attributes.image?.data?.attributes?.url})`
    }"
  >
    <div class="card-img-overlay d-flex align-items-center p-3 p-sm-4">
      <div class="w-100 mt-auto">
        <NuxtLink
          :class="[
            'badge',
            post?.attributes.category.data?.attributes?.slug,
            'mb-2'
          ]"
          :href="
            '/' +
            post?.attributes.category.data?.attributes?.slug +
            '/' +
            post?.attributes?.slug
          "
        >
          <i class="bi bi-circle-fill me-2 small fw-bold"></i>
          {{ post?.attributes.category.data?.attributes?.name }}
        </NuxtLink>
        <h2 class="text-white h6">
          <NuxtLink
            class="btn-link stretched-link text-reset"
            :href="
              '/' +
              post?.attributes.category.data?.attributes?.slug +
              '/' +
              post?.attributes?.slug
            "
          >
            {{ post?.attributes?.name.slice(0, 75) + "..." }}
          </NuxtLink>
        </h2>
        <ul
          class="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block"
        >
          <li class="nav-item">
            {{ dayjs(post?.attributes.publish_date).format("H:mm | DD MMMM ") }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
