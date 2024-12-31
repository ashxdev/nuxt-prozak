<script setup lang="ts">
const route = useRoute()
const categorySlug = route.params.categorySlug as string

const { data: posts } = useGetCategoryPosts(categorySlug)
const { data: category } = useGetCategoryData(categorySlug)
const { data: categories } = useGetRestOfCategories(categorySlug)

const categoryName = computed(
  () => category.value?.attributes?.name || "Категорія"
)
const categoryDescription = computed(
  () => category.value?.attributes?.short_description || ""
)

useSeoMeta({
  title: categoryName.value + "- Прозак",
  description: categoryDescription.value,
  ogTitle: categoryName.value + "- Прозак",
  ogDescription: categoryDescription.value
})
</script>

<template>
  <Category
    :partner="false"
    :posts="posts"
    :category="category"
    :categories="categories"
    :categorySlug="categorySlug"
  />
</template>
