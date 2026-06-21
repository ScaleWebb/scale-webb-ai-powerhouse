import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Thesis", href: "#thesis" },
  { label: "Platform", href: "#platform" },
  { label: "Focus", href: "#focus" },
  { label: "Principles", href: "#principles" },
];

const Brand = () => (
  <a href="#top" className="group flex items-center gap-3" aria-label="Scale Webb home">
    <span className="brand-mark" aria-hidden="true">
      <span />
    </span>
    <span className="font-display text-[17px] font-semibold tracking-[-0.03em] text-white">
      Scale Webb
    </span>
  </a>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || mobileOpen
          ? "border-white/10 bg-[#0a0d12]/[0.9] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-[72px] items-center justify-between" aria-label="Primary navigation">
        <Brand />

        <div className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="button-outline hidden sm:inline-flex">
          Start a conversation
          <ArrowUpRight size={15} />
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.15] text-white sm:ml-3 lg:hidden"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 72px)" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#0a0d12] lg:hidden"
          >
            <div className="section-shell flex h-full flex-col py-10">
              <div className="flex flex-col">
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between border-b border-white/10 py-5 font-display text-2xl font-medium text-white"
                  >
                    {item.label}
                    <span className="font-mono text-xs text-white/[0.35]">0{index + 1}</span>
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="button-primary mt-auto justify-center"
              >
                Start a conversation
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
