"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

import {
  ArrowLeft,
  ShieldCheck,
  FileText,
  Clock3,
  ExternalLink,
  Cat,
  Home,
  Users,
} from "lucide-react";

// ================= DATA CONFIGURATION =================
const figmaLink =
  "https://www.figma.com/design/qMfvIaFOvDstSqpfnjgNL3/Intern-Project-by-Punchung-Chaiyota?node-id=1-2";

const challenges = [
  {
    title: "Scattered Pet Management",
    desc: "Pet care information, medical charts, and vaccination schedules are often split across multiple platforms or paper documents, making it overwhelming for pet owners to keep track.",
    icon: FileText,
    color: "group-hover:text-amber-400",
  },
  {
    title: "Time-Consuming Service Searches",
    desc: "When immediate care is needed, finding trusted, nearby animal hospitals, professional grooming centers, or specialized emergency medical services takes too much critical time.",
    icon: Clock3,
    color: "group-hover:text-purple-400",
  },
  {
    title: "Lack of Trusted Community Support",
    desc: "Many pet owners lack a dedicated, centralized environment to ask questions, share caretaking advice, and learn from real experiences of other pet lovers.",
    icon: ShieldCheck,
    color: "group-hover:text-emerald-400",
  },
];

const solutions = [
  {
    title: "All-in-One Pet Hub",
    desc: "Centralizes pet profiles, daily care logs, vaccination records, and clinical history into a singular, highly structured interface.",
    icon: Cat,
  },
  {
    title: "Smart Service Discovery",
    desc: "Integrates geo-location searching to connect users instantly with verified nearby animal hospitals, shops, and urgent veterinary services.",
    icon: Home,
  },
  {
    title: "Engaging Pet Community",
    desc: "Features a dedicated ecosystem for pet owners to securely exchange knowledge, post questions, and build interactive micro-communities.",
    icon: Users,
  },
];

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

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-20">
        <Navbar />

        {/* Back Button */}
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
                WeChat —{" "}
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
                  Messaging Platform
                </span>
              </h1>
            </motion.div>

            {/* Split Description & Meta Elements */}
            <motion.div variants={fadeInUp} className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              
              {/* Left Side Content */}
              <div className="max-w-3xl">
                <p className="text-sm leading-8 text-white/60 md:text-[16px]">
                  Contributed to the design of messaging interactions and conducted research on similar applications to gather insights and best practices for improving the overall user experience and application functionality.
Additionally, responsible for designing mobile user interfaces and implementing Dark Mode designs to enhance usability across different environments. The work focused on maintaining design consistency, improving accessibility, and creating a visually appealing user experience aligned with the product's design system.
 </p>

                {/* Interactive Figma CTA */}
                <div className="mt-8">
                  <a
                    href={figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(168,85,247,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_50px_rgba(217,70,239,0.45)]"
                  >
                    <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-white/10" />
                    <Image
                      src="/logo_figma.webp"
                      alt="Figma"
                      width={24}
                      height={24}
                      className="relative z-10 object-contain"
                    />
                    <span className="relative z-10">View Figma Project</span>
                    <ExternalLink className="relative z-10 h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>

              {/* Right Side Metadata Details */}
              <div className="flex gap-12 border-t border-white/5 pt-6 lg:border-none lg:pt-0 shrink-0">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/30">Role</p>
                  <p className="mt-2 text-sm font-medium text-purple-300">UX/UI Designer</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/30">Platform</p>
                  <p className="mt-2 text-sm font-medium text-white/80">Desktop & Mobile</p>
                </div>
              </div>
            </motion.div>

            {/* Core Portfolio Showcase Device Mockup Frame */}
            <motion.div variants={fadeInUp} className="relative mt-20">
              <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
              <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.01]">
                <Image
                  src="/InternProject_WChat.png"
                  alt="WeChat Interface Presentation Mockups"
                  width={1400}
                  height={900}
                  className="w-full h-auto object-cover transition duration-700 hover:scale-[1.015]"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ================= CORE PAIN POINTS ================= */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-16"
        >
          <motion.div variants={fadeInUp} className="mb-14">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Research & Planning</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
              Before starting the UI design process, research was conducted on similar applications to understand existing user experiences, design patterns, and industry best practices. The insights gathered from competitor analysis and UX research were used to identify opportunities for improvement and to develop design solutions that better align with user needs and project objectives.
Following the research phase, User Flows were created to map user journeys and define interactions across key features within the application. A Sitemap was also developed to establish the overall information architecture and screen hierarchy, ensuring a logical structure, intuitive navigation, and a seamless user experience throughout the product.</p>
          </motion.div>
        </motion.section>

        {/* ================= UI HIGH-FIDELITY SHOWCASE ================= */}
        <motion.section className="mt-16">
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[1px] w-7 bg-purple-500" />
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-purple-400">Showcase</p>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">User Interface Design</h2>
            <p className="mt-3 max-w-xl text-xs lg:text-sm text-white/40">
               A messaging application designed for communication and chatting with others, supporting text messages, images, and file sharing for convenient and seamless interaction.
            </p>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#07040d]">
            <Image
              src="/Wechat-section.png"
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