import "../app/globals.scss";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Head from "next/head";
const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});
import logo from "./logo.json";
function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState({
    visible: true,
    translateY: "0%",
  });
  const styleLottie = {
    width: 100,
  };
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading({
          visible: true,
          translateY: "-100%",
        });
      }, 3000);
      setTimeout(() => {
        setIsLoading({
          visible: false,
        });
      }, 6000);
    };
    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad);

        return () => {
          window.removeEventListener("load", handleLoad);
        };
      }
    }
  }, []);
  return (
    <>
      <Head>
        <title>→ Mathis TOGNI · WEB DEVELOPER & UX/UI DESIGNER</title>
        <meta
          name="description"
          content="Étudiant en Master UX/UI à l'UFR Ingémédia de Toulon, j'aime créer des projets autour du Web, de la conception graphique jusqu'au développement de sites sur mesure."
        />
        <link
          rel="icon"
          href="https://apiportfolio.mathistogni.fr/favicon.ico"
          sizes="any"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        var _paq = (window._paq = window._paq || []);
        _paq.push(["trackPageView"]);
        _paq.push(["enableLinkTracking"]);
        (function () {
          var u = "//matomo.mathistogni.fr/";
          _paq.push(["setTrackerUrl", u + "matomo.php"]);
          _paq.push(["setSiteId", "1"]);
          var d = document,
            g = d.createElement("script"),
            s = d.getElementsByTagName("script")[0];
          g.async = true;
          g.src = u + "matomo.js";
          s.parentNode.insertBefore(g, s);
        })();
       `,
          }}
        ></script>
      </Head>
      {isLoading.visible ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            transform: `translateY(${isLoading.translateY})`,
            transition: "2s cubic-bezier(.42,0,0,.98)",
          }}
        >
          <Lottie style={styleLottie} loop={true} animationData={logo} />
        </div>
      ) : null}
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
