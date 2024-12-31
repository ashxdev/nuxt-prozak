<script setup lang="ts">
useSeoMeta({
  title: "Усі новини | Прозак - Інформаційний антидепресант",
  description: "Усі новини: Prozak.info - Інформаційний портал про Закарпаття",
  ogTitle: "Усі новини | Прозак - Інформаційний антидепресант",
  ogDescription: "Усі новини: Prozak.info - Інформаційний портал про Закарпаття"
})

const { data: posts } = useGetAllPost()
const { data: mainCategories } = useMainCategories()
</script>

<template>
  <section class="pt-4">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="border p-4 text-center rounded-3">
            <h1>Усі новини</h1>
            <nav class="d-flex justify-content-center" aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-dots m-0">
                <li class="breadcrumb-item">
                  <a href="/"> <i class="bi bi-house me-1"></i> Головна </a>
                </li>
                <li class="breadcrumb-item active">Усі новини</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="position-relative pt-0">
    <div class="container" data-sticky-container>
      <div class="row">
        <div class="col-lg-9">
          <template v-for="item in posts" :key="item.id">
            <PreviewCardPost :post="item" :partner="false" />
          </template>
          <button type="button" class="btn btn-primary-soft w-100">
            Завантажити ще
            <i class="bi bi-arrow-down-circle ms-2 align-middle"></i>
          </button>
        </div>

        <div class="col-lg-3 mt-5 mt-lg-0">
          <div data-sticky data-margin-top="80" data-sticky-for="767">
            <SideBarCategoryList :categories="mainCategories" />

            <div class="row">
              <div class="col-12 col-sm-6 col-lg-12 my-4">
                <AdsDLSRandom />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
