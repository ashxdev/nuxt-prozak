import type { PostI } from "~/types"

export const useGetRecentPosts = () => {
    return useAsyncData('getRecentPosts', async () => {
        const { find } = useStrapi()

        const queryParams = {
            pagination: {
                start: 0,
                limit: 2
            },
            sort: ["publishedAt:desc"],
            populate: ["image", "category"]
        }

        const { data } = await find('posts', queryParams)
        return data as PostI[]
    })
}
