<script setup lang="ts">
defineProps<{
  src: string
  height?: number
  width?: number
}>()
</script>

<template>
  <video
    controls
    :height="height"
    :width="width"
    preload="metadata"
    class="cursor-pointer"
  >
    <source :src="src" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</template>
