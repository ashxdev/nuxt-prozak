<script setup lang="ts">
const route = useRoute()

const { data } = usePartnerPost(route.params.postSlug as string)
useSeoMeta({
  title: `${data?.value?.attributes?.name} - Прозак`
  /* meta: [
      { content: data?.attributes?.short_description || '', name: "description" },
      {
        property: 'og:title',
        content: data?.attributes?.name,
      },
      {
        property: 'og:description',
        content: data?.attributes?.short_description,
      },
      {
        property: 'og:image',
        content: data?.attributes.image?.data?.attributes.url,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:site_name',
        content: 'PROZAK.INFO',
      },
      {
        property: 'og:url',
        content: `${import.meta.env.VITE_SITE_URL}/Novini-partneriv/${params.postSlug}`,
      },
    ] */
})
</script>

<template>
  <PostPartner :data="data" />
</template>
