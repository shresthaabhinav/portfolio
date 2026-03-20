"use client";
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles/page";
import Cube from "../cube/page";
import { SectionWrapper } from "../../hoc/page";
import { slideIn } from "../../utils/page";
import { MdOutlineFileDownload } from "react-icons/md";

const CV_URL = "@/assets/cv/abhinav_shresthaCV.pdf";

const Resume = () => {
  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden">

      {/* Left — CV download */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:flex-[0.75] w-full bg-black-100 p-8 rounded-2xl flex flex-col justify-center gap-6"
      >
        <div>
          <p className={styles.sectionSubText}>Do check out my</p>
          <h3 className={styles.sectionHeadText}>Resume</h3>
        </div>

        <p className="text-secondary text-[14px] leading-[28px]">
          Get a detailed overview of my skills, experience, and projects.
          Feel free to download and keep a copy.
        </p>

        <motion.a
          href={CV_URL}
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-fit relative overflow-hidden px-8 py-3 font-semibold text-white rounded-lg border-2 border-[#8B81BC] bg-transparent before:absolute before:top-0 before:left-[-100%] before:h-full before:w-full before:bg-[#8B81BC] before:z-0 before:transition-all before:duration-500 hover:before:left-0 transition-colors duration-300 flex items-center gap-2"
        >
          <MdOutlineFileDownload className="relative z-10 text-xl" />
          <span className="relative z-10">Download CV</span>
        </motion.a>
      </motion.div>

      {/* Right — Cube canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 w-full h-[300px] sm:h-[400px] md:h-[500px] xl:h-[550px]"
      >
        <Cube />
      </motion.div>

    </div>
  );
};

export default SectionWrapper(Resume, "resume");