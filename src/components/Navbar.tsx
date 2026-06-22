import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import Brand from "./Brand";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-white/10 bg-[#090b10]/[0.88] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-[76px] items-center justify-between" aria-label="Primary navigation">
        <Brand />
        <div className="flex items-center gap-3">
          <span className="hidden rounded-full border border-white/10 px-4 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/40 md:inline-flex">
            Operating technology holding
          </span>
          <a href="#contact" className="button-outline min-h-10 px-4 sm:px-5">
            <span className="hidden sm:inline">Talk to us</span>
            <span className="sm:hidden">Contact</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
