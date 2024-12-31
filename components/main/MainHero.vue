<script setup lang="ts">
const { data: topPosts } = useTopPosts()
</script>

<template>
  <section v-if="topPosts?.length" class="pt-2 pb-0 card-grid">
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-6">
          <PreviewBigSizePost :post="topPosts[0]" />
        </div>
        <div class="col-lg-6">
          <div class="row g-4">
            <div class="col-12">
              <PreviewMidSizePost :post="topPosts[1]" />
            </div>
            <div class="col-md-6">
              <PreviewSmallSizePost :post="topPosts[2]" />
            </div>
            <div class="col-md-6">
              <PreviewSmallSizePost :post="topPosts[3]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
