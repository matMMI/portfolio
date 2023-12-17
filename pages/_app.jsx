import "../app/globals.scss";
import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const transitionSpringPhysics = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
  };
  const transitionColor = "#000000";
  useEffect(() => {
    const handleRouteChangeStart = () => {};
    router.events.on("routeChangeStart", handleRouteChangeStart);
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router]);
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
        />
      </Head>
      <AnimatePresence mode="wait">
        <motion.div key={router.route}>
          <motion.div
            style={{
              backgroundColor: transitionColor,
              position: "fixed",
              width: "100vw",
              zIndex: 1000,
              bottom: 0,
            }}
            transition={transitionSpringPhysics}
            animate={{ height: "0vh" }}
            exit={{ height: "100vh" }}
          />
          <motion.div
            style={{
              backgroundColor: transitionColor,
              position: "fixed",
              width: "100vw",
              zIndex: 1000,
              top: 0,
            }}
            transition={transitionSpringPhysics}
            initial={{ height: "100vh" }}
            animate={{ height: "0vh", transition: { delay: 0.2 } }}
          />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
export default MyApp;
