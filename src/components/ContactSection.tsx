import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => (
  <section id="contact" className="relative overflow-hidden bg-blue py-24 text-white md:py-32">
    <div className="contact-grid" aria-hidden="true" />
    <div className="section-shell relative z-10">
      <AnimatedSection>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">A conversation is a good place to start</p>
        <div className="mt-8 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <h2 className="max-w-5xl font-display text-[clamp(3.1rem,7vw,7rem)] font-medium leading-[0.92] tracking-[-0.06em]">
            Building the next<br />enduring company?
          </h2>
          <a
            href="mailto:primary@scalewebb.com"
            className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-semibold text-blue transition-transform hover:-translate-y-1"
          >
            Contact Scale Webb
            <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-white/25 pt-6 text-sm text-white/[0.65] sm:flex-row sm:items-center sm:justify-between">
          <p>For founders, operators and long-term capital partners.</p>
          <p>Milan, Italy / Europe</p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ContactSection;
