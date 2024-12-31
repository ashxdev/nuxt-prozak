import type { PostI } from '@/types'
export const useGetAllPost = () => {
    return useAsyncData('getAllPost', async () => {
        const { find } = useStrapi()

        const queryParams = {
            sort: ["publish_date:desc"],
            pagination: {
                page: 1,
                pageSize: 100
            },
            populate: ["image", "category"]
        }

        const { data } = await find('posts', queryParams)
        return data as PostI[]
    })
}
