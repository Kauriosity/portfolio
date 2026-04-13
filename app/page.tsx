import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="divider max-w-6xl mx-auto" />
        <About />
        <div className="divider max-w-6xl mx-auto" />
        <Skills />
        <div className="divider max-w-6xl mx-auto" />
        <Projects />
        <div className="divider max-w-6xl mx-auto" />
        <Experience />
        <div className="divider max-w-6xl mx-auto" />
        <Achievements />
        <div className="divider max-w-6xl mx-auto" />
        <Contact />
      </main>
    </>
  );
}
