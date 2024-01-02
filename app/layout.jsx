"use client";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import axios from "axios";
import he from "he";
import "../app/globals.scss";
import Lenis from "@studio-freight/lenis";
import Navigation from "../components/navigation";
function Layout(props) {
  const [pageTitle, setPageTitle] = useState(""); //
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", (e) => {});
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    const menuTrigger = document.querySelector(".menu-trigger");
    axios
      .get("https://apiportfolio.mathistogni.fr/wp-json/wp/v2/pages")
      .then((response) => {
        const title = response.data[0].title.rendered;
        setPageTitle(title);
      })
      .catch((error) => {
        console.error("Error fetching page title:", error);
      });
  }, []);
  return (
    <>
      <header>
        <h1>
          <span className="txt t1">{he.decode(pageTitle)}</span>
          <span className="txt t2">{he.decode(pageTitle)}</span>
        </h1>
      </header>
      <main>
        <Navigation />
        {props.children}
      </main>
      <Footer />
    </>
  );
}
export default Layout;
