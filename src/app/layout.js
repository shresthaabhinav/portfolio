import "./globals.css";
import { Poppins } from "next/font/google";
import LenisProvider from "@/components/LenisProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Abhinav Shrestha - Full Stack Developer | Portfolio",
  description:
    "Portfolio of Abhinav, a MERN Stack Developer building modern full-stack web applications.",

  metadataBase: new URL("https://abhinav-shrestha.com.np"),

  alternates: {
    canonical: "https://abhinav-shrestha.com.np",
  },

  openGraph: {
    title: "Abhinav | MERN Stack Developer",
    description:
      "Portfolio of Abhinav, a MERN Stack Developer building modern full-stack web applications.",
    url: "https://abhinav-shrestha.com.np/",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <LenisProvider>
        {children}
        </LenisProvider>
      </body>
    </html>
  );
}