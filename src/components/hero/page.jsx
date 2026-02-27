"use client";

import { motion } from "framer-motion";
import React, { useMemo, useState } from "react";

export default function Home() {
  const roles = useMemo(() => ["Software Developer", "Web Developer"], []);

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  React.useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex < current.length) setSubIndex((v) => v + 1);
        else if (!deleting && subIndex === current.length)
          setTimeout(() => setDeleting(true), 1200);
        else if (deleting && subIndex > 0) setSubIndex((v) => v - 1);
        else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((p) => (p + 1) % roles.length);
        }
      },
      deleting ? 40 : 60,
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <>
      <section id="home" className="w-full h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute -top-32 -left-32 w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"
          ></div>
          <div
            className="absolute bottom-38 right-0 w-[70vw] sm:w-[z-500vw] md:w-[40vw] h-[70vw] sm:h-[50vw] md:h-[40vw] max-w-[500px] rounded-full bg-gradient-to-r from-[#1e3c72] via-[#2a5298] to-[#4facfe] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"
          ></div>
        </div>

        {/* LEFT */}
        <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
            <div className="w-full lg:pr-24 mx-auto max-w-[48rem]">
              <motion.div
                className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00aaff] via-[#0077ff] to-[#0044ff] tracking-wide min-h-[1.6em]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span>{roles[index].substring(0, subIndex)}</span>
                <span
                  className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle"
                  style={{ height: "1em" }}
                ></span>
              </motion.div>
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-white drop-shadow-lg"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Abhinav
                <br />
                <span className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap">
                  Shrestha
                </span>
              </motion.h1>

              <motion.p
                className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Kathmandu, Nepal
              </motion.p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative hidden lg:flex justify-center items-center">
            {/* Circle container */}
            <div
              className="relative rounded-full flex justify-center items-center"
              style={{ width: "22rem", height: "22rem" }}
            >
              {/* Animated ring */}
              <div
                className="absolute rounded-full border-4 border-gray-500"
                style={{
                  width: "100%",
                  height: "100%",
                  animation: "pulse-ring 4s infinite ease-in-out",
                }}
              ></div>

              {/* Inner image */}
              <img
                src="/img/abhi.jpg"
                alt="Avatar"
                className="rounded-full object-cover shadow-lg"
                style={{ width: "21.5rem", height: "21.5rem" }}
              />
            </div>
          </div>
        </div>
        <div className="flex md:hidden lg:flex absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 bg-gray-100 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
