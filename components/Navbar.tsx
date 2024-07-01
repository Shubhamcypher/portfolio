'use client'

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
 

function Navbar({ className }: { className?: string }) {

    const [active, setActive] = useState<string | null>(null); 
    //The type parameter <string | null> specifies that the state can be either a string or null.
    
  return (
    <div
    className={cn("fixed top-0 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
       <Menu setActive={setActive} >
        <Link href="/">
            <MenuItem active={null} setActive={setActive} item="Home">
            </MenuItem>
        </Link>
        <Link href="/skills">
            <MenuItem active={active} setActive={setActive} item="Skills">
                <div className="flex flex-col text-sm space-y-4">
                        <div className="flex flex-shrink items-center justify-between">
                            <HoveredLink href="/projects">React</HoveredLink>
                            <img src="https://pluspng.com/img-png/react-logo-png-react-logo-png-transparent-amp-svg-vector-pluspng-2400x2400.png" className="rounded-full w-6 h-6 "/>
                        </div>
                        <div className="flex flex-shrink items-center justify-between">
                            <HoveredLink href="/projects">Node JS</HoveredLink>
                            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/454/nodejs-new-pantone-white-512.png" className="rounded-full w-6 h-6"/>
                        </div>
                        <div className="flex flex-shrink items-center justify-between">
                            <HoveredLink href="/projects">Mongo DB</HoveredLink>
                            <img src="https://i.pinimg.com/originals/90/3b/bb/903bbb31b5ae50326ae7d2eac38c9a33.jpg" className="rounded-full w-6 h-6"/>
                        </div>
                        <div className="flex flex-shrink items-center justify-between">
                            <HoveredLink href="/projects">MySQL</HoveredLink>
                            <img src="https://p7.hiclipart.com/preview/572/182/378/mysql-relational-database-management-system-logo-microsoft-sql-server-mysql-logo.jpg" className="rounded-full w-6 h-6"/>
                        </div>
                        <div className="flex flex-shrink items-center justify-between">
                            <HoveredLink href="/projects">Next JS</HoveredLink>
                            <img src="https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png" className="rounded-full w-6 h-6"/>
                        </div>
                        <div className="flex flex-shrink items-center justify-between">
                            <HoveredLink href="/projects">Virtual Box</HoveredLink>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Virtualbox_logo.png" className="rounded-full w-6 h-6"/>
                        </div>
                    </div>
            </MenuItem>
        </Link>
        <Link href='/projects'>
            <MenuItem active={active} setActive={setActive} item="Projects">
                <div className="flex flex-col space-y-4 text-sm">
                    <div className="flex flex-shrink items-center gap-2">
                    <HoveredLink href="/projects">WeTube</HoveredLink>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.9Izv-aszItToTtEqRMSE0QHaE6&pid=Api&P=0&h=180" className="rounded w-16 h-12"/>
                    </div>
                    <HoveredLink href="/projects">Tunes</HoveredLink>
                    <HoveredLink href="/projects">NIDS</HoveredLink>   
                </div>
            </MenuItem>
        </Link>
        <Link href="/contact">
            <MenuItem active={active} setActive={setActive} item="Contact Us">
                shubhamdevu023@gmail.com
            </MenuItem>
        </Link>
       </Menu>
    </div>
  )
}

export default Navbar