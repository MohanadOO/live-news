import { categories } from "../../../../constants";
import fetchNews from "../../../../lib/fetchNews";
import sortNewsByImage from "../../../../lib/sortNewsByImage";
import response from "../../../../response.json";
import NewsList from "../../NewsList";

type Props = {
  params: { category: Category };
};

async function NewsCategory({ params: { category } }: Props) {
  let testResponse: null | NewsResponse = null;
  if (process.env.ENABLE_TEST_RESPONSE === "TRUE") {
    testResponse = sortNewsByImage(response);
  }

  //Fetch News Data
  const news: NewsResponse =
    testResponse || (await fetchNews(categories.join(category)));
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default NewsCategory;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}
