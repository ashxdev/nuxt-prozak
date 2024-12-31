import type { PostI } from '~/types'
export const useTopPosts = () => {
    return useAsyncData('topPosts', async () => {
        const { find } = useStrapi()

        const queryParams = {
            filters: {
                type: {
                    $eq: 'main',
                },
            },
            pagination: {
                page: 1,
                pageSize: 4,
            },
            sort: ['publishedAt:desc'],
            populate: ['image', 'category'],
        }

        const { data } = await find('posts', queryParams)
        return data || [] as PostI[]
    })
}
