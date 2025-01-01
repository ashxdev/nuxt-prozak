<script setup lang="ts">
import type { PostI } from "~/types"
import { get } from "lodash-es"

const props = defineProps<{
  data: PostI
}>()

const dayjs = useDayjs()
const getImageSrc = () =>
  get(
    props.data,
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
                <h1 class="text-white display-5">
                  {{ data?.attributes?.name }}
                </h1>
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
          <span class="ms-2 small">
            {{
              dayjs(data?.attributes?.publish_date).format("MMMM DD YYYY,H:mm")
            }}
          </span>
          <h2>{{ data?.attributes?.name }}</h2>

          <p class="card-text">
            {{
              data?.attributes?.short_description
                ?.replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">")
                .replace(/&amp;nbsp;/g, "")
                .replace(/<\/?[^>]+(>|$)/g, "")
            }}
          </p>

          <div v-html="data?.attributes?.description"></div>
        </div>

        <div class="col-lg-3"></div>
      </div>
    </div>
  </section>
</template>
