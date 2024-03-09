// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // ssr: true,
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-icon',
    'vue3-carousel-nuxt'
  ],
  googleFonts: {
    families: {
      Inter: '200..900',
      Montserrat: [900]
    }
  }
})
