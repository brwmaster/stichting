// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge', 'nuxt-icon'],
    tailwindcss: {
        configPath: '~/tailwind.ts'
    },
    image: {    
        dir: 'public/images', 
        provider: 'netlify'
    },
    runtimeConfig: {
        public: {
            space: process.env.CF_SPACE,
            accessToken: process.env.CF_ACCESS_TOKEN,    
            contentTypeProject: process.env.CF_CONTENT_TYPE_PROJECTS,
            contentTypeNieuws: process.env.CF_CONTENT_TYPE_NIEUWS
        }
    },
})
