"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

import ProjecData from "@/data/my_projects.json";
import { Button } from "@/components/ui/moving-border";

function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36 ">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-yellow-300">
        Projectsaaaa ({ProjecData.projects.length})
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 ">
        {ProjecData.projects.map((project) => (
          <CardContainer key={project.id} className="inter-var">
            <Link href={project.url} target="_blank">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-full rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-red-600"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-gray-400"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={project.image}
                    height={1000}
                    width={1000}
                    className="h-30 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={project.title}
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20 rounded-[6px]">
                  <CardItem
                    translateZ={60}
                    as="div"
                    className="px-4 py-2 rounded-[6px] text-xs font-normal dark:text-white"
                  >
                    <button className="p-[3px] relative rounded-[6px]">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[6px]" />
                      <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                        Visit
                      </div>
                    </button>
                  </CardItem>
                  <CardItem
                    translateZ={60}
                    as="div"
                    className="px-4 py-2 rounded-[6px] text-xs font-normal dark:text-white"
                  >
                    <Link href={project.github} target="_blank">
                      <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-black text-black dark:text-green-500 border-neutral-200 dark:border-slate-800 flex gap-1 z-100"
                        onClick={(e: MouseEvent) => e.stopPropagation()}
                      >
                        <Image
                          src="https://icones.pro/wp-content/uploads/2021/06/icone-github-verte.png"
                          height={20}
                          width={20}
                          alt="GitHub icon"
                        />
                        Github
                      </Button>
                    </Link>
                  </CardItem>
                </div>
              </CardBody>
            </Link>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default page;
