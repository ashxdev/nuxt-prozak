<script setup lang="ts">
import { get } from "lodash-es"
import type { PostI } from "~/types"

const props = defineProps<{
  partner: boolean
  post: PostI
}>()
const dayjs = useDayjs()
const categorySlug = props.partner
  ? "Novini-partneriv"
  : props.post?.attributes?.category?.data.attributes.slug

const categoryName = props.partner
  ? "Партенери"
  : props.post?.attributes?.category?.data.attributes.name

const getImageSrc = (item: PostI) =>
  get(
    item,
    "attributes.image.data.attributes.url",
    "/images/blog/1by1/thumb/01.jpg"
  )
</script>
<template>
  <div class="card">
    <div class="position-relative">
      <NuxtImg
        loading="lazy"
        format="webp"
        class="card-img"
        :src="getImageSrc(post)"
        :alt="post.attributes?.name"
      />
      <div class="card-img-overlay d-flex align-items-start flex-column p-3">
        <div class="w-100 mt-auto">
          <NuxtLink
            :class="['badge', categorySlug, 'mb-2']"
            :href="'/' + categorySlug + '/' + post?.attributes.slug"
          >
            <i class="bi bi-circle-fill me-2 small fw-bold"></i>
            {{ categoryName }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="card-body px-0 pt-3">
      <h2 class="card-title h5">
        <a
          class="btn-link text-reset fw-bold"
          :href="'/' + categorySlug + '/' + post?.attributes.slug"
        >
          {{ post.attributes.name }}
        </a>
      </h2>
      <p class="card-text">
        {{
          post.attributes.short_description
            ?.slice(0, 308)
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&amp;nbsp;/g, "")
            .replace(/<\/?[^>]+(>|$)/g, "")
        }}
        ...
      </p>
      <ul class="nav nav-divider align-items-center d-none d-sm-inline-block">
        <li class="nav-item">
          {{ dayjs(post?.attributes.publish_date).format("H:mm | DD MMMM ") }}
        </li>
      </ul>
    </div>
  </div>
</template>
