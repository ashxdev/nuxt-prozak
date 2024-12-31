<script setup lang="ts">
import type { PostI, CategoryI } from "@/types"

const props = defineProps<{
  partner: boolean
  categorySlug: string
  posts: PostI[] | null
  category: CategoryI | null
  categories: CategoryI[] | null
}>()
const { postStyle } = usePostStyle(props.categorySlug)
</script>
<template>
  <section class="pt-4">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div
            class="card bg-dark-overlay-4 overflow-hidden card-bg-scale h-300 text-center"
            :style="{
              backgroundSize: 'cover',
              backgroundPosition: 'center left',
              backgroundImage: 'url(' + postStyle.backgroundImage + ')'
            }"
          >
            <div class="card-img-overlay d-flex align-items-center p-3 p-sm-4">
              <div class="w-100 my-auto">
                <div class="text-white mb-3">Новини у категорії:</div>
                <h1 class="text-white h2">
                  <span :class="['badge', categorySlug, 'mb-2']">
                    <i class="bi bi-circle-fill me-2 small fw-bold"></i>
                    {{ category?.attributes?.name }}
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="position-relative pt-0">
    <div class="container" data-sticky-container>
      <div class="row">
        <div class="col-lg-9">
          <div class="row gy-4">
            <template v-for="item in posts" :key="item.id">
              <div class="col-sm-6">
                <PreviewMidSquareSizePost :post="item" :partner="partner" />
              </div>
            </template>

            <div style="display: none" class="col-12 text-center mt-5">
              <nav
                class="mb-5 d-flex justify-content-center"
                aria-label="navigation"
              >
                <ul class="pagination pagination-bordered">
                  <li class="page-item disabled">
                    <a
                      class="page-link"
                      href="#"
                      tabIndex="{-1}"
                      aria-disabled="true"
                    >
                      Попередня
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#"> 1 </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="#"> 2 </a>
                  </li>
                  <li class="page-item disabled">
                    <a class="page-link" href="#"> .. </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#"> 15 </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#"> Наступна </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div class="col-lg-3 mt-5 mt-lg-0">
          <CategorySideBar
            :categories="categories"
            :categorySlug="categorySlug"
          />
        </div>
      </div>
    </div>
  </section>
</template>
