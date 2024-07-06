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

export default function Experience() {
  const { ref } = useSectionInView('Experience');

  return (
    <div className='flex justify-center flex-col'>
      <section
      ref={ref}
      id="experience"
      className="mt-28 text-center sm:mb-10 flex justify-center  items-center w-full max-h-full z-0"
    >
      <Boxes />
      <WavyBackground waveOpacity={1} speed="slow" blur={0} />
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
