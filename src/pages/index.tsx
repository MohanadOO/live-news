import { categories } from "../../constants";
import fetchNews from "../../lib/fetchNews";
import response from "../../response.json";
import sortNewsByImage from "../../lib/sortNewsByImage";
import NewsList from "../../components/NewsList";

function HomePage({ news }: { news: NewsResponse }) {
  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default HomePage;

export const getStaticProps = async () => {
  let testResponse: null | NewsResponse = null;
  if (process.env.ENABLE_TEST_RESPONSE === "TRUE") {
    testResponse = sortNewsByImage(response);
  }
  const news: NewsResponse =
    testResponse || (await fetchNews(categories.join(",")));

  return {
    props: {
      news,
    },
    revalidate: 30,
  };
};
