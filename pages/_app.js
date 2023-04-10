import "../app/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="/js/jqueryLatest.js" strategy="beforeInteractive" />
      <Script src="/js/isotope.js" strategy="beforeInteractive" />
      <Script src="/js/imageLoaded.js" strategy="beforeInteractive" />
      <Script src="/js/main.js" strategy="beforeInteractive" />
    </>
  );
}

export default MyApp;
