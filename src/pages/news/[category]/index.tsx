import { categories } from "../../../../constants";
import fetchNews from "../../../../lib/fetchNews";
import sortNewsByImage from "../../../../lib/sortNewsByImage";
import response from "../../../../response.json";
import NewsList from "../../../../components/NewsList";
import type { GetStaticPropsContext } from "next";

type Props = {
  category: Category;
  news: NewsResponse;
};

function NewsCategory({ news, category }: Props) {
  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default NewsCategory;

export async function getStaticProps(context: GetStaticPropsContext) {
  const category = context.params?.category as Category;
  let testResponse: null | NewsResponse = null;
  if (process.env.ENABLE_TEST_RESPONSE === "TRUE") {
    testResponse = sortNewsByImage(response);
  }

  //Fetch News Data
  const news: NewsResponse = testResponse || (await fetchNews(category));

  return {
    props: {
      news,
      category,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const allCategories = categories.map((category) => ({
    params: { category },
  }));

  return {
    paths: allCategories,
    fallback: false,
  };
}
