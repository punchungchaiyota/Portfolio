"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

import {
  ArrowLeft,
  FileText,
  ExternalLink,
  Smartphone,
} from "lucide-react";

// ================= DATA CONFIGURATION =================
const GitHubLink = "https://github.com/punchung/Appdentist";

const challenges = [
  {
    title: "Inconvenient Booking & Schedule Management",
    desc: "Users often experience friction when booking dental appointments through traditional phone calls or manual walk-in visits. This outdated approach frequently leads to unexpected, long waiting times at the clinic, overbooked slots, and severe difficulty for patients attempting to track or alter their personal treatment calendars.",
    icon: FileText,
    color: "group-hover:text-amber-400",
  },
];

const solutions = [
  {
    title: "Seamless Smartphone Dental Application",
    desc: "Designed and engineered a cross-platform mobile application utilizing Flutter that empowers patients to discover clinics, pick specific dentists, and secure immediate dental slots with real-time sync. This direct architecture cuts out the middleman phone communication, minimizes clinic crowding, and provides users with systematic push-reminders and complete treatment logs right in their pocket.",
    icon: Smartphone,
  },
];

// ================= ANIMATION CONFIGURATION =================
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function ProjectDentalPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030008] text-white selection:bg-purple-500/30">
      
      {/* Background Lighting Effects */}
      <div className="absolute left-[-10%] top-[-5%] h-[700px] w-[700px] rounded-full bg-purple-600/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-10%] h-[700px] w-[700px] rounded-full bg-fuchsia-500/10 blur-[180px] pointer-events-none" />

      {/* Retro Sci-fi Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20">
        <Navbar />

        {/* Back Link Row */}
        <div className="mb-14">
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
          className="relative"
        >
          {/* Subtle element ambient background glow */}
          <div className="absolute left-1/2 top-0 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[130px] pointer-events-none" />

          {/* Heading Tags */}
          <motion.div variants={fadeInUp} className="mb-5 flex items-center gap-3">
            <div className="h-[1px] w-8 bg-purple-400/70" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-purple-300">
              Mobile Development Case Study
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px]"
          >
            Dental Appointment{" "}
            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              Flutter Mobile App
            </span>
          </motion.h1>

          {/* Core App Information Meta Rows */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"
          >
            {/* Project Synopsis */}
            <div className="max-w-3xl">
              <p className="text-sm leading-8 text-white/60 md:text-[16px]">
                An advanced cross-platform mobile application developed to revolutionize patient onboarding and appointment workflow scheduling inside modern dental clinics. Built using Flutter and paired with a production-ready Firebase backend structure, the application empowers patients to discover trusted dentists, verify accessible openings in seconds, track care logs, and receive reminders automatically.
              </p>

              {/* Action Source Button Link */}
              <div className="mt-8">
                <a
                  href={GitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(168,85,247,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_50px_rgba(217,70,239,0.45)]"
                >
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-white/10" />
                  <span className="relative z-10">View Source Code</span>
                  <ExternalLink className="relative z-10 h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Meta Tags Column layout */}
            <div className="flex gap-12 border-t border-white/5 pt-6 lg:border-none lg:pt-0 shrink-0">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/30">Role</p>
                <p className="mt-1.5 text-sm font-medium text-purple-300">UX/UI & Mobile Dev</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/30">Platform</p>
                <p className="mt-1.5 text-sm font-medium text-white/80">Application</p>
              </div>
            </div>
          </motion.div>

          
{/* ================= PROBLEM & SOLUTION ================= */}
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={staggerContainer}
  className="mt-16"
>

  {/* Grid Layout */}
  <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
    
    {/* Problem Card */}
    <motion.div
      variants={cardVariant}
      className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7"
    >
      <div className="mb-6 inline-flex rounded-full bg-red-500/10 px-4 py-1.5">
        <span className="text-sm font-semibold text-red-300">
          Problem
        </span>
      </div>

      <div className="space-y-5">
        {challenges.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-red-400" />

            <div>
              <h3 className="text-sm md:text-[15px] font-semibold text-white leading-7">
                {item.title}
              </h3>

              <p className="mt-1 text-sm leading-7 text-white/50">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>

    {/* Solution Card */}
    <motion.div
      variants={cardVariant}
      className="rounded-2xl border border-purple-500/10 bg-purple-500/[0.03] p-7"
    >
      <div className="mb-6 inline-flex rounded-full bg-purple-500/10 px-4 py-1.5">
        <span className="text-sm font-semibold text-purple-300">
          Solution
        </span>
      </div>

      <div className="space-y-5">
        {solutions.map((sol, index) => (
          <div key={index} className="flex gap-4">
            <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-purple-400" />

            <div>
              <h3 className="text-sm md:text-[15px] font-semibold text-white leading-7">
                {sol.title}
              </h3>

              <p className="mt-1 text-sm leading-7 text-white/50">
                {sol.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
</motion.section>

        </motion.section>

        {/* ================= HIGH FIDELITY MOCKUP SHOWCASE ================= */}
        <motion.section className="mt-16">
          <div className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[1px] w-7 bg-purple-500" />
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-purple-400">Ecosystem Blueprint</p>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">User Interface Showcase</h2>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#07040d]">
            <Image
              src="/Dental Appointment App.png"
              alt="Complete Architecture User Experience Map & Screens Showcase"
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