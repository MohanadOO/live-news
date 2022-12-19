import "../styles/globals.css";
import Header from "./Header";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Providers>
        <body className="bg-gray-100 transition-all duration-700 dark:bg-zinc-900 dark:text-white">
          <Header />
          <div className="mx-auto max-w-6xl">{children}</div>
        </body>
      </Providers>
    </html>
  );
}
