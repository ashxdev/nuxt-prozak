import type { CategoryI } from "@/types"

export const useMainCategories = () => {
    return useAsyncData('mainCategories', async () => {
        const { find } = useStrapi()

        const queryParams = {
            populate: ["image"]
        }

        const { data } = await find('categories', queryParams)
        return data as CategoryI[]
    })
}