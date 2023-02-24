// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ["gsap"],
  },
  css: ["~/assets/reset.css", "~/assets/function.css"],
});
