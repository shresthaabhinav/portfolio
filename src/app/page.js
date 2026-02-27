import Navbar from "../components/navbar/page";
import Hero from "../components/hero/page";
import About from "@/components/about/page";
import Experience from "@/components/experience/page";
import Contact from "@/components/contact/page";
import { StarsCanvas } from "@/components/canvas";
import Tech from "@/components/tech/page";

export default function Home() {
  return(
   <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
    <Navbar/>
    <Hero/>
      </div> 
    <About/> 
    <Experience/>
    <Tech/>
    <div>
      <Contact/>
      <StarsCanvas/>
    </div>
  </div>
);
}
