<script setup lang="ts">
defineProps<{
  titleClass: string
}>()
</script>
<template>
  <Video
    src="https://minio-console.dance-line.studio/api/v1/buckets/dance-line-studio/objects/download?preview=true&prefix=videos%2Fbachata-lady-style.mp4&version_id=null"
  />
  <a target="_blank" class="text-white" href="https://dance-line.studio/"
    ><h2 :class="titleClass" class="h4">
      Бачата леді стайл - Dance Line Studio
    </h2></a
  >
  <a href="tel:095 086 9104" class="mt-10">Зателефонувати </a>
</template>
