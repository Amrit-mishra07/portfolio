import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CPStats from "@/components/CPStats";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CPStats />
        <Projects />
        <Skills />
        <About />
      </main>
      <Footer />
    </>
  );
}
