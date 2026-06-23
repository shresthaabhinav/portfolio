import { IoGlobeOutline, IoSettings } from "react-icons/io5";
import { FaPaintBrush, FaLaptop } from "react-icons/fa";
import { dav, prasadi, tribhuvan } from "../assets";

import {
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "React Developer",
    image: "/img/react.webp",
    desc: "Developed interactive and responsive web interfaces using React.js and JSX."
  },
  {
    title: "Next.js Developer",
    image: "/img/next.webp",
    desc: "Implemented routing, API routes and dynamic data fetching with better performance."
  },
  {
    title: "Express Developer",
    image: "/img/express.webp",
    desc: "Developed RESTful APIs and backend services of crud operations using Express.js."
  },
  {
    title: "MERN Developer",
    image: "/img/mongodb.webp",
    desc: "Currently Developing & maintaining full-stack web applications using MERN Stack."
  },
];

const projects = [
  {
    id: 1,
    title: "Locus Enterprises Pvt Ltd",
    src: "/project/locus.webp",
    link: "https://locusenterprises.com.np",
    desc: "Business website built for Locus Enterprises Pvt Ltd with modern UI and responsive design.",
  },
  {
    id: 2,
    title: "Conceptual Frame Solutions",
    src: "/project/cfs.webp",
    link: "https://conceptualframe.com",
    desc: "Business website for Conceptual Frame Solutions Pvt Ltd with modern UI and responsive design.",
  },
  {
    id: 3,
    title: "Employee Management System",
    src: "/project/ems.webp",
    link: "https://employee-management-system-abhinav.vercel.app/",
    desc: "My personal web application used to manage employee-related information and workplace operations built using MERN stack.",
  },
  {
    id: 4,
    title: "Personal Portfolio",
    src: "/project/abhinav.webp",
    link: "https://abhinav-shrestha.com.np",
    desc: "My personal portfolio website which has my contacts and information built using Next.js.",
  },
  {
    id: 5,
    title: "Book Recommendation System",
    src: "/project/kitabPasal.webp",
    link: "https://github.com/shresthaabhinav?tab=repositories",
    desc: "This is my final year project built using the MERN stack with an integrated AI-based recommendation system using Python",
  },
];

const experience = [
  {
    title: "React.js Developer",
    details: "JavaScript Library",
    icon: "img/react.webp",
    iconBg: "#383E56",
    date: "Mar 2024 - Dec 2024",
    points: [
      "Developed interactive and responsive web interfaces using React.js and JSX.",
      "Managed component state and props to build dynamic UIs.",
      "Collaborated with designers and developers to implement reusable components.",
      "Optimized performance using virtual DOM and React best practices.",
    ],
  },
  {
    title: "Next.js Developer",
    details: "React Framework",
    icon: "/img/next.webp",
    iconBg: "#E6DEDD",
    date: "Jan 2025 - May 2025",
    points: [
      "Built server-side rendered and statically generated pages using Next.js.",
      "Implemented routing, API routes, and dynamic data fetching with Next.js.",
      "Optimized web apps for SEO, performance, and user experience.",
      "Worked closely with frontend and backend teams to integrate features seamlessly.",
    ],
  },
  {
    title: "Express.js Developer",
    details: "Backend Framework for Node.js",
    icon: "img/express.webp",
    iconBg: "#383E56",
    date: "Jun 2025 - Dec 2025",
    points: [
      "Developed RESTful APIs and backend services using Express.js.",
      "Implemented middleware for authentication, logging, and error handling.",
      "Integrated Express server with MongoDB to manage application data.",
      "Collaborated with frontend developers to connect APIs and handle data flow.",
    ],
  },
  {
    title: "Full Stack Developer",
    details: "MERN Stack",
    icon: "img/mongodb.webp",
    iconBg: "#E6DEDD",
    date: "Jan 2026 - Present",
    points: [
      "Developing and maintaining full-stack web applications using React.js, Next.js, Express.js, and MongoDB.",
      "Designing scalable databases and server-side APIs for dynamic web applications.",
      "Implementing responsive frontend interfaces and integrating with backend services.",
      "Ensuring code quality through testing, code reviews, and collaboration with cross-functional teams.",
    ],
  },
];

const educations = [
  {
    title: "School Education (Grade 10)",
    details: "DAV Sushil Kedia Vishwa Bharati School",
    image: dav,
    date: "Completed Grade 10 (2018)",
    link: "https://davnepal.com/",
    points: [
      "Completed secondary level education with a GPA of 3.65.",
      "Focused on Accounts and Optional Mathematics as major subjects.",
      "Built strong foundations in mathematics, problem solving, and analytical thinking.",
    ],
  },
  {
    title: "Higher Secondary Education (Grade 11–12)",
    details: "Prasadi Academy",
    image: prasadi,
    date: "+2 in Science Stream (2019-2021)",
    link: "https://prasadi.edu.np/",
    points: [
      "Completed higher secondary education with a GPA of 3.64.",
      "Studied in the Science stream with focus on analytical and technical subjects.",
      "Developed strong logical reasoning and scientific problem-solving skills.",
    ],
  },
  {
    title: "Bachelor's Degree",
    details: "National College of Computer Studies (NCCS) – Affiliated to Tribhuvan University",
    image: tribhuvan,
    link: "https://nccs.edu.np/college",
    date: "Bachelor of Science in Computer Science and Information Technology (2022-2026)",
    points: [
      "Completed Bachelor's degree with 76%.",
      "Gained knowledge in software development, databases, and programming concepts.",
      "Worked on academic projects related to web development and software systems.",
    ],
  },
  // {
  //   title: "Master's Degree",
  //   details: "XYZ University",
  //   image: dav,
  //   date: "Masters of Science in Computer Science (2028 - Present)",
  //   points: [
  //     "Pursuing a Master's degree in Computer Science.",
  //     "Expanding knowledge in advanced software development and system design.",
  //     "Working on research and advanced projects related to modern web technologies.",
  //   ],
  // },
];

export { services, technologies, educations, testimonials, projects };