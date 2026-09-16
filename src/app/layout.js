import "./globals.css";
import { Poppins } from "next/font/google";
import LenisProvider from "@/components/LenisProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abhinav Shrestha",
  url: "https://www.abhinav-shrestha.com.np",
  jobTitle: "Full Stack Developer",
  email: "mailto:shresthaabhinav5@gmail.com",
  description:
    "Abhinav Shrestha is a full-stack developer with hands-on experience building production web applications end to end — from role-based access systems to payment integrations and ML-driven recommendation features. Skilled across React/Next.js, Node.js/Express, Laravel, and both SQL and NoSQL databases.",
  knowsAbout: [
    "Full-Stack Development",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Laravel",
    "JavaScript",
    "PHP",
    "Python",
    "MySQL",
    "MongoDB",
    "RESTful API Design",
    "Role-Based Access Control (RBAC)",
    "Retrieval-Augmented Generation (RAG)",
    "Machine Learning",
    "PyTorch",
    "NLP",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Locus Enterprises Pvt. Ltd.",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Tribhuvan University",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Software Developer",
    occupationLocation: {
      "@type": "Country",
      name: "Nepal",
    },
    skills:
      "Laravel, Next.js, Node.js, Express.js, MySQL, MongoDB, RBAC, RESTful APIs",
    description:
      "Builds and maintains web applications using Laravel, Next.js, MySQL, and RESTful APIs for applications serving a large, active user base. Implements Role-Based Access Control (RBAC) to secure application access across user roles. Optimizes backend APIs and database queries, contributing to full-stack feature delivery.",
  },
  workExample: [
    {
      "@type": "SoftwareSourceCode",
      name: "Vehicle Booking System",
      description:
        "Full-stack booking platform (Next.js, MongoDB) with role-based access for admin, partner, and user accounts, live route tracking via the Leaflet API, OTP-verified pickup/drop-off, and video KYC via ZEGOCLOUD for partner identity verification.",
      codeRepository: "https://github.com/shresthaabhinav",
      programmingLanguage: ["JavaScript", "Next.js", "MongoDB"],
    },
    {
      "@type": "SoftwareSourceCode",
      name: "Book Recommendation Platform",
      description:
        "Full-stack e-commerce application (MERN) with separate admin and user dashboards covering auth, inventory, cart, and checkout, eSewa payment integration, and a personalized recommendation engine using TF-IDF and cosine similarity.",
      codeRepository: "https://github.com/shresthaabhinav",
      programmingLanguage: ["JavaScript", "Python"],
    },
    {
      "@type": "SoftwareSourceCode",
      name: "Employee Management System",
      description:
        "MERN-stack HR platform with distinct admin and employee roles, attendance tracking, leave management, automated payroll/payslip generation, and department management.",
      codeRepository: "https://github.com/shresthaabhinav",
      programmingLanguage: "JavaScript",
    },
  ],
  sameAs: [
    "https://github.com/shresthaabhinav",
    "https://www.linkedin.com/in/shrestha-abhinav/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Abhinav Shrestha",
  alternateName: "Abhinav Shrestha Portfolio",
  url: "https://www.abhinav-shrestha.com.np",
  description:
    "Portfolio and personal website of Abhinav Shrestha, a full-stack developer specializing in React/Next.js, Node.js/Express, Laravel, and end-to-end web application development.",
  publisher: {
    "@type": "Person",
    name: "Abhinav Shrestha",
    url: "https://www.abhinav-shrestha.com.np",
  },
};

/** @type {import("next").Metadata} */
export const metadata = {
  metadataBase: new URL("https://www.abhinav-shrestha.com.np"),

  title: {
    default:
      "Abhinav Shrestha | Full-Stack Developer | React, Next.js & Laravel",
    template: "%s | Abhinav Shrestha",
  },

  description:
    "Portfolio of Abhinav, a MERN Stack Developer building modern full-stack web applications.",

  keywords: [
    "Abhinav Shrestha",
    "Full-Stack Developer",
    "Software Developer Nepal",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Laravel Developer",
    "MERN Stack Developer",
    "RESTful API Development",
    "Role-Based Access Control",
  ],

  authors: [
    {
      name: "Abhinav Shrestha",
      url: "https://www.abhinav-shrestha.com.np",
    },
  ],

  creator: "Abhinav Shrestha",
  publisher: "Abhinav Shrestha",

  category: "technology",

  alternates: {
    canonical: "https://www.abhinav-shrestha.com.np",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  sameAs: [
    "https://www.facebook.com/shrestha.abhinav.5",
    "https://github.com/shresthaabhinav",
    "https://www.linkedin.com/in/shrestha-abhinav",
  ],
  email: "mailto:shresthaabhinav5@gmail.com",

  openGraph: {
    title: "Abhinav | MERN Stack Developer",
    description:
      "Portfolio of Abhinav, a MERN Stack Developer building modern full-stack web applications.",
    url: "https://www.abhinav-shrestha.com.np/",
    siteName: "Abhinav Portfolio",
    images: [
      {
        url: "/project/og_image.png",
        width: 1200,
        height: 630,
        alt: "Abhinav Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abhinav Shrestha - Full Stack Developer | Portfolio",
    description:
      "Portfolio of Abhinav, a MERN Stack Developer building modern full-stack web applications.",
    images: ["/project/og_image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <LenisProvider>{children}</LenisProvider>

        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </body>
    </html>
  );
}
