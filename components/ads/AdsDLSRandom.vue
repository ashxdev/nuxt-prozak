<script setup lang="ts">
import { AdsDLSHipHop } from "#components"
import { AdsDLSHighHeels } from "#components"
import { AdsDLSContemporary } from "#components"
import { AdsDLSBachataCouple } from "#components"
import { AdsDLSBachataLadyStyle } from "#components"

const components = [
  AdsDLSBachataCouple,
  AdsDLSBachataLadyStyle,
  AdsDLSContemporary,
  AdsDLSHighHeels,
  AdsDLSHipHop
]
const randomAds = Math.floor(Math.random() * 5)
const RandomComponent = components[randomAds]
</script>
<template>
  <component :is="RandomComponent" />
</template>
