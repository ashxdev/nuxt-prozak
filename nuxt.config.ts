// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      meta: [
        {
          name: "google-adsense-account",
          content: "ca-pub-3297522505307737",
        },
      ],
    },
  },
  experimental: {
    asyncContext: true
  },
  pages: true,
  routeRules: {
    '/rss/feed/articles': { redirect: '/rss' },
  },
  runtimeConfig: {
    strapi: {
      url: process.env.NUXT_STRAPI_DOCKER_URL || 'http://localhost:1337'
    },
    public: {
      strapi: {
        url: process.env.NUXT_STRAPI_PUBLIC_URL || 'http://localhost:1337'
      }
    }
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/strapi',
    '@nuxt/image',
    '@nuxtjs/google-adsense',
  ],
  strapi: {
    version: 'v4',
    cookie: {},
  },
  googleAdsense: {
    id: 'ca-pub-3297522505307737',
    adFormat: 'auto',
    test: process.env.NODE_ENV === 'development',
  },
  googleFonts: {
    families: {
      'Nunito+Sans': [400, 700],
      Rubik: [400, 500, 700],
    },
    display: 'swap',
    preload: true,
  },
  devtools: { enabled: true },
  css: ['~/assets/css/custom.css', '~/assets/css/bootstrap-icons/bootstrap-icons.css'],

})