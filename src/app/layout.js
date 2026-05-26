import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins", // optional (for Tailwind usage)
});

export const metadata = {
  title: "Abhinav Shrestha | Developer",
  description: "I’m a MERN Stack Developer passionate about building modern, responsive, and user-friendly web applications. I specialize in MongoDB, Express.js, React.js, and Node.js to create full-stack solutions with clean UI, scalable backend architecture, and seamless user experiences. My portfolio showcases projects ranging from dynamic web applications to real-time systems, highlighting my skills in frontend development, backend APIs, database management, and problem-solving. I enjoy turning ideas into functional digital products and continuously learning new technologies to improve my development skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        {children}
      </body>
    </html>
  );
}