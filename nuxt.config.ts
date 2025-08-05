// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image'
  ],
  image: {
    format: ['webp', 'avif', 'jpeg'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 40,
          height: 40,
        }
      },
      logo: {
        modifiers: {
          format: 'webp',
          width: 48,
          height: 48,
        }
      }
    }
  },
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  app: {
    head: {
      title: 'MyRecipes - Discover Delicious Recipes',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Discover delicious recipes from around the world. From quick weeknight dinners to impressive weekend feasts, we\'ve got you covered.' },
        { name: 'keywords', content: 'recipes, cooking, food, meals, cuisine, dishes, cooking tips, meal planning' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      ]
    }
  }
})