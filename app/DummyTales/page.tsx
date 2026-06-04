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
        <div className="mb-12">
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
                Facebook advertising 
              </span>
            </motion.div>

            {/* Main Application Title */}
            <motion.div variants={fadeInUp} className="max-w-4xl">
              <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[64px]">
                DummyTales Ads (Intern Project)
              </h1>
            </motion.div>

            {/* Split Description & Meta Elements */}
            <motion.div variants={fadeInUp} className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              {/* Left Side Content */}
              <div className="max-w-3xl">
                <p className="text-sm leading-8 text-white/60 md:text-[16px]">
                 Designed and managed Facebook advertising materials for the Dummy Tales 
                 game page, with the objective of promoting in-game events, announcements, and various features 
                 to effectively reach and engage the target audience. The advertisements were created to communicate information clearly, 
                 attract user attention, and strengthen awareness 
                 of the game's content and activities across social media platforms.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ================= UI HIGH-FIDELITY SHOWCASE ================= */}
        <motion.section className="mt-16">
          {/* Interactive Layout Showcase (รูปขนาดพอดีสายตา พร้อมคำอธิบาย) */}
          <div className="flex flex-col gap-24">
            
            {/* Item 1: Banner นิทานดัมมี่เทลส์ */}
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
              <div className="overflow-hidden md:col-span-7  rounded-2xl border border-white/10 bg-[#07040d] ">
                <Image
                  src="/Bannerนิทานดัมมี่เทลส์.png"
                  alt="DummyTales Ads Core Artwork Presentation"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover transition duration-700 hover:scale-[1.02]"
                />
              </div>
              <div className="md:col-span-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400 block mb-2">01</span>
                <h3 className="text-xl font-bold mb-3 text-white">Dummy Tales Promotional Banner </h3>
                <p className="text-xs lg:text-sm text-white/60 leading-relaxed">
                  Designed a promotional banner to highlight the visual identity and storytelling elements of Dummy Tales. The design focused on attracting user attention, strengthening brand recognition, and creating an engaging first impression through vibrant visuals and clear messaging.
                </p>
              </div>
            </div>

            {/* Item 2: แนะนำห้องเล่น (สลับฝั่งให้ดูมีมิติ) */}
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
              <div className="md:col-span-5 order-2 md:order-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400 block mb-2">02</span>
                <h3 className="text-xl font-bold mb-3 text-white">Playroom Feature Showcase Banner</h3>
                <p className="text-xs lg:text-sm text-white/60 leading-relaxed">
                  Designed Banner a feature introduction banner to promote the Playroom system within the game. The design emphasized clear information hierarchy and intuitive visual communication, helping players quickly understand the feature and its benefits.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#07040d] md:col-span-7 order-1 md:order-2">
                <Image
                  src="/Bannerแนะนำห้องเล่น.png"
                  alt="DummyTales Playroom Feature Interface"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover transition duration-700 hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Item 3: ประกาศปิดปรับปรุงเซิฟเวอร์ */}
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#07040d] md:col-span-7">
                <Image
                  src="/Banner-ประกาศปิดปรับปรุงเซิฟเวอร์.png"
                  alt="DummyTales Server Maintenance Interface Notice"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover transition duration-700 hover:scale-[1.02]"
                />
              </div>
              <div className="md:col-span-5">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400 block mb-2">03</span>
                <h3 className="text-xl font-bold mb-3 text-white">Server Maintenance Announcement Banner</h3>
                <p className="text-xs lg:text-sm text-white/60 leading-relaxed">
                 Designed an announcement banner to communicate server maintenance schedules and service availability. The layout prioritized readability and clarity to ensure users could easily understand important system updates and minimize potential confusion.
                </p>
              </div>
            </div>

          </div>
        </motion.section>
      </div>
      <ScrollToTop />
    </section>
  );
}