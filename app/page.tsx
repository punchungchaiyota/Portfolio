import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Project from "@/components/Project";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Projects from "@/components/Project";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden min-h-screen relative">

      <Navbar />
      <Hero />
      <About />
      <section id="project">
        <Projects />
      </section>
      <Footer />
      <ScrollToTop />

    </main>
  );
}