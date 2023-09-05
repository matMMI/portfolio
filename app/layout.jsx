"use client";
import Footer from "../components/footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import "../app/globals.css";
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
  });
  return (
    <>
      <main>
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
        <div className="btnFilter">
          <Image src="/images/filter.svg" alt="close" width={30} height={30} />
        </div>
        {props.children}
      </main>
      <Footer />
    </>
  );
}
export default Layout;
