<script setup lang="ts">
import type { PostI, CategoryI, Homepage } from "~/types"

const props = defineProps<{
  homepage: Homepage | null
  category?: CategoryI
}>()

const dayjs = useDayjs()
const strapi = useStrapi()
const posts = ref<PostI[]>([])
const loading = ref(false)

const query = {
  filters: {
    category: {
      slug: {
        $eq: props.category?.attributes?.slug
      }
    }
  },
  pagination: {
    page: 1,
    pageSize: 4
  },
  sort: ["publish_date:desc"],
  populate: ["image", "category"]
}

const fetchPosts = async () => {
  if (posts.value.length) return
  loading.value = true
  try {
    const result = await strapi.find("posts", query)
    posts.value = (result?.data as PostI[]) || []
  } catch (error) {
    console.error("Failed to fetch posts:", error)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <li class="nav-item dropdown dropdown-fullwidth">
    <a
      class="nav-link dropdown-toggle"
      :href="'/' + props.category?.attributes?.slug"
      @mouseenter="fetchPosts"
    >
      {{ props.category?.attributes.name }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="ps-1 bi bi-chevron-down d-none d-lg-inline"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </a>

    <div class="dropdown-menu" aria-labelledby="megaMenu">
      <div class="container">
        <div class="row g-4 p-3 flex-fill">
          <template v-if="posts.length">
            <div
              v-for="(item, index) in posts"
              :key="item.id"
              class="col-sm-6 col-lg-3"
            >
              <div class="card bg-transparent">
                <NuxtLink
                  class="text-reset btn-link"
                  :href="
                    '/' +
                    props.category?.attributes?.slug +
                    '/' +
                    item.attributes.slug
                  "
                >
                  <NuxtImg
                    format="webp"
                    style="height: 141px"
                    class="card-img rounded"
                    :src="
                      item.attributes?.image?.data?.attributes?.formats
                        ?.thumbnail?.url ||
                      '/images/blog/4by3/thumb/0' + index + 1 + '.jpg'
                    "
                    :alt="item.attributes?.image?.data?.attributes?.name"
                  />
                </NuxtLink>
                <div class="card-body px-0 pt-3">
                  <h6 class="card-title mb-0">
                    <NuxtLink
                      class="btn-link text-reset fw-bold"
                      :href="
                        '/' +
                        props.category?.attributes?.slug +
                        '/' +
                        item.attributes.slug
                      "
                    >
                      {{ item.attributes?.name }}
                    </NuxtLink>
                  </h6>
                  <ul
                    class="nav nav-divider align-items-center text-uppercase small mt-2"
                  >
                    <li class="nav-item">
                      <NuxtLink
                        class="text-reset btn-link"
                        :href="
                          '/' +
                          props.category?.attributes?.slug +
                          '/' +
                          item.attributes.slug
                        "
                      >
                        {{
                          dayjs(item.attributes.publish_date).format(
                            "H:mm | DD MMMM "
                          )
                        }}
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <div>No news there</div>
          </template>

          <div
            class="col-sm-6 col-lg-3"
            v-html="props.homepage?.attributes?.header_menu_add?.html"
          ></div>
        </div>
      </div>
    </div>
  </li>
</template>
