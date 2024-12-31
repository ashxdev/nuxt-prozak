<script setup lang="ts">
const { data: mainTrendNews } = useMainTrendNews()
</script>
<template>
  <section class="py-2">
    <div class="container">
      <div class="row g-0">
        <div class="col-12 bg-primary-soft p-2 rounded">
          <div class="d-sm-flex align-items-center text-center text-sm-start">
            <div class="me-3">
              <span class="badge bg-primary p-2 px-3">Популярне:</span>
            </div>
            <div class="slider">
              <div class="slider--move">
                <template v-for="item in mainTrendNews">
                  <div class="slider--item">
                    <NuxtLink
                      :href="
                        '/' +
                        item?.attributes.category.data.attributes.slug +
                        '/' +
                        item?.attributes.slug
                      "
                      class="text-reset btn-link"
                      >{{ item?.attributes.name }}</NuxtLink
                    >
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slider {
  width: 100%;
  overflow: hidden;
}

.slider--move {
  top: 0;
  right: 0;
  display: flex;
  position: relative;
}

.slider--item {
  width: 100%;
  padding: 10px;
  flex-shrink: 0;
  box-sizing: border-box;
}

@keyframes slideh {
  0% {
    right: 0;
  }
  30% {
    right: 0;
  }
  33% {
    right: 100%;
  }
  63% {
    right: 100%;
  }
  66% {
    right: 200%;
  }
  97% {
    right: 200%;
  }
  100% {
    right: 0;
  }
}

.slider--move {
  animation: slideh linear 15s infinite;
}

.slider--move :hover {
  animation-play-state: paused;
}
</style>
