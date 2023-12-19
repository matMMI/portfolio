"use client";
import Footer from "../components/footer";
import { useEffect } from "react";
import "../app/globals.scss";
import Lenis from "@studio-freight/lenis";
import Navigation from "../components/navigation";
function Layout(props) {
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
      <header>
        <h1>
          <span className="txt t1">
            – MATHIS TOGNI – MASTER’S STUDENT AT INGEMEDIA – WEB DEVELOPER &
            UX/UI DESIGNER&nbsp;
          </span>
          <span className="txt t2">
            – MATHIS TOGNI – MASTER’S STUDENT AT INGEMEDIA – WEB DEVELOPER &
            UX/UI DESIGNER&nbsp;
          </span>
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
