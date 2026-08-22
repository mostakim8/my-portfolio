import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
// import TechStack from "@/sections/TechStack";
import Skills from "@/sections/Skills";
import Services from "@/sections/Services";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import AIChatbot from "@/components/AIChatbot";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-slate-950 overflow-x-hidden">
      <Navbar />

      <div className="flex flex-col">
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="relative z-10">
          <About />
        </section>

        {/* <section id="tech-stack">
          <TechStack />
        </section> */}

        <section id="skills">
          <Skills />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>

      <Footer />

      <AIChatbot></AIChatbot>
    </main>
  );
}
