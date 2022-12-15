"use client";

import { useRouter } from "next/navigation";

type Props = {
  article: Article;
};

function ReadMoreBtn({ article }: Props) {
  const router = useRouter();

  function handleClick() {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    const url = `/article?${queryString}`;
    router.push(url);
  }

  return (
    <button
      onClick={handleClick}
      className="h-10 rounded-b-lg bg-orange-400 hover:bg-orange-500 dark:text-gray-900"
    >
      Read More
    </button>
  );
}

export default ReadMoreBtn;
