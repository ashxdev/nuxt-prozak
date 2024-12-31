<script setup lang="ts">
const isShowSearch = ref(false)
</script>
<template>
  <div class="nav flex-nowrap align-items-center">
    <div class="nav-item dropdown dropdown-toggle-icon-none nav-search">
      <a
        @click="isShowSearch = !isShowSearch"
        class="nav-link dropdown-toggle"
        role="button"
        href="#"
        id="navSearch"
        aria-expanded="false"
        data-bs-toggle="dropdown"
      >
        <i class="bi bi-search fs-4"> </i>
      </a>
      <div
        class="dropdown-menu dropdown-menu-end shadow rounded p-2"
        :class="{
          show: isShowSearch
        }"
        aria-labelledby="navSearch"
      >
        <form class="input-group">
          <input
            class="form-control border-success"
            type="search"
            aria-label="Search"
            placeholder="Search"
          />
          <button class="btn btn-success m-0" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</template>
