import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Divider = () => (
  <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
    <div className="h-px bg-white/[0.05]" />
  </div>
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#050810]">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Achievements />
        <Divider />
        <Contact />
      </main>
    </>
  );
}
