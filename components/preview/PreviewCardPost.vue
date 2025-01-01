<script setup lang="ts">
import type { PostI } from "~/types"
defineProps<{
  post: PostI | null
}>()
const dayjs = useDayjs()
</script>
<template>
  <div class="card mb-4">
    <div class="row">
      <div class="col-md-5">
        <NuxtImg
          loading="lazy"
          format="webp"
          class="rounded-3"
          :alt="post?.attributes.name"
          :src="post?.attributes.image?.data?.attributes?.url"
        />
      </div>
      <div class="col-md-7 mt-3 mt-md-0">
        <div class="flex">
          <NuxtLink
            :class="[
              'badge',
              post?.attributes.category.data?.attributes.slug,
              'mb-2 me-2'
            ]"
            :href="
              '/' +
              post?.attributes.category?.data?.attributes?.slug +
              '/' +
              post?.attributes.slug
            "
          >
            <i class="bi bi-circle-fill me-2 small fw-bold"></i>
            {{ post?.attributes.category?.data?.attributes?.name }}
          </NuxtLink>
          <span>
            {{ dayjs(post?.attributes.publish_date).format("H:mm | DD MMMM ") }}
          </span>
        </div>
        <h3>
          <NuxtLink
            class="btn-link stretched-link text-reset"
            :href="
              '/' +
              post?.attributes.category?.data?.attributes?.slug +
              '/' +
              post?.attributes.slug
            "
          >
            {{ post?.attributes.name }}
          </NuxtLink>
        </h3>
        <p>{{ post?.attributes.short_description }}</p>
      </div>
    </div>
  </div>
</template>
