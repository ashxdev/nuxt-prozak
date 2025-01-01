<script setup lang="ts">
import { get } from "lodash-es"
import type { PostI } from "~/types"

defineProps<{
  partnerPosts: PostI[] | null
}>()

const dayjs = useDayjs()

const getImageSrc = (item: PostI) =>
  get(
    item,
    "attributes.image.data.attributes.url",
    "/images/blog/1by1/thumb/01.jpg"
  )
</script>
<template>
  <div class="row">
    <div class="col-12 col-sm-6 col-lg-12">
      <h4 class="mt-4 mb-3">
        <NuxtLink href="/Novini-partneriv" class="btn-link text-reset fw-bold">
          Новини партнерів
        </NuxtLink>
      </h4>
      <template v-for="item in partnerPosts" :key="item.id">
        <div class="card mb-3">
          <div class="row g-3">
            <div class="col-4">
              <NuxtImg
                loading="lazy"
                format="webp"
                class="rounded"
                :src="getImageSrc(item)"
                :alt="item.attributes.name"
              />
            </div>
            <div class="col-8">
              <h6>
                <NuxtLink
                  :href="'/Novini-partneriv/' + item.attributes.slug"
                  class="btn-link stretched-link text-reset fw-bold"
                >
                  {{ item?.attributes.name }}
                </NuxtLink>
              </h6>
              <div class="small mt-1">
                {{
                  dayjs(item.attributes.publish_date).format("H:mm | DD MMMM ")
                }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>

    <div class="col-12 col-sm-6 col-lg-12 my-4">
      <AdsDLSRandom />
    </div>
    <div class="col-12 col-sm-6 col-lg-12 my-4">
      <Adsbygoogle :style="{ display: 'block' }" ad-slot="3881119466" />
    </div>
  </div>
</template>
