"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import React from "react";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/shrestha.abhinav.5",
    color: "#1877F2",
    icon: FaFacebook,
  },
  {
    label: "GitHub",
    href: "https://github.com/shresthaabhinav",
    color: "#6e40c9",
    icon: FaGithub,
  },
  {
    label: "Email",
    href: "mailto:shresthaabhinav5@gmail.com",
    color: "#FF6B4A",
    icon: SiGmail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shrestha-abhinav/",
    color: "#0A66C2",
    icon: FaLinkedinIn,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="relative w-full overflow-hidden">
      {/* Ambient gradient blobs, echoing the hero */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-40 -left-24 w-[60vw] max-w-[420px] h-[60vw] max-h-[420px] rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-[0.08] blur-[120px]" />
        <div className="absolute -top-24 right-0 w-[50vw] max-w-[380px] h-[50vw] max-h-[380px] rounded-full bg-gradient-to-r from-[#1e3c72] via-[#2a5298] to-[#4facfe] opacity-[0.08] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="flex justify-center">
          {/* Socials */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-items-center sm:justify-center gap-3 sm:gap-4">
            {SOCIAL_LINKS.map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  whileHover={{ y: -3 }}
                  className="group relative flex items-center gap-2.5 pl-2.5 pr-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm text-gray-300 hover:text-white hover:border-white/20 transition-colors duration-200"
                >
                  {/* Pulsing glow ring behind the icon */}
                  <span className="relative flex items-center justify-center w-8 h-8 shrink-0">
                    <motion.span
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: social.color }}
                      animate={{ scale: [1, 1.7, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.4,
                      }}
                    />
                    <span
                      className="relative flex items-center justify-center w-8 h-8 rounded-full text-white"
                      style={{ backgroundColor: social.color }}
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                  </span>

                  <span className="text-sm font-medium whitespace-nowrap">
                    {social.label}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-400">
          <p>&copy; {year} Abhinav Shrestha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
