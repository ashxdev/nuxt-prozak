import type { PostI } from '@/types'

export const useGetPostData = (postSlug: string) => {
    return useAsyncData('getPostData', async () => {
        const { find } = useStrapi()

        const queryParams = {
            filters: {
                slug: {
                    $eq: postSlug
                }
            },
            populate: ["image", "category"]
        }

        const legacyQueryParams = {
            filters: {
                slug: {
                    $contains: postSlug
                }
            },
            populate: ["image"]
        }


        const { data } = await find('posts', queryParams)
        if (!data || !data.length) {
            const { data } = await find('legacy-posts', legacyQueryParams)
            return { post: data[0] as PostI, legacyPost: true }
        }

        return { post: data[0] as PostI, legacyPost: true }
    })
}
