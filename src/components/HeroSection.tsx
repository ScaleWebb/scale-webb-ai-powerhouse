import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="candy-hero relative flex min-h-[900px] items-center overflow-hidden pb-24 pt-32 md:min-h-screen">
      <div className="candy-orb candy-orb-one" aria-hidden="true" />
      <div className="candy-orb candy-orb-two" aria-hidden="true" />
      <div className="candy-orb candy-orb-three" aria-hidden="true" />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="section-shell relative z-10 flex flex-col items-center text-center"
      >
        <p className="eyebrow mb-8">
          <span className="candy-status-dot" />
          Operating technology holding / Company factory
        </p>
        <h1 className="mx-auto max-w-[1240px] font-display text-[clamp(3rem,7.2vw,7.2rem)] font-medium leading-[0.98] tracking-[-0.065em] text-white">
          We build and operate <span className="candy-gradient-text">companies</span> across different{" "}
          <span className="candy-gradient-text candy-gradient-alt">industries</span> through one centralized{" "}
          <span className="text-white/[0.45]">technological core.</span>
        </h1>
        <p className="mx-auto mt-9 max-w-3xl text-base leading-7 text-white/[0.55] md:text-xl md:leading-9">
          ScaleWebb creates, acquires and scales businesses by providing them with proprietary software,
          AI, data infrastructure, automation and centralized operational support.
        </p>
        <div className="mt-11 flex w-full max-w-md flex-col justify-center gap-3 sm:w-auto sm:max-w-none sm:flex-row">
          <a href="#what-we-do" className="button-candy">
            Explore ScaleWebb
            <ArrowDown size={16} />
          </a>
          <a href="#companies" className="button-quiet">
            Our Companies
            <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10">
        <div className="section-shell grid grid-cols-3 divide-x divide-white/10">
          {[
            ["01", "Create"],
            ["02", "Acquire"],
            ["03", "Operate"],
          ].map(([number, label]) => (
            <div key={label} className="flex items-center justify-center gap-2 py-5 md:gap-4 md:py-6">
              <span className="font-mono text-[8px] tracking-[0.16em] text-white/25">{number}</span>
              <span className="text-[11px] font-medium text-white/60 md:text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
