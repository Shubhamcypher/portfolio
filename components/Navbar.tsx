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
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
       <Menu setActive={setActive} >
        <Link href="/">
            <MenuItem active={null} setActive={setActive} item="Home">
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
        <Link href="/education">
            <MenuItem active={null} setActive={setActive} item="Education">
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