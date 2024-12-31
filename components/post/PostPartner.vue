<script setup lang="ts">
import { get } from "lodash-es"
import type { PostI } from "@/types"

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
                <NuxtLink href="/Novini-partneriv" class="badge mb-2">
                  <i class="bi bi-circle-fill me-2 small fw-bold"></i>
                  Новини партнерів
                </NuxtLink>
                <h2 class="text-white display-5">
                  {{ data.attributes.name }}
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
    <div class="container">
      <div class="row">
        <div class="col-12">
          <NuxtLink href="/Novini-partneriv" class="badge mb-2">
            <i class="bi bi-circle-fill me-2 small fw-bold"></i>
            Новини партнерів
          </NuxtLink>
          <span class="ms-2 small">
            {{
              dayjs(data.attributes.publish_date).format("MMMM DD YYYY,H:mm")
            }}
          </span>
          <h1>{{ data.attributes.name }}</h1>
        </div>
        <p class="lead" v-html="data?.attributes?.short_description"></p>
      </div>
    </div>
  </section>

  <section class="pt-0">
    <div class="container position-relative" data-sticky-container>
      <div class="row">
        <div class="col-lg-9 mb-5" v-html="data?.attributes?.description"></div>

        <div class="col-lg-3">
          <Adsbygoogle
            data-ad-format="auto"
            style="display: block"
            data-ad-slot="3536841823"
            data-full-width-responsive="true"
          />
          <PostPartnerRightSideBar />
        </div>
      </div>
    </div>
  </section>
</template>
