"use client";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiDjango,
  SiLaravel,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
} from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";

export default function OurClients() {
  const clients = [
    { icon: <SiReact />, name: "React" },
    { icon: <SiMongodb />, name: "Mongodb" },
    { icon: <SiNextdotjs />, name: "Nextjs" },
    { icon: <SiTypescript />, name: "Typescript" },
    { icon: <SiTailwindcss />, name: "Tailwind Css" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <DiNodejsSmall />, name: "Node.js" },
    { icon: <SiLaravel />, name: "Laravel" },
  ];

  const repeated = [...clients, ...clients, ...clients];

  const [dir, setDir] = useState(-1);
  const [active, setActive] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const touchY = useRef(null);
  const x = useMotionValue(0);

  // Detect client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  // IntersectionObserver
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting && entry.intersectionRatio > 0.1);
      },
      { threshold: [0.1] },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Wheel & touch events - optimized with throttling
  useEffect(() => {
    if (!active) return;

    let lastWheelTime = 0;
    const WHEEL_THROTTLE = 100; // Increased to 100ms to prevent excessive state updates

    const onWheel = (e) => {
      const now = Date.now();
      if (now - lastWheelTime < WHEEL_THROTTLE) return;

      lastWheelTime = now;
      setDir(e.deltaY > 0 ? -1 : 1);
    };

    const onTouchStart = (e) => (touchY.current = e.touches[0].clientY);

    let lastTouchTime = 0;
    const TOUCH_THROTTLE = 100; // Increased to 100ms

    const onTouchMove = (e) => {
      const now = Date.now();
      if (now - lastTouchTime < TOUCH_THROTTLE) return;

      if (touchY.current == null) return;
      const delta = e.touches[0].clientY - touchY.current;
      setDir(delta > 0 ? 1 : -1);
      touchY.current = e.touches[0].clientY;
      lastTouchTime = now;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [active]);

  // Animation loop
  useEffect(() => {
    if (!isClient) return;

    let id;
    let last = performance.now();
    const speed = 80;

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;

      let next = x.get() + speed * dir * dt;
      const loop = trackRef.current?.scrollWidth / 2 || 0;

      if (loop) {
        if (next <= -loop) next += loop;
        if (next >= 0) next -= loop;
      }

      x.set(next);
      id = requestAnimationFrame(tick);
    };

    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [dir, x, isClient]);

  return (
    <section
      id="ourClients"
      ref={sectionRef}
      className="max-w-[1660px] mx-auto w-full pt-4 pb-14 flex flex-col items-center justify-center text-black relative"
    >
      {/* Heading */}
      <motion.h2
        className="mt-2 text-white text-base sm:text-lg"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Technologies
      </motion.h2>

      <motion.p
        className="text-4xl mt-2 sm:text-5xl md:text-6xl font-semibold text-white"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        That I am expert in
      </motion.p>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden mt-4">
        {isClient && (
          <motion.div
            ref={trackRef}
            className="flex gap-10"
            style={{ x, whiteSpace: "nowrap", willChange: "transform" }}
          >
            {repeated.map((s, i) => (
              <div
                key={i}
                className="mt-2 bg-white hover:bg-[#2b2644] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 px-4 py-6 border border-zinc-300 min-w-[300px] rounded-xl flex flex-col items-center group cursor-pointer"
              >
                <div className="text-6xl text-black group-hover:text-white transition-colors duration-300 mb-4">
                  {s.icon}
                </div>

                <div className="mt-2 flex flex-col items-center text-center">
                  <p className="text-black group-hover:text-white transition-colors duration-300 text-base font-medium">
                    {s.name}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
