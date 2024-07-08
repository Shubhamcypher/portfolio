'use client';
import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experienceData from '@/data/experience_details.json';
import { useSectionInView } from '@/hooks/useSectionInView';
import { Boxes } from '@/components/ui/background-boxes';
import { WavyBackground } from '@/components/ui/wavy-background';
import TimelineElement from '@/components/TimelineElement';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import educDetails from '@/data/education_details.json'
import { LinkPreview } from '@/components/ui/link-preview';

export default function Experience() {
  const { ref } = useSectionInView('Experience');

  const  rotate =()=>{
    document.body.style.transform = "rotate(90deg)";
  }

  

    

  return (
    <div className='flex justify-center flex-col'>
      <div className="w-full  justify-end flex z-50 mt-32">
      <LinkPreview 
      url="https://drive.google.com/file/d/1Pfj4n6Sg_7UMtSvvD0kebekmhDoNyone/view?usp=sharing" 
      isStatic 
      imageSrc='/images/resume.png' 
      className="font-extrabold text-6xl  h-full">
      Resume
      </LinkPreview>{" "}
      <div className='lg:hidden'>
      <button onClick={rotate} className='bg-green-600 p-5  absolute'>Zoom out</button>
      </div>
      </div>
      <section
      ref={ref}
      id="experience"
      className="text-center sm:mb-10 flex justify-center  items-center w-full max-h-full z-0"
    >
      <Boxes />
      <WavyBackground waveOpacity={1} speed="slow" blur={0} w-full/>
      <VerticalTimeline lineColor="#00ff00">
        {experienceData.experience.map((item, index) => (
          <TimelineElement key={index} item={item} />
        ))}
      </VerticalTimeline>
      </section>
      <h1 className='text-2xl md:text-4xl lg:text-7xl text-purple-600  text-center font-extrabold'>Education</h1>
      <div>
        <HoverEffect items={educDetails.education}/>
      </div>
    </div>
  );
}
