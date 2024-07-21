'use client'
import React, { useState } from 'react'
import { MultiStepLoader as Loader } from "./ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";



const loadingStates = [
    {
      text: "ReactJS",
    },
    {
      text: "NextJS",
    },
    {
      text: "ExpressJS",
    },
    {
      text: "NodeJS",
    },
    {
      text: "MongoDB and MySQL",
    },
    {
      text: "TailwindCSS and styled Components",
    },
    {
      text: "Data Structures and Algo",
    },
    {
      text: "C and C++",
    },
    {
      text: "Virtual Machine",
    },
    {
      text: "API Testing",
    },
    {
      text: "Git and Github",
    },
    {
      text: "Typescript and Javascript",
    },
    {
      text: "Netlify,vercel and render",
    },
    {
      text: "Figma",
    },
    {
      text: "JWT authentication",
    },
  ];



const Technology = () => {
    const [loading, setLoading] = useState(false);
  return (
    <div className="w-full h-[30vh] flex items-center justify-center z-50">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={1500} />
 
      <button
        onClick={() => setLoading(true)}
        className="bg-[#efa639] hover:bg-[#39C3EF]/90 text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
        style={{
          boxShadow:
            "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        }}
      >
        Click to know Skills
      </button>
 
      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  )
}

export default Technology