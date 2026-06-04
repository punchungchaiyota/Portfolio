"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const menuItems = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50
      w-[94%] max-w-5xl"
    >
      <div
        className="relative flex items-center justify-between
        rounded-full border border-white/[0.08]
        bg-black/40 backdrop-blur-2xl
        px-4 md:px-6 py-3
        shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
      >
        {/* Ambient Glow */}
        <div
          className="absolute inset-0 rounded-full
          bg-gradient-to-r from-purple-500/5 via-transparent to-fuchsia-500/5
          pointer-events-none"
        />

        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative flex items-center gap-3 cursor-pointer"
          >
            <h1
              className="text-sm md:text-[15px]
              font-semibold tracking-[0.22em]
              text-white/90"
            >
              PUNCHUNG CHAIYOTA
            </h1>
          </motion.div>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-7">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-[13px]
              font-medium text-white/50
              hover:text-white transition duration-300
              group"
            >
              {item.name}

              <span
                className="absolute left-0 -bottom-1
                h-[1.5px] w-0
                rounded-full
                bg-gradient-to-r
                from-purple-400 to-fuchsia-400
                transition-all duration-300
                group-hover:w-full"
              />
            </Link>
          ))}
        </div>

        {/* Resume Button */}
        <motion.a
          download
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="group relative inline-flex items-center gap-2
          overflow-hidden rounded-full
          border border-white/10
          bg-white/[0.05]
          px-4 py-2
          text-[12px] font-medium text-white/90
          transition-all duration-300
          hover:border-purple-500/40
          hover:bg-purple-500/10"
        >
          {/* Glow */}
          <div
            className="absolute inset-0 opacity-0
            group-hover:opacity-100 transition duration-500
            bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10"
          />

          {/* Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.2}
            stroke="currentColor"
            className="relative w-3.5 h-3.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v12m0 0 4-4m-4 4-4-4m-3 8h14"
            />
          </svg>

          <span className="relative">Resume</span>
        </motion.a>
      </div>
    </motion.nav>
  );
}