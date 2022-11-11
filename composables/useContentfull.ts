import contentful from "contentful";

const config = {
    space: '',
    accessToken: ''
}

export const useContentfull = () => contentful.createClient(config)