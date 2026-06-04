"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

import {
  ArrowLeft,
} from "lucide-react";

// ================= ANIMATION CONFIGURATION =================
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ProjectPetPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030008] text-white font-sans selection:bg-purple-500/30">
      
      {/* Ambient Background Glows */}
      <div className="absolute left-[-10%] top-[-5%] h-[700px] w-[700px] rounded-full bg-purple-600/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-10%] h-[700px] w-[700px] rounded-full bg-fuchsia-500/10 blur-[180px] pointer-events-none" />
      <div className="absolute top-[40%] left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-500/5 blur-[150px] pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <Navbar />

        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/40 transition hover:text-purple-400"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition duration-300 group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </div>

        {/* ================= HERO SECTION ================= */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative pt-4 md:pt-6"
        >
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[140px] pointer-events-none" />

          <div className="relative">
            {/* Top Tag Label */}
            <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-3">
              <div className="h-[1px] w-8 bg-purple-400/70" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-purple-300">
                Internship Project
              </span>
            </motion.div>

            {/* Main Application Title */}
            <motion.div variants={fadeInUp} className="max-w-4xl">
              <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[64px]">
                Sakit Brain —{" "}
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
                  Designed Feature
                </span>
              </h1>
            </motion.div>
            {/* Split Description & Meta Elements */}
            <motion.div variants={fadeInUp} className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              
              {/* Left Side Content */}
              <div className="max-w-3xl">
                <p className="text-sm leading-8 text-white/60 md:text-[16px]">
                  Responsible for designing and improving features within a Brain Training Application to enhance user engagement and optimize the overall user experience. Participated in the website redesign process by creating modern, user-centered interfaces and improving usability through thoughtful design solutions.
                  Also contributed to the creation of promotional and marketing assets to support product campaigns, improve brand visibility, and maintain a consistent visual identity across digital platforms.
                </p>
              </div>
              {/* Right Side Metadata Details */}
              <div className="flex gap-12 border-t border-white/5 pt-6 lg:border-none lg:pt-0 shrink-0">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/30">Role</p>
                  <p className="mt-2 text-sm font-medium text-purple-300">UX/UI Designer</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/30">Platform</p>
                  <p className="mt-2 text-sm font-medium text-white/80">Application</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
        {/* ================= UI HIGH-FIDELITY SHOWCASE ================= */}
        <motion.section className="mt-16">
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[1px] w-7 bg-purple-500" />
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-purple-400">Feature</p>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Test Result Sharing Feature</h2>
            <p className="mt-6 max-w-6xl text-base leading-8 text-white/60">
               Designed and developed a feature that allows users to share quiz results directly to social media platforms such as Instagram and Facebook. Focused on creating visually engaging and memorable designs to increase user interaction, improve engagement, and promote application awareness. This feature was developed as part of an internship training project.</p>
          </div>
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#07040d]">
            <Image
              src="/Share-Test.png"
              alt="WeChat Interface Presentation Mockups"
              width={1900}
              height={1200}
              className="w-full h-auto object-cover transition duration-700 hover:scale-[1.01]"
            />
          </div>
        </motion.section>
{/* ================= UI HIGH-FIDELITY SHOWCASE ================= */}
        <motion.section className="mt-16">
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[1px] w-7 bg-purple-500" />
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-purple-400">Feature</p>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">UI Results Test (Mock up)</h2>
            <p className="mt-6 max-w-6xl text-base leading-8 text-white/60">
              Created mockup preview images for shared quiz results to make the content more visually appealing and easier to understand before sharing on social media. Conducted research from various websites and platforms to study effective ways of presenting summarized information clearly, concisely, and attractively for users. Focused on improving readability, visual hierarchy, and user engagement through simple and memorable designs.</p>
          </div>
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#07040d]">
            <Image
              src="/ResultsTest(Mock up).png"
              alt="WeChat Interface Presentation Mockups"
              width={1900}
              height={1200}
              className="w-full h-auto object-cover transition duration-700 hover:scale-[1.01]"
            />
          </div>
        </motion.section>

        {/* ================= UI HIGH-FIDELITY SHOWCASE ================= */}
        <motion.section className="mt-16">
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[1px] w-7 bg-purple-500" />
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-purple-400">Redesign Website</p>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Redesign SakitBrain Website</h2>
            <p className="mt-6 max-w-6xl text-base leading-8 text-white/60">
              Designed engaging and visually appealing content to promote and update new in-game features and functions, helping improve user engagement and application awareness.</p>
          </div>
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#07040d]">
            <Image
              src="/Redesign-SakitBrian WebSite.png"
              alt="Interface Presentation Mockups"
              width={1900}
              height={1200}
              className="w-full h-auto object-cover transition duration-700 hover:scale-[1.01]"
            />
          </div>
        </motion.section>

        {/* ================= UI HIGH-FIDELITY SHOWCASE ================= */}
        <motion.section className="mt-16">
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[1px] w-7 bg-purple-500" />
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-purple-400">Feature</p>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Age Captcha </h2>
            <p className="mt-6 max-w-6xl text-base leading-8 text-white/60">
              Designed an age verification system to screen user access and separate child and adult profiles by requiring users to answer all verification questions correctly before proceeding. The system was created to improve user safety, provide better parental control, and ensure that content is displayed appropriately for different age groups.</p>
          </div>
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#07040d]">
            <Image
              src="/Age-Captcha.png"
              alt="WeChat Interface Presentation Mockups"
              width={1900}
              height={1200}
              className="w-full h-auto object-cover transition duration-700 hover:scale-[1.01]"
            />
          </div>
        </motion.section>
      </div>
      <ScrollToTop />
    </section>
  );
}