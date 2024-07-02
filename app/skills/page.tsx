import Background from '@/components/Background'
import Technology from '@/components/Technology'
import { Meteors } from "@/components/ui/meteors";
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center'>
        <Meteors number={30} />
       <Background/>
    </div>
  )
}

export default page