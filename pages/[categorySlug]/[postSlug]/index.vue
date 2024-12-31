<script setup lang="ts">
const route = useRoute()

const { data } = useGetPostData(route.params.postSlug as string)

useSeoMeta({
  title: () => data.value?.post?.attributes?.name + " - Прозак",
  description: () => data.value?.post?.attributes?.short_description,
  ogTitle: () => data.value?.post?.attributes?.name,
  ogDescription: () => data.value?.post?.attributes?.short_description,
  ogImage: () =>
    data.value?.post?.attributes?.image?.data?.attributes?.url || null,
  ogType: "website",
  ogSiteName: "PROZAK.INFO",
  ogUrl: `${import.meta.env.VITE_URL}/${route.params.categorySlug}/${
    route.params.postSlug
  }`
})
</script>

<template>
  <Post v-if="!data?.legacyPost" :post="data?.post" />
  <PostLegacy v-else :data="data?.post" />
</template>
