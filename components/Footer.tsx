"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative max-w-6xl mx-auto px-6 pb-12 text-white">
      
      {/* Divider */}
      <div className="w-full h-[1px] bg-white/10 mb-8" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Left */}
        <div>
          <h2 className="text-lg font-semibold tracking-[0.2em]">
            PUNCHUNG CHAIYOTA
          </h2>

          <p className="text-sm text-white/40 mt-2">
            Portfolio Website Presented by Punchung Chaiyota.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-sm text-white/50">
          <a
            target="_blank"
            className="hover:text-purple-400 transition duration-300"
          >
            Tel.062-765-8819
          </a>

          <a
            target="_blank"
            className="hover:text-purple-400 transition duration-300"
          >
            Gmail: Punchungchaiyota@gmail.com
          </a>
        </div>
      </motion.div>
    </footer>
  );
}