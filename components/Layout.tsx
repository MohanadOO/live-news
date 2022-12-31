import Head from "next/head";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Live News</title>
      </Head>
      <Header />
      <div className="mx-auto max-w-6xl">{children}</div>
    </>
  );
}
