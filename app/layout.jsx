"use client";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import "../app/globals.scss";
import Lenis from "@studio-freight/lenis";
import Header from "components/header";
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
  }, []);
  return (
    <>
      <Header />
      <main>
        <Navigation />
        {props.children}
      </main>
      <Footer />
    </>
  );
}
export default Layout;
