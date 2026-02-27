"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";

import { styles } from "../../styles/page";
import { services } from "../../constants/page";
import { SectionWrapper } from "../../hoc/page";
import { fadeIn, textVariant } from "../../utils/page";

const ServiceCard = ({ index, title, icon: Icon }) => (
  <Tilt className="xs:w-[250px] w-full" tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={450}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full bg-gradient-to-r from-[#2B2644] via-[#403964] to-[#8B81BC] p-[2px] rounded-[8px] shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="bg-tertiary rounded-[20px] py-8 px-6 min-h-[280px] flex flex-col items-center justify-center gap-6">
        <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white/20 shadow-md">
          <Icon className="text-gray-100" size={48} />
        </div>
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      I'm a software developer with experience in JavaScript, and expertise in frameworks like React.js, and Next.js.
    </motion.p>

   <div className="mt-20 flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-10 justify-center overflow-x-auto md:overflow-x-visible">
  {services.map((service, index) => (
    <ServiceCard key={service.title} index={index} {...service} />
  ))}
</div>
  </>
);

export default SectionWrapper(About, "about");
