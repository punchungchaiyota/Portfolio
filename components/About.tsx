"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  AcademicCapIcon,
  CommandLineIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

export default function About() {
  const fadeInUp: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden max-w-7xl mx-auto px-6 py-24 text-white"
    >
      {/* Glow */}
      <div className="absolute top-0 left-[-10%] w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-fuchsia-500/10 blur-[120px] rounded-full" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="relative z-10 rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.45)] p-6 md:p-10 lg:p-14"
      >
        <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
          
          {/* LEFT */}
          <div className="space-y-6">
            
            {/* Profile */}
            <div className="relative group w-full max-w-[240px] mx-auto lg:mx-0">
              <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-b from-purple-500 to-fuchsia-500 blur opacity-20 group-hover:opacity-40 transition duration-500" />

              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#120a21]">
                <Image
                  src="/IMG_Punchung.PNG"
                  alt="Punchung Chaiyota"
                  width={240}
                  height={320}
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition duration-700"
                />
              </div>
            </div>

            {/* Contact */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-300 mb-5">
                Contact
              </h3>

              <div className="space-y-3">
                <a
                  href="tel:0627658819"
                  className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm text-gray-300 hover:border-purple-500/30 transition"
                >
                  <PhoneIcon className="w-4 h-4 text-purple-400" />
                  062-765-8819
                </a>

                <a
                  href="mailto:Punchungchaiyota@gmail.com"
                  className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm text-gray-300 hover:border-purple-500/30 transition"
                >
                  <EnvelopeIcon className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="truncate">
                    Punchungchaiyota@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-8">
            
            {/* Heading */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-purple-400" />

                <p className="uppercase tracking-[0.25em] text-xs font-semibold text-purple-400">
                  About Me
                </p>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Punchung{" "}
                <span className="text-purple-300">
                  Chaiyota
                </span>
              </h2>

              <p className="mt-6 text-gray-300 leading-8 max-w-3xl text-[15px]">
                  My name is Punchung Chaiyota.I graduated with a Bachelor's degree in Information Technology 
                  from Kasetsart University. I am interested in User Experience and User Interface Design and intend to start a career in 
                  this field to develop my skills and experience in designing functional 
                  and aesthetically pleasing designs.
              </p>

             
            </div>
            {/* Skills */}
            <div className="grid md:grid-cols-3 gap-5">
              
              {/* UX/UI */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:border-purple-500/30 transition">
                <div className="flex items-center gap-2 mb-5">
                  <SparklesIcon className="w-4 h-4 text-purple-400" />

                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em]">
                    Skill
                  </h4>
                </div>

                <ul className="space-y-3 text-sm text-gray-400">
                  {[
                    "User Research",
                    "User Flow & IA",
                    "Wireframe & Prototype",
                    "Responsive Design",
                    "UI Design (Web & Mobile)",
                    "UX Improvement",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:border-fuchsia-500/30 transition">
                <div className="flex items-center gap-2 mb-5">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em]">
                    Technical Skills
                  </h4>
                </div>

                <ul className="space-y-3 text-sm text-gray-400">
                  {[
                    "Data Structure & Diagram Design",
                    "Python, HTML, JavaScript",
                    "Flutter, Dart, React.js (Basic)",
                    "SQL, Power BI",
                    "Basic Data Analysis",
                    "Robot Framework / Automated Testing (Basic)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                      {item}
                    </li>
                  ))}
                </ul>
               
              </div>
              {/* Tools */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:border-purple-500/30 transition">
                <div className="flex items-center gap-2 mb-5">
            
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em]">
                    Tools
                  </h4>
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    "Figma",
                    "Canva",
                    "Framer",
                    "Adobe Photoshop",
                  ].map((tool, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 rounded-2xl bg-white/[0.04] border border-white/10 text-sm text-gray-300"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
         {/* Work Experience */}
<div className="mt-10">
  <div className="flex items-center gap-3 mb-6">
    <AcademicCapIcon className="w-5 h-5 text-purple-400" />

    <h3 className="text-xl font-semibold text-white">
      Education & Work Experience
    </h3>
  </div>

  <div className="relative border-l border-white/10 pl-8 space-y-8">
    
    {/* Item 2 */}
    <div className="relative">
      <div className="absolute -left-[38px] top-1 w-4 h-4 rounded-full bg-fuchsia-400 shadow-[0_0_20px_rgba(217,70,239,0.8)]" />

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 hover:border-fuchsia-500/30 transition">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h4 className="text-white font-semibold">
              Bachelor of Information Technology
            </h4>

            <p className="text-sm text-fuchsia-300 mt-1">
              Kasetsart University Kamphaeng Saen Campus
            </p>
          </div>

          <span className="text-xs text-gray-500">
            2022 - Graduate2026 
          </span>
        </div>
      </div>
    </div>
    
    {/* Item 1 */}
    <div className="relative">
      <div className="absolute -left-[38px] top-1 w-4 h-4 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.8)]" />

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 hover:border-purple-500/30 transition">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h4 className="text-white font-semibold">
              UX/UI Designer Intern
            </h4>

            <p className="text-sm text-purple-300 mt-1">
              Assign Dev Company
            </p>
          </div>

          <span className="text-xs text-gray-500">
            Nov 2025 – Mar 2026
          </span>
        </div>

        <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-400">
  <li className="flex gap-3">
    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />

    <span>
      Designed UI for web and mobile platforms for the
      SakitBrian application, including game feature design.
    </span>
  </li>

  <li className="flex gap-3">
    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />

    <span>
      Created user flows and designed the UI for the W Chat .
    </span>
  </li>

  <li className="flex gap-3">
    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />

    <span>
      Designed Facebook Ads to promote the game and increase engagement.
    </span>
  </li>
</ul>
      </div>
    </div>
  </div>
</div>
      </motion.div>
    </section>
  );
}