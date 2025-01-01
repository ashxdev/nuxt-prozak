<script setup lang="ts">
import type { CategoryI } from "~/types"

defineProps<{
  categories: CategoryI[] | null
}>()
</script>
<template>
  <div class="col-md-6 col-lg-3 mb-4">
    <h5 class="mb-4 text-white">Навігація</h5>
    <div class="row">
      <div class="col-6">
        <ul class="nav flex-column text-primary-hover">
          <li class="nav-item">
            <NuxtLink class="nav-link pt-0" href="/">Головна</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" href="/all-posts">Усі новини</NuxtLink>
          </li>

          <template v-for="item in categories" :key="item.id">
            <li class="nav-item">
              <NuxtLink class="nav-link" :to="'/' + item.attributes.slug">
                {{ item.attributes.name }}
              </NuxtLink>
            </li>
          </template>
        </ul>
      </div>
      <div class="col-6 d-none">
        <ul class="nav flex-column text-primary-hover">
          <li class="nav-item">
            <a class="nav-link pt-0" href="#"> Теги </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Career <span class="badge bg-danger ms-2">2 Job</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"> Technology </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"> Startups </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"> Gadgets </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"> Inspiration </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
