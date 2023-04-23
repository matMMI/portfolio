import "../app/globals.css";
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState({
    visible: true,
    translateY: "0%",
  });
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
          translateY: "-100%",
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
          <div className="loader">
            <svg
              enableBackground="new 0 0 512 512"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m0 0h512v512h-512z" />
              <g fill="#fff">
                <path d="m457.3 200.1v257.2h-337.2v-335.5h33.6l100.6 100.7 100.7-100.7h33.5v13.9l-33.5 33.5-77 77-23.7 23.7-23.7-23.7-76.9-77v254.5h270v-190.1z" />
                <path d="m457.3 54.7v100.7l-68.8 68.7v166.1h-33.5v-132.5l-31.9 31.8h-47.4l148-148v-53.2h-335.4v369h-33.6v-402.6z" />
              </g>
            </svg>
          </div>
        </div>
      ) : null}
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
