'use client'
import React from 'react'
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Link from 'next/link';
import { FlipWords } from "./ui/flip-words";

import Technology from './Technology';
import { LinkPreview } from '@/components/ui/link-preview';
import { motion } from "framer-motion";
import IconCloud from "@/components/magicui/icon-cloud";

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

  const slugs = [
    "typescript",
    "javascript",
    "tailwindcss",
    "react",
    "openai",
    "html5",
    "css3",
    "nodedotjs",
    "leetcode",
    "c",
    "mongodb",
    "mongoose",
    "mysql",
    "firebase",
    "snowflake",
    "vite",
    "virtualbox",
    "kalilinux",
    "appwrite",
    "htmx",
    "git",
    "cloudinary",
    "github",
    "netlify",
    "redux",
    "nodemon",
    "npm",
    "figma",
    "postman",
    "stackblitz",
    "styledcomponents",
    "v8",
    "wireshark",
    "cplusplus",
  ];

const Background = () => {
  return (
        <div className="flex flex-col items-center justify-center h-screen mt-16">
            
            <TypewriterEffectSmooth words={words} />
            <div className="flex justify-center items-center px-4">
                <div className="lg:text-5xl mx-auto text-neutral-600 dark:text-neutral-400 font-semibold">
                    <FlipWords words={techWords}  />
                    Developer
                </div>
                <div className='hidden lg:flex md:flex'>
                <IconCloud iconSlugs={slugs} />
                </div>
            </div>
            <Technology/>
        </div>

  )
}

export default Background