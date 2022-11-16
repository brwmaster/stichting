// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    runtimeConfig: {
        public: {
            space: process.env.CF_SPACE,
            accessToken: process.env.CF_ACCESS_TOKEN,    
        }
    }
})
