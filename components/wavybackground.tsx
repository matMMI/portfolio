"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";

interface WavyBackgroundDemoProps {
  title: string;
}

export function WavyBackgroundDemo({ title }: WavyBackgroundDemoProps) {
  return (
    <WavyBackground className="max-w-4xl mx-auto p-4 md:p-8 lg:p-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white font-bold inter-var text-center drop-shadow-lg">
        {title}
      </h1>
      <p className="text-sm md:text-base mt-0 sm:mt-2 text-white font-normal inter-var text-center drop-shadow-md">
        WEB DEVELOPER & UX/UI DESIGNER
      </p>
    </WavyBackground>
  );
}
