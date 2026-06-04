"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { textVariant } from "../../utils/page";
import { styles } from "../../styles/page";
import { SectionWrapper } from "../../hoc/page";
import { projects } from "../../constants/page";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// const items = [
//   {
//     id: 1,
//     title: "Locus Enterprises Pvt Ltd",
//     src: "/project/locus.png",
//     link: "https://locusenterprises.com.np",
//     desc: "Business website built for Locus Enterprises with modern UI and responsive design.",
//   },
//   {
//     id: 2,
//     title: "Conceptual Frame Solutions",
//     src: "/project/cfs.png",
//     link: "https://conceptualframe.com",
//     desc: "Creative agency website for Conceptual Frame Solutions with modern UI and responsive design.",
//   },
//   {
//     id: 3,
//     title: "Personal Portfolio",
//     src: "/project/abhinav.png",
//     link: "https://abhinav-shrestha.com.np",
//     desc: "My personal portfolio website built using Next.js.",
//   },
// ];

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Projects
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Developed so far
        </h2>
      </motion.div>

      <div className="w-full mt-20">
        <Carousel opts={{ loop: true, align: "start" }} className="w-full">
          <CarouselContent className="-ml-4">
            {projects.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 basis-[85%] md:basis-[48%] lg:basis-[42%]"
              >
                <div
                  onClick={() => window.open(item.link, "_blank")}
                  className="cursor-pointer group"
                >
                  {/* IMAGE */}
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover brightness-75 transition-all duration-300 group-hover:brightness-100 group-hover:scale-105"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-white text-lg font-semibold mt-3">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-white/70 text-sm mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");