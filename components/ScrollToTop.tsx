"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          className="
  fixed
  bottom-6 md:bottom-8
  right-6 md:right-8
  z-50

  flex
  h-12
  w-12
  items-center
  justify-center

  rounded-full

  border border-purple-400/40

  bg-gradient-to-br
  from-purple-500
  via-fuchsia-500
  to-pink-500

  text-white

  shadow-[0_10px_30px_rgba(168,85,247,0.45)]

  backdrop-blur-xl

  transition-all duration-300

  hover:scale-110
  hover:shadow-[0_15px_40px_rgba(217,70,239,0.55)]

  active:scale-95
"
        >
          <ChevronUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}