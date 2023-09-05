import "../app/globals.css";
import { useState, useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import Lottie from "lottie-react";
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
      }, 500);
      setTimeout(() => {
        setIsLoading({
          visible: false,
        });
      }, 2510);
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
        <title>→ MATHIS TOGNI – WEB DEVELOPER & UX/UI DESIGNER</title>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js" />
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
