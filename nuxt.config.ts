// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxt/content',
  ],
  css: [
    './app/assets/css/variables.css',
    './app/assets/css/main.css'
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate']
  }
})
