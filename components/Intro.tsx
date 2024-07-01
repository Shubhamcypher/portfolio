"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";



  const words = [
    {
      text: "Computer Science",
      className: "text-red-500 dark:text-white-500 text-7xl",
    },
    {
      text: "Graduate.",
      className: "text-blue-500 dark:text-green-500",
    },
  ];


export function Intro() {
  return (
    <div className="">
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
                }}
                className="mt-2 md:mt-16 lg:mt-2 bg-gradient-to-br from-slate-300 to-yellow-600 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl"
            >
                Hi! <br /> I am Shubham
                <TypewriterEffectSmooth words={words}/>
            </motion.h1>
        </LampContainer>
    </div>
  );
}
