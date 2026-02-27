import { IoGlobeOutline, IoSettings } from "react-icons/io5";
import { FaPaintBrush, FaLaptop } from "react-icons/fa";

import {
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: IoGlobeOutline,
  },
  {
    title: "Frontend Developer",
    icon: FaPaintBrush,
  },
  {
    title: "Backend Developer",
    icon: IoSettings,
  },
  {
    title: "FullStack Developer",
    icon: FaLaptop,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    details: "JavaScript Library",
    icon: "img/react.png",
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
    icon: "/img/next.png",
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
    icon: "img/express.png",
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
    icon: "img/mongodb.png",
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };