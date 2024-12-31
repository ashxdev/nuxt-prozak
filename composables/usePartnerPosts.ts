import type { PostI } from '@/types'

export const usePartnerPosts = ({ pageSize = 6 }: { pageSize?: number } = { pageSize: 6 }) => {
    return useAsyncData('partnerPosts', async () => {
        const { find } = useStrapi()

        const queryParams = {
            pagination: {
                page: 1,
                pageSize,
            },
            sort: ['publish_date:desc'],
            populate: ['image'],
        }

        const { data } = await find('partner-posts', queryParams)
        return data as PostI[]
    })
}
