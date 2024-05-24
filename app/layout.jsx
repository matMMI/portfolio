"use client";
import Footer from "../components/footer";
import { useEffect } from "react";
import "../app/globals.scss";
import Lenis from "@studio-freight/lenis";

function Layout(props) {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", (e) => {});
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      {/* <Header /> */}
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
export default Layout;
