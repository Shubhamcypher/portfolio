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
        <Vortex particleCount={30}>
        <div className="h-screen  bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md ">
          <motion.h1
            initial={{ opacity: 0.5, y: 400 }}
            whileInView={{ opacity: 1, y: -50 }}
            transition={{
              delay: 0,
              duration: 1,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-yellow-500 py-4 bg-clip-text text-center text-4xl font-extrabold tracking-tight text-transparent md:text-7xl"
          >
            <div className="flex justify-center items-center mt-10">
              <AnimatedTooltip items={me} />
            </div>
            <h1>Hi There!</h1>
            <div>
              <div>I am Shubham</div>
            </div>
            <div className="w-screen relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[4px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-red-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-1/4" />
              {/* Core component */}
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={8}
                particleDensity={30}
                className="h-screen w-screen absolute"
                particleColor="#FF0000"
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
