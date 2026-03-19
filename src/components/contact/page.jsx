"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../../styles/page";
import EarthCanvas from "../canvas/earth/page";
import Cube from "../cube/page";
import { SectionWrapper } from "../../hoc/page";
import { slideIn } from "../../utils/page";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Abhinav Shrestha",
          from_email: form.email,
          to_email: "shresthaabhinav5@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        },
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Do Check out my</p>
        <h3 className={styles.sectionHeadText}>Resume</h3>

<button className="relative overflow-hidden px-6 py-2 font-semibold text-white rounded-lg border-2 border-[#8B81BC] bg-transparent transition-colors duration-300 before:absolute before:top-0 before:left-[-100%] before:h-full before:w-full before:bg-[#8B81BC] before:z-0 before:transition-all before:duration-500 hover:before:left-0">
  <span className="relative z-10">Download CV</span>
</button>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
        {/* <Cube/> */}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
