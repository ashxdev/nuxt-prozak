import type { CategoryI } from '~/types'
export const usePostCategories = (categorySlug: string) => {
    return useAsyncData('postCategories', async () => {
        const { find } = useStrapi()

        const queryParams = {
            filters: {
                category: {
                    slug: {
                        $ne: categorySlug
                    }
                }
            },

            populate: ["image"]
        }

        const { data } = await find('categories', queryParams)
        return data || [] as CategoryI[]
    })
}
