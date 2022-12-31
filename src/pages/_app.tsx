import { ThemeProvider } from "next-themes";
import { type AppType } from "next/dist/shared/lib/utils";
import Layout from "../../components/Layout";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
