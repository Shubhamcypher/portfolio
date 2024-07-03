import Background from '@/components/Background'
import Technology from '@/components/Technology'
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Meteors } from "@/components/ui/meteors";
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center'>
       <Background/>
        <BackgroundBeams/>
    </div>
  )
}

export default page