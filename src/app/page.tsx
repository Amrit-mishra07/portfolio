import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CPStats from "@/components/CPStats";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

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
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
