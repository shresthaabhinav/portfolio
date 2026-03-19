"use client";
import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../styles/page";
import { educations } from "../../constants/page";
import { SectionWrapper } from "../../hoc/page";
import { textVariant } from "../../utils/page";

const ExperienceCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#2b2644",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <a href={education.link} target="_blank" className="flex justify-center items-center w-full h-full bg-white rounded-full p-2">
          <img
            src={education.image.src}
            alt={education.details}
            className="w-[100%] h-[100%] object-contain"
          />
        </a>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{education.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {education.details}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {education.points.map((point, index) => (
          <li
            key={`education-point-${index}`}
            className="text-white text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Education</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My academic journey so far
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {educations.map((item, index) => (
            <ExperienceCard key={`education-${index}`} education={item} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "education");
