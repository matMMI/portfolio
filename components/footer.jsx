import React from "react";

export default function Footer() {
  return (
    <footer className="w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-xs sm:text-xl md:text-2xl lg:text-3xl font-bold relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500  pt-0 sm:pt-20 pb-36">
        DÉVELOPPÉ SUR NEXTJS AVEC <span className="text-red-500">❤</span> - 2024
      </p>
    </footer>
  );
}
