<script setup lang="ts">
import type { PostI } from "~/types"

defineProps<{ post: PostI }>()
</script>
<template>
  <div class="card pe-3">
    <div class="position-relative">
      <NuxtImg
        loading="lazy"
        format="webp"
        class="card-img"
        alt="Card image"
        :src="post?.attributes?.image?.data?.attributes?.url"
      />
      <div class="card-img-overlay d-flex align-items-start flex-column p-3">
        <div class="w-100 mb-auto d-flex justify-content-end"></div>
        <div class="w-100 mt-auto">
          <NuxtLink
            :class="[
              'badge',
              post.attributes.category?.data.attributes.slug,
              'mb-2'
            ]"
            :href="
              '/' +
              post?.attributes.category?.data.attributes.slug +
              '/' +
              post?.attributes.slug
            "
          >
            <i class="bi bi-circle-fill me-2 small fw-bold"></i>
            {{ post?.attributes.category?.data.attributes.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="card-body px-0 pt-3">
      <h3 class="card-title h6">
        <NuxtLink
          class="btn-link text-reset fw-bold"
          :href="
            '/' +
            post?.attributes.category?.data.attributes.slug +
            '/' +
            post?.attributes.slug
          "
        >
          {{ post?.attributes.name }}
        </NuxtLink>
      </h3>
    </div>
  </div>
</template>
