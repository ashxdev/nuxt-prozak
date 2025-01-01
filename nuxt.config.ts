// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      htmlAttrs: {
        lang: 'ua',
      },
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
    '@nuxtjs/html-validator',
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
  htmlValidator: {
    usePrettier: false,
    logLevel: 'verbose',
    failOnError: true,
    /** A list of routes to ignore (that is, not check validity for). */
    ignore: [/\.(xml|rss|json)$/],
    options: {
      extends: [
        'html-validate:document',
        'html-validate:recommended',
        'html-validate:standard'
      ],
      rules: {
        'svg-focusable': 'off',
        'no-unknown-elements': 'error',
        // Conflicts or not needed as we use prettier formatting
        'void-style': 'off',
        'no-trailing-whitespace': 'off',
        // Conflict with Nuxt defaults
        'require-sri': 'off',
        'attribute-boolean-style': 'off',
        'doctype-style': 'off',
        // Unreasonable rule
        'no-inline-style': 'off'
      }
    }
  }

})