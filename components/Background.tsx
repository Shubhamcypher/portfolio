'use client'
import React from 'react'
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Link from 'next/link';
import { FlipWords } from "./ui/flip-words";

import Technology from './Technology';

const techWords = ["FullStack", "Frontend", "Backend", "Software"];

const words = [
    {
      text: "Computer",
    },
    {
      text: "Science",
    },
    {
      text: "Graduate.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

const Background = () => {
  return (
        <div className="flex flex-col items-center justify-center h-screen mt-4">
            
            <TypewriterEffectSmooth words={words} />
            <div className="flex justify-center items-center px-4">
                <div className="lg:text-5xl mx-auto text-neutral-600 dark:text-neutral-400 font-semibold">
                    <FlipWords words={techWords}  />
                    Developer
                </div>
            </div>
            <Technology/>
        </div>

  )
}

export default Background