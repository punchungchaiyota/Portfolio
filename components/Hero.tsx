"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("projects");

      if (!projectsSection) return;

      const rect = projectsSection.getBoundingClientRect();

      // ถ้ายังอยู่ฝั่ง Hero
      if (rect.top > window.innerHeight / 2) {
        window.history.replaceState(null, "", "/");
      } else {
        // ถ้าเลื่อนถึง Projects
        window.history.replaceState(null, "", "#projects");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 overflow-hidden">
      
      {/* Purple Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-purple-700 opacity-80 blur-[180px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 mt-10">

        {/* Title */}
        <h1 className="text-7xl md:text-8xl font-semibold tracking-tight">
          Portfolio
        </h1>

        {/* Subtitle */}
        <h2 className="text-5xl md:text-7xl italic font-light mt-2 text-white/90">
          UX/UI Designer (Junior)
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto mt-10 text-lg leading-relaxed text-white/75">
          My name is Punchung Chaiyota. I graduated with a Bachelor's degree in
          Information Technology from Kasetsart University. I am interested in
          User Experience and User Interface Design and intend to start a career
          in this field to develop my skills and experience in designing
          functional and aesthetically pleasing designs.
        </p>

        {/* Button */}
        <Link
          href="#projects"
          className="mt-10 inline-flex px-8 py-4 rounded-full bg-white text-black text-lg font-medium hover:scale-105 duration-300"
        >
          Go to Project
        </Link>

      </div>
    </section>
  );
}