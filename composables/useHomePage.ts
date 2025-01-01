import type { Homepage } from '~/types'
export const useHomePage = () => {
    return useAsyncData('homePage', async () => {
        const { findOne } = useStrapi()

        const queryParams = {
            populate: ["header_add", "header_menu_add"],
            encodeValuesOnly: true
        }

        const { data } = await findOne('homepage', queryParams)
        return data as Homepage
    })
}
