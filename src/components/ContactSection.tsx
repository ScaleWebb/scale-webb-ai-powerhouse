import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => (
  <section id="contact" className="contact-candy relative overflow-hidden py-24 text-ink md:py-32">
    <div className="contact-grid" aria-hidden="true" />
    <div className="section-shell relative z-10">
      <AnimatedSection>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/[0.45]">Build with ScaleWebb</p>
        <div className="mt-8 flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <h2 className="max-w-5xl font-display text-[clamp(3.1rem,7vw,7rem)] font-medium leading-[0.92] tracking-[-0.06em]">
            One core.<br />The next company.
          </h2>
          <a
            href="mailto:primary@scalewebb.com"
            className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-ink px-7 text-sm font-semibold text-white transition-transform hover:-translate-y-1"
          >
            Contact ScaleWebb
            <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-ink/20 pt-6 text-sm text-ink/[0.55] sm:flex-row sm:items-center sm:justify-between">
          <p>For founders, operators and strategic partners.</p>
          <p>Milan, Italy / Europe</p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ContactSection;
