"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { SparklesCore } from "./ui/sparkles";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { Boxes } from "./ui/background-boxes";
import { WavyBackground } from "./ui/wavy-background";
import { Vortex } from "./ui/votex";
import { LinkPreview } from "./ui/link-preview";

const me = [
  {
    id: 1,
    name: "Shubham Kumar",
    designation: "Software Engineer",
    image: "/images/me.png",
  },
];

export function Intro() {
  return (
    <div className="">
      <div className="">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-red-600 font-bold inter-var text-center mb-60 ">
        Welcome
      </p>
    </WavyBackground>

          
        <div className="flex justify-center">
        <Vortex particleCount={50}>
        <div className="h-screen  bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: -10 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-yellow-500 py-4 bg-clip-text text-center text-4xl font-extrabold tracking-tight text-transparent md:text-7xl"
          >
            <div className="flex justify-center items-center mt-10">
              <AnimatedTooltip items={me} />
            </div>
            <h1>Hi There!</h1>
            <div className="flex justify-between items-center">
              <div>I am Shubham</div>
            </div>
            <div className="w-[40rem] h-40 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
              {/* Core component */}
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={4}
                particleDensity={800}
                className=""
                particleColor="#0000FF"
              />
              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </motion.h1>
        </div>
        </Vortex>
        </div>
      </div>
    </div>
  );
}
