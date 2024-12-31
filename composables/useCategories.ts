import type { CategoryI } from '@/types'

export const useCategories = () => {
    return useAsyncData('categories', async () => {
        const { find } = useStrapi()

        const queryParams = {

        }

        const { data } = await find('categories', queryParams)
        return data as CategoryI[]
    })
}
