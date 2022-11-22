import * as contentful from 'contentful'

export const useContentful = async () => {
    const runtimeConfig = useRuntimeConfig()

    const config = {
        space: runtimeConfig.public.space,
        accessToken: runtimeConfig.public.accessToken
    }
    return contentful.createClient(config)
}