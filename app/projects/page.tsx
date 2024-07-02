"use client";
 
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";



import CouruseData from '@/data/music_courses.json'




function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36 ">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">Projects ({CouruseData.courses.length})</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 ">
        {CouruseData.courses.map((course)=>(
            <CardContainer key={course.id} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-full rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {course.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {course.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={course.image}
                  height="1000"
                  width="1000"
                  className="h-30 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20 rounded-[6px]">
                <CardItem
                  translateZ={60}
                  as={Link}
                  href="https://facebook.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-[6px] text-xs font-normal dark:text-white"
                >
                 <button className="p-[3px] relative rounded-[6px] ">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[6px]" />
                  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    Sign up
                  </div>
                </button>
                </CardItem>  
              </div>
            </CardBody>
          </CardContainer>
        ))}
        </div>
    </div>
  )
}

export default page