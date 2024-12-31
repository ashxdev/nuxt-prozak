import type { PostI } from '@/types'
export const useSocialPosts = () => {
    return useAsyncData('socialPosts', async () => {
        const { find } = useStrapi()

        const queryParams = {
            filters: {
                category: {
                    slug: {
                        $eq: 'suspilstvo',
                    },
                },
                type: {
                    $ne: 'main',
                },
            },
            pagination: {
                page: 1,
                pageSize: 6,
            },
            sort: ['publishedAt:desc'],
            populate: ['image', 'category'],
        }

        const { data } = await find('posts', queryParams)
        return data as PostI[]
    })
}
