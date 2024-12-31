<script setup lang="ts">
const { data } = useAboutPage()

useHead({
  title: "Про нас - Прозак",
  meta: [
    {
      name: "description",
      content: "Prozak.info - Інформаційний портал про Закарпаття"
    },
    { property: "og:title", content: "Про нас - Прозак" },
    {
      property: "og:description",
      content: "Prozak.info - Інформаційний портал про Закарпаття"
    }
  ]
})
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
              backgroundImage: 'url(/images/blog/16by9/09.jpg)',
              backgroundPosition: 'center left'
            }"
          >
            <div class="card-img-overlay d-flex align-items-center p-3 p-sm-4">
              <div class="w-100 my-auto">
                <h1 class="text-white display-4">Про нас</h1>
                <nav
                  class="d-flex justify-content-center"
                  aria-label="breadcrumb"
                >
                  <ol class="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                    <li class="breadcrumb-item">
                      <NuxtLink href="/">
                        <i class="bi bi-house me-1"></i> Головна
                      </NuxtLink>
                    </li>
                    <li class="breadcrumb-item active">Про нас</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="pt-4 pb-0">
    <div class="container">
      <div class="row">
        <div
          v-html="data?.attributes?.description"
          class="col-xl-9 mx-auto"
        ></div>
      </div>
    </div>
  </section>
</template>
