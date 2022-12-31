import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-gray-100 transition-all duration-700 dark:bg-zinc-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
