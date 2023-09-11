// pages/_app.js
import "../src/assets/css/tailwind.config.css";
import "../src/assets/css/globals.css";
import Head from "next/head";
import Layout from "../layout/main.layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Wholesale</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;