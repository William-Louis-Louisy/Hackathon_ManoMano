import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout>
        <Head>
          <title>Mano Mano</title>
          <meta
            name="Description"
            content="A Next.js starter styled using Tailwind CSS."
          />
        </Head>

        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
