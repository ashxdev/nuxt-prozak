import type { PostI } from '@/types'

export const usePartnerPost = (postSlug: string) => {
    return useAsyncData('partnerPost', async () => {
        const { find } = useStrapi()

        const queryParams = {
            filters: {
                slug: {
                    $eq: postSlug
                }
            },
            sort: ["publishedAt:desc"],
            populate: ["image"]
        }

        const { data } = await find('partner-posts', queryParams)
        return data[0] as PostI
    })
}
