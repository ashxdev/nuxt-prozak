import type { PostI } from '~/types'
export const usePostsByCategorySlug = (categorySlug: string) => {
    return useAsyncData('postsByCategorySlug', async () => {
        const { find } = useStrapi()

        const queryParams = {
            filters: {
                category: {
                    slug: {
                        $eq: categorySlug
                    }
                }
            },
            pagination: {
                page: 1,
                pageSize: 8
            },
            sort: ["publishedAt:desc"],
            populate: ["image", "category"]
        }

        const { data } = await find('posts', queryParams)
        return data as PostI[]
    })
}
