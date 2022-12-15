import Article from "./Article";

type Props = {
  news: NewsResponse;
};

function NewsList({ news }: Props) {
  return (
    <main className="grid grid-cols-1 gap-10 p-10 md:grid-cols-2 lg:grid-cols-3">
      {/* All The Article */}
      {news.data.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </main>
  );
}

export default NewsList;
