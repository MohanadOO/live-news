import LiveTimeStamp from "./LiveTimeStamp";
import ReadMoreBtn from "./ReadMoreBtn";

type Props = {
  article: Article;
};

function Article({ article }: Props) {
  return (
    <article className="flex flex-col rounded-lg bg-slate-100 shadow-lg transition-all duration-200 ease-out hover:scale-105 hover:bg-slate-200 hover:shadow-xl dark:bg-slate-800 dark:shadow-gray-800">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="h-56 w-full rounded-t-lg object-cover shadow-md"
        />
      )}
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col p-5">
          <h2 className="font-serif font-bold">{article.title}</h2>
          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-6">{article.description}</p>
          </section>
          <footer className="ml-auto space-x-1 pt-5 text-right text-xs italic text-gray-400">
            <p>{article.source} - </p>
            <p>
              <LiveTimeStamp time={article.published_at} />
            </p>
          </footer>
        </div>
      </div>

      {/* Read More BTN */}
      <ReadMoreBtn article={article} />
    </article>
  );
}

export default Article;
