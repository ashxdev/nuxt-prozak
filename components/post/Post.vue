<script setup lang="ts">
import { get } from "lodash-es"
import type { PostI } from "@/types"

const props = defineProps<{
  post: PostI
}>()

const dayjs = useDayjs()

const getImageSrc = () =>
  get(
    props.post,
    "attributes.image.data.attributes.url",
    "/img/entertrainment/enter1.jpg"
  )
</script>

<template>
  <section class="pt-2 pb-0">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div
            class="card bg-dark-overlay-5 overflow-hidden card-bg-scale h-300 text-center"
            :style="{
              backgroundSize: 'cover',
              backgroundPosition: 'center left',
              backgroundImage: 'url(' + getImageSrc() + ')'
            }"
          >
            <div class="card-img-overlay d-flex align-items-center p-3 p-sm-4">
              <div class="w-100 my-auto">
                <NuxtLink
                  :href="'/' + post.attributes.category.data.attributes.slug"
                  :class="[
                    post.attributes.category.data.attributes.slug,
                    'badge  mb-2'
                  ]"
                >
                  <i class="bi bi-circle-fill me-2 small fw-bold"></i>
                  {{ post.attributes.category.data.attributes.name }}
                </NuxtLink>
                <h2 class="text-white display-5">
                  {{ post.attributes.name }}
                </h2>
                <ul
                  class="nav nav-divider text-white-force align-items-center justify-content-center"
                >
                  <li class="nav-item">
                    <div class="nav-link">
                      <div
                        class="d-flex align-items-center text-white position-relative"
                      ></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="pb-1 pb-lg-5">
    <div class="container position-relative">
      <div class="row">
        <div class="col-lg-9">
          <NuxtLink
            :href="post.attributes.category.data.attributes.slug"
            :class="[
              post.attributes.category.data.attributes.slug,
              'badge  mb-2'
            ]"
          >
            <i class="bi bi-circle-fill me-2 small fw-bold"></i>
            {{ post.attributes.category.data.attributes.name }}
          </NuxtLink>
          <span class="ms-2 small">
            {{
              dayjs(post.attributes.publish_date).format("MMMM DD YYYY,H:mm")
            }}
          </span>
          <h1>{{ post.attributes.name }}</h1>

          <p class="lead" v-html="post.attributes?.short_description"></p>

          <div v-html="post.attributes?.description"></div>
          <Adsbygoogle
            style="display: block"
            data-ad-format="auto"
            data-ad-slot="3536841823"
          />
        </div>

        <div class="col-lg-3">
          <PostRightSideBar />
        </div>
      </div>
    </div>
  </section>
</template>
