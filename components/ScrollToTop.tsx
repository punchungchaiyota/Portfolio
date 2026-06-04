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
            bottom-8
            right-8
            z-50
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/10
            backdrop-blur-xl
            text-white
            shadow-lg
            transition-all
            hover:scale-110
            hover:bg-purple-500
          "
        >
          <ChevronUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}