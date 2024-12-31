<script setup lang="ts">
useHead({
  title: "Новини партнерів - Прозак",
  meta: [
    {
      name: "description",
      content: "Prozak.info - Новини партнерів"
    }
  ]
})

const { data: categories } = useCategories()
const { data: posts } = usePartnerPosts({ pageSize: 30 })

const category = {
  id: 308,
  attributes: {
    name: "Новини партнерів",
    slug: "partner",
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
    description: "",
    short_description: ""
  }
}
</script>

<template>
  <Category
    partner
    :posts="posts"
    :category="category"
    :categories="categories"
  />
</template>
