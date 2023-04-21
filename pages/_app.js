import "../app/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>→ MATHIS TOGNI – WEB DEVELOPER & UX/UI DESIGNER</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
