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
  Layers,
  ExternalLink,
  Cpu,
  Smartphone,
  Eye,
} from "lucide-react";

// ================= DATA CONFIGURATION =================
const figmaLink =
  "https://www.figma.com/design/qHrr6hpy2l90LEsEQeQc4P/WebApp-%E0%B8%A3%E0%B8%B0%E0%B8%9B%E0%B8%A3%E0%B8%B1%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%A3%E0%B8%96%E0%B8%A2%E0%B8%99%E0%B8%95%E0%B9%8C?node-id=155-22136&t=ua2fDeLW2t2cGzQV-1";

const challenges = [
  {
    title: "Missed or Lost Claim Information",
    desc: "Claim information shared through LINE could easily be missed or lost due to fragmented conversations and the absence of a centralized system.",
    icon: FileText,
    color: "group-hover:text-amber-400",
  },
  {
    title: "Unorganized Claim Status Tracking",
    desc: "Tracking claim statuses was difficult and unorganized, making it hard for staff to monitor progress and follow up efficiently.",
    icon: Clock3,
    color: "group-hover:text-purple-400",
  },
  {
    title: "Slow Document Retrieval",
    desc: "Searching for previous claim documents and evidence took a significant amount of time, reducing operational efficiency.",
    icon: ShieldCheck,
    color: "group-hover:text-emerald-400",
  },
  {
    title: "Scattered Information Channels",
    desc: "Claim-related information was scattered across multiple platforms, making data management and collaboration difficult.",
    icon: Layers,
    color: "group-hover:text-cyan-400",
  },
  {
    title: "Expired or Inaccessible Files",
    desc: "Files and documents shared through LINE could expire or become inaccessible over time, causing incomplete claim records.",
    icon: FileText,
    color: "group-hover:text-pink-400",
  },
  {
    title: "Difficulty Managing Documents",
    desc: "Staff faced challenges managing and storing claim documents in one centralized location for future access and audits.",
    icon: ShieldCheck,
    color: "group-hover:text-orange-400",
  },
];

const solutions = [
  {
    title: "Reduced Communication Errors",
    desc: "Reduced errors caused by sharing claim information through unofficial communication channels such as chat groups and personal messages.",
    icon: Smartphone,
  },
  {
    title: "Faster & More Complete Claim Submissions",
    desc: "Improved the speed and completeness of claim submissions by allowing staff to upload documents, images, and customer information in one system.",
    icon: Cpu,
  },
  {
    title: "Centralized Data & Document Storage",
    desc: "Centralized claim data and documents in one place for easier access, management, and future reference.",
    icon: ShieldCheck,
  },
  {
    title: "Reduced Missing or Expired Files",
    desc: "Reduced issues with expired or inaccessible files shared through LINE by automatically storing important claim documents in cloud storage.",
    icon: FileText,
  },
  {
    title: "Improved Workflow Efficiency",
    desc: "Improved workflow efficiency and reduced repetitive manual tasks through automation and streamlined processes.",
    icon: Layers,
  },
  {
    title: "Real-time Claim Tracking",
    desc: "Supported real-time claim status tracking, allowing staff and managers to monitor progress more effectively.",
    icon: Clock3,
  },
];


// ================= ANIMATION =================
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function Project01Page() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030008] text-white">
      {/* Background Glow */}
      <div className="absolute left-[-10%] top-[-5%] h-[700px] w-[700px] rounded-full bg-purple-600/10 blur-[180px]" />
      <div className="absolute bottom-[10%] right-[-10%] h-[700px] w-[700px] rounded-full bg-fuchsia-500/10 blur-[180px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
        <Navbar />

        {/* Back */}
        <div className="mb-14">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40 transition hover:text-purple-400"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </div>

        {/* HERO */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative"
        >
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[140px]" />

          <motion.div
            variants={fadeInUp}
            className="mb-5 flex items-center gap-3"
          >
            <div className="h-[1px] w-8 bg-purple-400/70" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-purple-300">
              Featured Project
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.04em] text-white md:text-6xl lg:text-7xl"
          >
            Insurance Claim
            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
              Management System
            </span>
          </motion.h1>

          {/* Bottom */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between"
          >
            {/* Description */}
            <div className="max-w-3xl">
              <p className="text-[15px] leading-8 text-white/60 md:text-[16px]">
                An automobile insurance claim management system designed to
                streamline claim submission, document handling, and workflow
                coordination. The platform centralizes claim information,
                reduces communication gaps from LINE chats, and enables teams
                to manage cases, documents, and customer data more efficiently.
              </p>

              {/* CTA */}
              <div className="mt-9">
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
                    width={26}
                    height={26}
                    className="relative z-10 object-contain"
                  />

                  <span className="relative z-10">
                    View Figma Project
                  </span>

                  <ExternalLink className="relative z-10 h-4 w-4 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Meta */}
            <div className="flex gap-10 border-t border-white/5 pt-6 lg:border-none lg:pt-0">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/30">
                  Role
                </p>

                <p className="mt-2 text-sm font-medium text-purple-300">
                  UX/UI Designer
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/30">
                  Platform
                </p>

                <p className="mt-2 text-sm font-medium text-white/80">
                  Web Application
                </p>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div variants={fadeInUp} className="relative mt-20">
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[120px]" />

            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] backdrop-blur-sm">
              <Image
                src="/Project-3.png"
                alt="Claim Dashboard Preview"
                width={1400}
                height={900}
                className="w-full object-cover transition duration-700 hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </motion.section>

        {/* PROBLEMS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-16"
        >
          <motion.div variants={fadeInUp} className="mb-14">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[1px] w-7 bg-purple-500" />

              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-purple-400">
                The Problem
              </p>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Pain Points
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
              Key operational issues discovered during user research and workflow
              analysis with insurance claim operators.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {challenges.map((item, index) => {
              const IconComponent = item.icon;

              return (
                <motion.div
                  key={index}
                  variants={cardVariant}
                  className="group rounded-3xl border border-white/[0.05] bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-500/20 hover:bg-white/[0.03]"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.03] text-purple-400 transition duration-300 group-hover:bg-purple-500/10">
                      <IconComponent
                        className={`h-5 w-5 transition duration-300 ${item.color}`}
                      />
                    </div>

                    <div>
                      <h3 className="mb-2 text-base font-bold text-white transition duration-300 group-hover:text-purple-300">
                        {item.title}
                      </h3>

                      <p className="text-sm leading-7 text-white/50">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* SOLUTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-16"
        >
          <motion.div variants={fadeInUp} className="mb-14">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[1px] w-7 bg-purple-500" />

              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-purple-400">
                The Solution
              </p>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Solution
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {solutions.map((sol, i) => {
              const Icon = sol.icon;

              return (
                <motion.div
                  key={i}
                  variants={cardVariant}
                  className="rounded-3xl border border-purple-500/10 bg-gradient-to-b from-purple-500/[0.04] to-transparent p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-500/30"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-white">
                    {sol.title}
                  </h3>

                  <p className="text-sm leading-7 text-white/50">
                    {sol.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* UI SHOWCASE */}
        <motion.section className="mt-16">
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[1px] w-7 bg-purple-500" />

              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-purple-400">
                Showcase
              </p>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              User Interface
            </h2>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/10">
            <Image
              src="/ClaimManagement System.png"
              alt="UI Showcase"
              width={1900}
              height={1200}
              className="w-full object-cover transition duration-700 hover:scale-[1.01]"
            />
          </div>
        </motion.section>
      </div>
      <ScrollToTop />
    </section>
  );
}