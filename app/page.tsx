import Hero from "@/sections/Hero";
import About from "../sections/About";
import TechStack from "@/sections/TechStack";
import Skills from "@/sections/Skills";
import Services from "@/sections/Services";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
// বাকি সেকশনগুলোও এভাবে ইমপোর্ট করো

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      <About/>
      <TechStack/>
      <Skills/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  );
}
