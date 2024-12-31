// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  experimental: {
    asyncContext: true
  },
  pages: true,
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        'Nunito+Sans': [400, 700],
        Rubik: [400, 500, 700],
      },
      display: 'swap',
      preload: true,
    }],
    ['@nuxtjs/strapi', {
      url: process.env.VITE_STRAPI_PUBLIC_URL || 'http://localhost:1337',
      version: 'v4',
      cookie: {},
    }],
    '@nuxtjs/strapi',
    '@nuxt/image',
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-3297522505307737',
      adFormats: ['auto'],
    }]
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/custom.css', '~/assets/css/bootstrap-icons/bootstrap-icons.css'],

})