import * as contentful from 'contentful'

const config = {
    space: '',
    accessToken: ''
}

export const useContentful = async () => await contentful.createClient(config)