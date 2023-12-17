"use client";
import Footer from "../components/footer";
import { useEffect } from "react";
import "../app/globals.scss";
import Lenis from "@studio-freight/lenis";
// import Lottie from "lottie-react";
// import settings from "./settings.json";
function Layout(props) {
  // const styleLottie = {
  //   width: "70%",
  //   height: "inherit",
  // };
  function toggleBars() {
    const bars = document.querySelectorAll(".menu-trigger__bar");
    bars.forEach((bar) => {
      bar.classList.toggle("is-open");
    });
  }
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", (e) => {});
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    const menuTrigger = document.querySelector(".menu-trigger");
    menuTrigger.addEventListener("click", toggleBars);
    return () => {
      menuTrigger.removeEventListener("click", toggleBars);
    };
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
        <div className="group_menu">
          <div className="menu-trigger" data-component="menu-trigger">
            <svg
              viewBox="0 0 50 50"
              width="50"
              height="50"
              className="menu-trigger__shape"
            >
              <circle r="25" cx="25" cy="25"></circle>
            </svg>
            <div className="bar">
              <span className="menu-trigger__bar"></span>
              <span className="menu-trigger__bar"></span>
              <span className="menu-trigger__bar"></span>
            </div>
          </div>
          <div className="btnFilter">
            {/* <Image src="/images/filter.svg" alt="close" width={30} height={30} /> */}
            {/* <Lottie style={styleLottie} loop={true} animationData={settings} /> */}
            <svg
              viewBox="0 0 50 50"
              width="50"
              height="50"
              className="menu-trigger__shape"
            >
              <circle r="25" cx="25" cy="25"></circle>
            </svg>
            <svg
              className="setting"
              width="25"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.5901 12.5L15.7701 11.2C16.0701 10.12 16.0901 8.95 15.7701 7.78L17.5901 6.5L16.1401 4L14.1101 4.92C13.3201 4.12 12.3201 3.5 11.1501 3.21L10.9501 1H8.05008L7.85008 3.21C6.68008 3.5 5.68008 4.12 4.89008 4.92L2.86008 4L1.41008 6.5L3.23008 7.78C2.91008 8.95 2.93008 10.12 3.23008 11.2L1.41008 12.5L2.86008 15L4.89008 14.07C5.68008 14.86 6.68008 15.46 7.85008 15.77L8.05008 18H10.9501L11.1501 15.77C12.3201 15.46 13.3201 14.86 14.1101 14.07L16.1401 15L17.5901 12.5ZM11.5001 0C11.7701 0 12.0001 0.2 12.0001 0.46L12.1801 2.5C12.9401 2.78 13.6201 3.19 14.2301 3.68L16.0801 2.81C16.3101 2.69 16.6001 2.77 16.7401 3L18.7401 6.5C18.8801 6.71 18.8001 7 18.5801 7.15L16.9101 8.32C17.0401 9.12 17.0301 9.91 16.9101 10.68L18.5801 11.85C18.8001 12 18.8801 12.29 18.7401 12.5L16.7401 16C16.6001 16.21 16.3101 16.29 16.0801 16.17L14.2301 15.31C13.6201 15.8 12.9401 16.2 12.1801 16.5L12.0001 18.5C12.0001 18.79 11.7701 19 11.5001 19H7.50008C7.36747 19 7.24029 18.9473 7.14652 18.8536C7.05276 18.7598 7.00008 18.6326 7.00008 18.5L6.82008 16.5C6.06008 16.2 5.38008 15.8 4.77008 15.31L2.92008 16.17C2.69008 16.29 2.40008 16.21 2.26008 16L0.260078 12.5C0.120078 12.29 0.200079 12 0.420079 11.85L2.09008 10.68C1.97008 9.91 1.96008 9.12 2.09008 8.32L0.420079 7.15C0.200079 7 0.120078 6.71 0.260078 6.5L2.26008 3C2.40008 2.77 2.69008 2.69 2.92008 2.81L4.77008 3.68C5.38008 3.19 6.06008 2.78 6.82008 2.5L7.00008 0.46C7.00008 0.2 7.23008 0 7.50008 0H11.5001ZM9.50008 6C10.4283 6 11.3186 6.36875 11.975 7.02513C12.6313 7.6815 13.0001 8.57174 13.0001 9.5C13.0001 10.4283 12.6313 11.3185 11.975 11.9749C11.3186 12.6313 10.4283 13 9.50008 13C8.57182 13 7.68158 12.6313 7.02521 11.9749C6.36883 11.3185 6.00008 10.4283 6.00008 9.5C6.00008 8.57174 6.36883 7.6815 7.02521 7.02513C7.68158 6.36875 8.57182 6 9.50008 6ZM9.50008 7C8.83704 7 8.20115 7.26339 7.73231 7.73223C7.26347 8.20107 7.00008 8.83696 7.00008 9.5C7.00008 10.163 7.26347 10.7989 7.73231 11.2678C8.20115 11.7366 8.83704 12 9.50008 12C10.1631 12 10.799 11.7366 11.2678 11.2678C11.7367 10.7989 12.0001 10.163 12.0001 9.5C12.0001 8.83696 11.7367 8.20107 11.2678 7.73223C10.799 7.26339 10.1631 7 9.50008 7Z" />
            </svg>
          </div>
        </div>
        {props.children}
      </main>
      <Footer />
    </>
  );
}
export default Layout;
