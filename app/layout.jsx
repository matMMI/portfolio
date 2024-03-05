"use client";
import Footer from "../components/footer";
import { useEffect, useState } from "react";

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
  }, []);
  return (
    <>
      <header>
        <h1>
          <span className="txt t1">
            - MATHIS TOGNI - ÉTUDIANT EN MASTER DESIGN d&apos;expérience et
            design d&apos;interface À INGÉMÉDIA - DÉVELOPPEUR WEB ET UX/UI
            DESIGNER 
          </span>
          <span className="txt t2">
            - MATHIS TOGNI - ÉTUDIANT EN MASTER DESIGN d&apos;expérience et
            design d&apos;interface À INGÉMÉDIA - DÉVELOPPEUR WEB ET UX/UI
            DESIGNER 
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
