<script setup lang="ts">
const dayjs = useDayjs()
const isDarkTheme = ref(false)
const currentTime = ref("")
onMounted(() => {
  currentTime.value = dayjs().format(" DD MMMM YYYY, H:mm")
})

const changeZooming = (fontSize: string) => {
  const doc = document.documentElement

  if (fontSize == "font-sm") {
    doc.classList.remove("font-lg")
    doc.classList.add("font-sm")
  } else if (fontSize == "font-default") {
    doc.classList.remove("font-sm", "font-lg")
  } else {
    doc.classList.remove("font-sm")
    doc.classList.add("font-lg")
  }
}

const changeThemeMode = () => {
  const theme = localStorage.getItem("data-theme")
  const style = document.getElementById("style-switch")

  if (!style) return

  const changeThemeToDark = () => {
    isDarkTheme.value = true
    localStorage.setItem("data-theme", "dark")
    style.setAttribute("href", "/css/style-dark.css")
    document.documentElement.setAttribute("data-theme", "dark")
  }

  const changeThemeToLight = () => {
    isDarkTheme.value = false
    localStorage.setItem("data-theme", "light")
    style.setAttribute("href", "/css/style.css")
    document.documentElement.setAttribute("data-theme", "light")
  }

  if (theme !== "dark") {
    changeThemeToDark()
  } else {
    changeThemeToLight()
  }
}
</script>
<template>
  <div class="navbar-top d-none d-lg-block small">
    <div class="container">
      <div class="d-md-flex justify-content-between align-items-center my-2">
        <ul class="nav">
          <li class="nav-item">
            <NuxtLink class="nav-link" href="/contact-us">Контакти</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link ps-0" href="/about-us">
              Про нас
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" href="/advertisement">
              Реклама
            </NuxtLink>
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <div
            class="btn-group me-2"
            role="group"
            aria-label="font size changer"
          >
            <input
              type="radio"
              class="btn-check"
              name="fntradio"
              id="font-sm"
              @click="changeZooming('font-sm')"
            />
            <label class="btn btn-xs btn-outline-primary mb-0" for="font-sm">
              A-
            </label>

            <input
              type="radio"
              class="btn-check"
              name="fntradio"
              id="font-default"
              @click="changeZooming('font-default')"
              checked
            />
            <label
              class="btn btn-xs btn-outline-primary mb-0"
              for="font-default"
            >
              A
            </label>

            <input
              type="radio"
              class="btn-check"
              name="fntradio"
              id="font-lg"
              @click="changeZooming('font-lg')"
            />
            <label class="btn btn-xs btn-outline-primary mb-0" for="font-lg">
              A+
            </label>
          </div>

          <div class="modeswitch" id="darkModeSwitch" @click="changeThemeMode">
            <div class="switch">
              <i
                :class="[
                  isDarkTheme ? 'bi bi-moon-fill' : 'bi bi-brightness-high'
                ]"
              ></i>
            </div>
          </div>

          <ul class="nav">
            <li class="nav-item">
              <a
                target="_blank"
                class="nav-link px-2 fs-5"
                href="https://www.facebook.com/prozak.info"
                >facebook
                <i class="bi bi-facebook"></i>
              </a>
            </li>

            <li class="nav-item">
              <a
                target="_blank"
                class="nav-link px-2 fs-5"
                href="https://www.youtube.com/channel/UCpDjC8hLsxO-AdW7neBV0yg"
              >
                youtube
                <i class="bi bi-youtube"></i>
              </a>
            </li>
          </ul>

          <div class="ms-2">{{ currentTime }}</div>
        </div>
      </div>
      <div class="border-bottom border-2 border-primary opacity-1"></div>
    </div>
  </div>
</template>
