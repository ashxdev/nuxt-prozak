<script setup lang="ts">
const { data: socialPosts } = useSocialPosts()
const { data: partnerPosts } = usePartnerPosts()
const { data: mainCategories } = useMainCategories()
</script>

<template>
  <section class="position-relative">
    <div class="container" data-sticky-container>
      <div class="row">
        <div class="col-lg-9">
          <div class="mb-4">
            <h1 class="m-0"><i class="bi bi-people me-2"></i>Суспільство</h1>
            <p>Останні новини, рисунки, відео і чутки</p>
          </div>
          <div class="row gy-4">
            <template v-for="item in socialPosts" :key="item.id">
              <div class="col-sm-6">
                <PreviewMidSquareSizePost :partner="false" :post="item" />
              </div>
            </template>
          </div>
        </div>
        <div class="col-lg-3 mt-5 mt-lg-0">
          <div data-sticky data-margin-top="80" data-sticky-for="767">
            <div class="row g-2">
              <div class="col-4">
                <a
                  href="https://www.facebook.com/prozak.info"
                  target="_blank"
                  class="bg-facebook rounded text-center text-white-force p-2 d-block"
                >
                  <i class="bi bi-facebook fs-5 mb-2"></i>
                  <span class="small">Facebook</span>
                </a>
              </div>
              <div class="col-4">
                <a
                  href="/"
                  target="_blank"
                  class="bg-instagram-gradient rounded text-center text-white-force p-2 d-block"
                >
                  <i class="bi bi-instagram fs-5 mb-2"></i>
                  <span class="small">Instagram</span>
                </a>
              </div>
              <div class="col-4">
                <a
                  href="https://www.youtube.com/@prozakinfo2090/videos"
                  target="_blank"
                  class="bg-youtube rounded text-center text-white-force p-2 d-block"
                >
                  <i class="bi bi-youtube fs-5 mb-2"></i>
                  <span class="small">Youtube</span>
                </a>
              </div>
            </div>

            <SideBarCategoryList :categories="mainCategories" />
            <PostPartnerList :partnerPosts="partnerPosts" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
