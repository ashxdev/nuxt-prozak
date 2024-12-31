<script setup lang="ts">
const props = defineProps<{
  categorySlug: string
  title: string
}>()

const { data: posts } = usePostsByCategorySlug(props.categorySlug)
</script>

<template>
  <PostRows :posts="posts" :title="title" :categorySlug="categorySlug" />
</template>
