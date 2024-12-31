export const useAboutPage = () => {
    return useAsyncData('aboutPage', async () => {
        const { findOne } = useStrapi()

        const queryParams = {
            populate: ["header_add", "header_menu_add"],
            encodeValuesOnly: true
        }

        const { data } = await findOne('about', queryParams)
        return data as any
    })
}
