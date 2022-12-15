import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords: string | undefined = "",
  isDynamic?: boolean
) => {
  //GraphQL Query
  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        keywords: $keywords
        languages: "en, ar"
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  //Fetch Function with Next Js 13 Caching...
  const res = await fetch(
    "https://voltaredonda.stepzen.net/api/sullen-crab/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `APIKey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_API_KEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );

  console.log("Loading new Date for this category >>>", category, keywords);

  const newsResponse = await res.json();
  //Sort function images vs not images preset
  const news = sortNewsByImage(newsResponse.data.myQuery);

  // Return Result
  return news;
};
export default fetchNews;

//Example Import
//stepzen import curl "http://api.mediastack.com/v1/news?access_key=ABC&categories=business,sports&keywords='WOW'"
