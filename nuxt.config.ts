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
  googleFonts: {
    families: {
      Montserrat: true,
    },
  },
  app: {
    head: {
      title: 'My Recipe - Resep Masakan Indonesia',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Aplikasi resep masakan Indonesia yang lezat dan mudah dibuat' },
        { name: 'keywords', content: 'resep, masakan, indonesia, makanan, cooking' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icon.png' },

      ]
    }
  }
})