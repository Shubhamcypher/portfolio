'use client';
import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useInView } from 'react-intersection-observer';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';

const TimelineElement = ({ item }: { item: object }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="vertical-timeline-element">
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
        icon={<HandshakeOutlinedIcon />}
        iconStyle={{
          background: item.background,
        }}
      >
        <h3 className="font-extrabold capitalize text-red-600 text-2xl">{item.title}</h3>
        <p className="font-normal text-blue-500">{item.location}</p>
        <p className="!font-normal text-gray-400">{item.description}</p>
      </VerticalTimelineElement>
    </div>
  );
};

export default TimelineElement;
