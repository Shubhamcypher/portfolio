'use client'

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import ProjectData from '@/data/my_projects.json'
import { WavyBackground } from "./ui/wavy-background";
import LoaderIcon from "./LoaderIcon";
import { BackgroundGradient } from "./ui/background-gradient";
 

function Navbar({ className }: { className?: string }) {

    const [showLoader, setShowLoader] = useState(false)
    const [active, setActive] = useState<string | null>(null); 
    //The type parameter <string | null> specifies that the state can be either a string or null.
    
  return (
    <div
    className={cn("fixed top-4 inset-x-0 lg:max-w-2xl sm:w-full lg:mx-auto z-50 ", className)}
    >
       <LoaderIcon showLoader={showLoader} setShowLoader={setShowLoader}/> 
       <BackgroundGradient className="rounded-full w-full bg-white dark:bg-zinc-900">
       <div>
       <div onClick={()=>setShowLoader(true)}>
       <Menu setActive={setActive} >
        <Link href="/">
            <MenuItem active={null} setActive={setActive} item="Home">
            </MenuItem>
        </Link>
        <Link href="/skills">
            <MenuItem active={active} setActive={setActive} item="Skills">
                <div className="flex flex-col text-sm space-y-4 ">
                        <div className="flex flex-shrink items-center justify-between">
                            <HoveredLink href="/skills">React</HoveredLink>
                            <img src="https://pluspng.com/img-png/react-logo-png-react-logo-png-transparent-amp-svg-vector-pluspng-2400x2400.png" alt="react" className="rounded-full w-6 h-6 "/>
                        </div>
                        <div className="flex flex-shrink items-center justify-between">
                            <HoveredLink href="/skills">Node JS</HoveredLink>
                            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/454/nodejs-new-pantone-white-512.png" alt="node" className="rounded-full w-6 h-6"/>
                        </div>
                        <div className="flex flex-shrink items-center justify-between">
                            <HoveredLink href="/skills">Mongo DB</HoveredLink>
                            <img src="https://i.pinimg.com/originals/90/3b/bb/903bbb31b5ae50326ae7d2eac38c9a33.jpg" alt="mongodb"  className="rounded-full w-6 h-6"/>
                        </div>
                        <div className="flex flex-shrink items-center justify-between">
                            <HoveredLink href="/skills">MySQL</HoveredLink>
                            <img src="https://p7.hiclipart.com/preview/572/182/378/mysql-relational-database-management-system-logo-microsoft-sql-server-mysql-logo.jpg" alt="mysql"  className="rounded-full w-6 h-6"/>
                        </div>
                        <div className="flex flex-shrink items-center justify-between">
                            <HoveredLink href="/skills">Next JS</HoveredLink>
                            <img src="https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png" alt="next"  className="rounded-full w-6 h-6"/>
                        </div>
                        <div className="flex flex-shrink items-center justify-between gap-5">
                            <HoveredLink href="/skills">Virtual Box</HoveredLink>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Virtualbox_logo.png" alt="virtual box"  className="rounded-full w-6 h-6"/>
                        </div>
                    </div>
            </MenuItem>
        </Link>
        <Link href='/projects'>
        <MenuItem active={active} setActive={setActive} item="Projects">
            <div className="flex flex-col justify-center  ">
            {ProjectData.projects.map((project)=>(
                <div key={project.id}>
                    <div className="flex flex-shrink justify-between mb-4 items-center gap-4">
                    <HoveredLink href="/projects">{project.title}</HoveredLink>
                    <img src={project.image} className="rounded w-16 h-12"/>
                    </div>   
                </div>
            ))}
            </div>
            </MenuItem>
        </Link>
        <Link href="/experiences">
            <MenuItem active={null} setActive={setActive} item="Experiences">
            </MenuItem>
        </Link>
        <Link href="/contacts">
            <MenuItem active={active} setActive={setActive} item="Contacts">
                shubhamdevu023@gmail.com
            </MenuItem>
        </Link>
       </Menu>
       </div>
       </div>
       </BackgroundGradient>
    </div>
  )
}

export default Navbar