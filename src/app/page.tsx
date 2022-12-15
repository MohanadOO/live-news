import { categories } from "../../constants";
import fetchNews from "../../lib/fetchNews";
import NewsList from "./NewsList";
import response from "../../response.json";
import sortNewsByImage from "../../lib/sortNewsByImage";

async function HomePage() {
  let testResponse: null | NewsResponse = null;
  if (typeof response === "object") testResponse = sortNewsByImage(response);

  //Fetch News Data
  const news: NewsResponse =
    testResponse || (await fetchNews(categories.join(",")));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default HomePage;
