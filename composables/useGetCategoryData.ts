import type { PostI, CategoryI } from '~/types'

const { find, findOne } = useStrapi()

export const useGetCategoryPosts = (categorySlug: string) => {
    return useAsyncData('getCategoryPosts', async () => {
        const postsQueryParams = {
            sort: ["publish_date:desc"],
            filters: {
                category: {
                    slug: {
                        $eq: categorySlug
                    }
                }
            },
            pagination: {
                page: 1,
                pageSize: 30
            },
            populate: ["image", "category"]
        }
        const { data } = await find('posts', postsQueryParams)
        return data as PostI[]
    })
}

export const useGetCategoryData = (categorySlug: string) => {
    return useAsyncData('getCategoryData', async () => {
        const categoryQueryParams =
        {
            filters: {
                slug: {
                    $eq: categorySlug
                }
            },
            populate: ["image"]
        }



        const { data } = await find('categories', categoryQueryParams)
        return data[0] as CategoryI
    })
}

export const useGetRestOfCategories = (categorySlug: string) => {
    return useAsyncData('getRestOfCategories', async () => {
        const categoriesQueryParams =
        {
            filters: {
                slug: {
                    $ne: categorySlug || "partner"
                }
            },
            populate: ["image"]
        }

        const { data } = await find('categories', categoriesQueryParams)

        return data as CategoryI[]
    })
}

