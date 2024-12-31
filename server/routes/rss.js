import qs from "qs"
import { v4 as uuidv4 } from "uuid"

function addLeadingZero(num) {
  let numString = num.toString()
  while (numString.length < 2) numString = "0" + num
  return numString
}

function buildRFC822Date(dateString) {
  const dayStrings = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const monthStrings = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ]

  const timeStamp = Date.parse(dateString)
  const date = new Date(timeStamp)

  const day = dayStrings[date.getDay()]
  const dayNumber = addLeadingZero(date.getDate())
  const month = monthStrings[date.getMonth()]
  const year = date.getFullYear()
  const time = `${addLeadingZero(date.getHours())}:${addLeadingZero(
    date.getMinutes()
  )}:00`
  const timezone = date.getTimezoneOffset() === 0 ? "GMT" : "BST"

  return `${day}, ${dayNumber} ${month} ${year} ${time} ${timezone}`
}

async function getPosts() {
  const postsQ = qs.stringify(
    {
      filters: {
        ukr_net: { $eq: true }
      },
      pagination: {
        page: 1,
        pageSize: 100
      },
      sort: ["publishedAt:desc"],
      populate: ["image", "category"]
    },
    { encodeValuesOnly: true }
  )

  const response = await $fetch(
    `${process.env.NUXT_STRAPI_PUBLIC_URL}/api/posts?${postsQ}`
  )
  return response.data || []
}

function buildRssItems(items) {
  return items
    .map(
      (item) => `
      <item>
        <title>${item.attributes.name}</title>
        <link>http://prozak.info/${
          item.attributes.category.data.attributes.slug
        }/${item.attributes.slug}</link>
        <description>${item.attributes.short_description}</description>
        <author>ashxdev@gmail.com (Admin User)</author>
        <category>${item.attributes.short_description}</category>
        <guid isPermaLink="false">${uuidv4()}</guid>
        <pubDate>${buildRFC822Date(item.attributes.publish_date)}</pubDate>
      </item>
    `
    )
    .join("")
}

export default defineEventHandler(async (event) => {
  const posts = await getPosts()
  const rssFeed = `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Prozak.info</title>
    <link>http://prozak.info/</link>
    <description>Prozak.info інформаційний портал чітких новин</description>
    <language>ua-UA</language>
    <managingEditor>ashxdev@gmail.com (Administrator User)</managingEditor>
    <pubDate>${buildRFC822Date(new Date().toISOString())}</pubDate>
    <lastBuildDate>${buildRFC822Date(new Date().toISOString())}</lastBuildDate>
    <generator>Prozak.info</generator>
    <docs>http://www.rssboard.org/rss-specification</docs>
    <image>
      <url>https://qwik.prozak.info/Prozak.info_rss.png</url>
      <title>Prozak.info</title>
      <link>https://prozak.info/</link>
    </image>
    <atom:link href="https://prozak.info/rss" rel="self" type="application/rss+xml"/>
    ${buildRssItems(posts)}
  </channel>
</rss>`

  event.node.res.setHeader("Content-Type", "application/rss+xml; charset=utf-8")

  return rssFeed
})
