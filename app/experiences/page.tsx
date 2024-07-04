'use client';
import React from 'react';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experienceData from '@/data/experience_details.json';
import { useInView } from 'react-intersection-observer';
import { useSectionInView } from '@/hooks/useSectionInView';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import { Boxes } from '@/components/ui/background-boxes';
import { WavyBackground } from '@/components/ui/wavy-background';


export default function Experience() {
  const { ref } = useSectionInView('Experience');
  return (
    <section
      ref={ref}
      id="experience"
      className="mt-28  text-center sm:mb-10 flex justify-center items-center w-screen max-h-full z-0"
    >
      <Boxes/>
      <WavyBackground waveOpacity={1} speed='slow' blur={0.1}/>
      <VerticalTimeline lineColor="#00ff00">
        {experienceData.experience.map((item, index) => {
          const { ref, inView } = useInView({
            
          });
          return (
            <div key={index} ref={ref} className="vertical-timeline-element">
              <VerticalTimelineElement
                contentStyle={{
                  background: 'rgba(255, 255, 255, 0.025)',
                  boxShadow: 'none',
                  border: '2px solid rgba(0, 0, 0, 0.55)',
                  textAlign: 'left',
                  padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{
                  borderRight: '0.6rem solid green',
                }}
                visible={inView}
                date={item.date}
                icon={<HandshakeOutlinedIcon/>}
                iconStyle={{
                  background: item.background,
                }}
              >
                <h3 className="font-extrabold capitalize text-red-600 text-2xl">{item.title}</h3>
                <p className="font-normal text-blue-500">{item.location}</p>
                <p className="!font-normal text-gray-400">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </div>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
