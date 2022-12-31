import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../../components/NewsList";
import type { GetServerSideProps } from "next";

type Props = {
  news: NewsResponse;
  term: string | string[] | undefined;
};

function SearchPage({ news, term }: Props) {
  return (
    <div>
      <h1 className="headerTitle">Search Results for: {term}</h1>
      <NewsList news={news} />
    </div>
  );
}

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { term } = context.query;
  const news: NewsResponse = await fetchNews("general", term, true);
  return {
    props: {
      news,
      term,
    },
  };
};
