"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";

interface WavyBackgroundDemoProps {
  title: string;
}

export function WavyBackgroundDemo({ title }: WavyBackgroundDemoProps) {
  return (
    <WavyBackground className="max-w-4xl mx-auto">
      <p className="text-4xl md:text-5xl lg:text-7xl text-white font-bold inter-var text-center">
        {title}
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        WEB DEVELOPER & UX/UI DESIGNER
      </p>
    </WavyBackground>
  );
}
