import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta
            name="description"
            content="Étudiant en Master UX/UI à l'UFR Ingémédia de Toulon, j'aime créer des projets autour du Web, de la conception graphique jusqu'au développement de sites sur mesure."
          />
          <link
            rel="icon"
            href="https://apiportfolio.mathistogni.fr/favicon.ico"
            sizes="any"
          />

          <Script
            id="matomo"
            dangerouslySetInnerHTML={{
              __html: `
        var _paq = window._paq = window._paq || [];
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
          var u="//matomo.mathistogni.fr/";
          _paq.push(['setTrackerUrl', u+'matomo.php']);
          _paq.push(['setSiteId', '1']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
        })();
      `,
            }}
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
