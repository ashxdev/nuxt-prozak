<script setup lang="ts">
useHead({
  title: "Прозак - Інформаційний антидепресант",
  meta: [
    {
      name: "description",
      content:
        "Prozak.info - Інформаційний портал про Закарпаття, новини Закарпаття, новини Ужгороду"
    },
    { property: "og:title", content: "Прозак - Інформаційний антидепресант" },
    {
      property: "og:description",
      content:
        "Prozak.info - Інформаційний портал про Закарпаття, новини Закарпаття, новини Ужгороду"
    }
  ]
})
</script>

<template>
  <MainTrendNews />

  <MainHero />

  <div class="container">
    <div class="border-bottom border-primary border-2 opacity-1"></div>
  </div>

  <Adsbygoogle :style="{ display: 'block' }" ad-slot="3536841823" />

  <MainContent />

  <div class="container">
    <div class="border-bottom border-primary border-2 opacity-1"></div>
  </div>

  <MainPostRowByCategory
    categorySlug="sport"
    title="Спортивні події України та світу"
  />
</template>
