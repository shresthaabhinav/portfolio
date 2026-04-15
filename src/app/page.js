import Navbar from "../components/navbar/page";
import Hero from "../components/hero/page";
import About from "@/components/about/page";
import Education from "@/components/experience/page";
import Resume from "@/components/resume/page";
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
    <Education/>
    <Tech/>
    <div>
      <Resume/>
      {/* <StarsCanvas/> */}
    </div>
  </div>
);
}
