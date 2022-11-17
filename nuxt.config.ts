// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge', 'nuxt-icon'],
    target: 'static',
    tailwindcss: {
        configPath: '~/tailwind.ts'
    },
    image: {    
        dir: 'assets/images'  
    },
    runtimeConfig: {
        public: {
            space: process.env.CF_SPACE,
            accessToken: process.env.CF_ACCESS_TOKEN,    
        }
    },
})
