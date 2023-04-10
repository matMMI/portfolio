import Document, { Head, Html, Main, NextScript } from "next/document";
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
        </body>
      </Html>
    );
  }
}
export default MyDocument;
