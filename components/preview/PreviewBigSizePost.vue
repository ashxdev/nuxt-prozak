<script setup lang="ts">
import type { PostI } from "~/types"

const props = defineProps<{
  post: PostI
}>()
const dayjs = useDayjs()
</script>
<template>
  <div
    class="card card-overlay-bottom card-grid-lg card-bg-scale"
    :style="{
      backgroundSize: 'cover',
      backgroundPosition: 'center left',
      backgroundImage:
        'url(' + post.attributes.image?.data?.attributes?.url + ')'
    }"
  >
    <span class="card-featured" title="Featured post">
      <i class="bi bi-star-fill"></i>
    </span>
    <div class="card-img-overlay d-flex align-items-center p-3 p-sm-4">
      <div class="w-100 mt-auto">
        {{ post.attributes.name }}
        <NuxtLink
          :class="[
            'badge',
            post.attributes?.category?.data?.attributes.slug,
            'mb-2'
          ]"
          :href="
            '/' +
            post.attributes?.category?.data?.attributes.slug +
            '/' +
            props.post.attributes.slug
          "
        >
          <i class="bi bi-circle-fill me-2 small fw-bold"></i>
          {{ post.attributes?.category?.data?.attributes?.name }}
        </NuxtLink>
        <h1 class="text-white h1">
          <NuxtLink
            class="btn-link stretched-link text-reset"
            :href="
              '/' +
              post.attributes?.category?.data?.attributes.slug +
              '/' +
              props.post.attributes.slug
            "
          >
            {{ props.post.attributes.name }}
          </NuxtLink>
        </h1>
        <p class="text-white">{{ post.attributes.short_description }}</p>
        <ul
          class="nav nav-divider text-white-force align-items-center d-none d-sm-inline-block"
        >
          <li class="nav-item">
            {{
              dayjs(props.post.attributes.publish_date).format(
                "H:mm | DD MMMM "
              )
            }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
