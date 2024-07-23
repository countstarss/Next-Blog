import Head from "next/head";

import "@/styles/globals.css";
import Layout from "@/components/Layout/Layout";

export default function App({ Component, pageProps }) {
  return (
  <Layout>
    <Head>
      <meta name="description" content='this is my blog created with nextjs'/>
      <meta name="viewport" content='width=device-width, initial-scale=1.0'/>
    </Head>
    <Component {...pageProps} />
  </Layout>
  )
}
