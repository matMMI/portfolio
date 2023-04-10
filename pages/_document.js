import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <title>→ MATHIS TOGNI – WORDPRESS DEVELOPER & UX/UI DESIGNER</title>
          <link
            rel="shortcut icon"
            href="https://apiportfolio.mathistogni.fr/favicon.ico"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script src="/js/jqueryLatest.js" strategy="beforeInteractive" />
          <Script src="/js/isotope.js" strategy="beforeInteractive" />
          <Script src="/js/imageLoaded.js" strategy="beforeInteractive" />
          <Script src="/js/main.js" strategy="beforeInteractive" />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
