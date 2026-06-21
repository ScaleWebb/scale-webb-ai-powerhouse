import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="hero-grid relative flex min-h-[1000px] items-center overflow-hidden pt-28 lg:min-h-screen">
      <div className="hero-glow" aria-hidden="true" />
      <div className="section-shell relative z-10 grid items-center gap-16 pb-20 pt-20 lg:grid-cols-[1.12fr_0.88fr] lg:pb-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow mb-7">
            <span className="status-dot" />
            Technology holding / Milan, Europe
          </p>
          <h1 className="max-w-4xl font-display text-[clamp(3.5rem,8vw,7.7rem)] font-medium leading-[0.92] tracking-[-0.065em] text-white">
            We build enduring
            <span className="block text-white/[0.42]">technology companies.</span>
          </h1>
          <p className="mt-9 max-w-2xl text-lg leading-8 text-white/[0.58] md:text-xl md:leading-9">
            Scale Webb partners with ambitious operators to acquire, build and compound
            category-defining software and technology-enabled businesses across Europe.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#thesis" className="button-primary">
              Explore our model
              <ArrowDown size={16} />
            </a>
            <a href="#contact" className="button-quiet">
              Start a conversation
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden aspect-square w-full max-w-[560px] lg:block"
          aria-hidden="true"
        >
          <div className="system-orbit system-orbit-outer" />
          <div className="system-orbit system-orbit-inner" />
          <div className="system-core">
            <span className="brand-mark brand-mark-large"><span /></span>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.28em] text-white/[0.45]">Scale Webb system</p>
          </div>
          <div className="system-node left-[2%] top-[42%]">
            <span>01</span>
            Acquire
          </div>
          <div className="system-node right-[1%] top-[22%]">
            <span>02</span>
            Build
          </div>
          <div className="system-node bottom-[5%] right-[18%]">
            <span>03</span>
            Compound
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-white/10">
        <div className="section-shell grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {[
            ["Model", "Permanent ownership"],
            ["Approach", "Operator-led"],
            ["Focus", "B2B technology"],
            ["Region", "Europe"],
          ].map(([label, value]) => (
            <div key={label} className="py-5 pl-4 first:pl-0 md:py-6 md:pl-6">
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/[0.32]">{label}</p>
              <p className="mt-1.5 text-xs font-medium text-white/[0.72] md:text-sm">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
