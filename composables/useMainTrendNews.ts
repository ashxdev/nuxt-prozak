import type { PostI } from '~/types'
export const useMainTrendNews = () => {
    return useAsyncData('mainTrendNews', async () => {
        const { find } = useStrapi()

        const queryParams = {
            filters: {
                type: {
                    $eq: 'trend',
                },
            },
            pagination: {
                start: 0,
                limit: 3,
            },
            sort: ['publishedAt:desc'],
            populate: ['image', 'category'],
        }

        const { data } = await find('posts', queryParams)
        return data as PostI[]
    })
}
