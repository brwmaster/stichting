import * as contentful from 'contentful'

const config = {
    space: 'ey7zpaudq56d',
    accessToken: 'fIAK8m3xJqHqq5IDUM-NMqLKvQHqr_4yA1WV_V_Wdgk'
}

export const useContentful = async () => await contentful.createClient(config)