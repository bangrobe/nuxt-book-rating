// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon", '@nuxt/image-edge',],
  runtimeConfig: {
    public: {
        apiUrl: process.env.NUXT_PUBLIC_API_URL
    }
  },
  image: {
    cloudinary: {
      baseURL: "https://res.cloudinary.com/bangdigi/image/upload/",
    },
  },
});
