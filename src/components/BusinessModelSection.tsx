import { ArrowDownRight, Boxes, ChartNoAxesCombined, Cpu, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const capabilities = [
  { icon: Cpu, label: "Product & technology", text: "Architecture, AI, data and product craft" },
  { icon: Users, label: "Talent & organization", text: "Leadership, recruiting and operating cadence" },
  { icon: Boxes, label: "Go-to-market", text: "Positioning, distribution and commercial systems" },
  { icon: ChartNoAxesCombined, label: "Capital & M&A", text: "Disciplined allocation and strategic combinations" },
];

const BusinessModelSection = () => (
  <section id="platform" className="section-padding border-y border-white/10 bg-[#0a0d12]">
    <div className="section-shell">
      <AnimatedSection className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:gap-24">
        <p className="section-index section-index-dark">02 / Operating platform</p>
        <div>
          <h2 className="heading-light max-w-4xl">One platform.<br />Multiple compounding engines.</h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/[0.52]">
            Scale Webb is designed as an active operating partner. Shared capabilities accelerate each company
            while preserving the focus, accountability and identity that made it valuable.
          </p>
        </div>
      </AnimatedSection>

      <div className="mt-20 grid overflow-hidden rounded-2xl border border-white/10 md:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((capability, index) => (
          <AnimatedSection key={capability.label} delay={index * 0.08} className="h-full">
            <article className="group flex h-full min-h-[290px] flex-col border-white/10 p-7 transition-colors hover:bg-white/[0.035] md:border-r lg:p-8">
              <div className="flex items-start justify-between">
                <capability.icon size={23} strokeWidth={1.5} className="text-primary" />
                <span className="font-mono text-[9px] tracking-[0.2em] text-white/25">0{index + 1}</span>
              </div>
              <div className="mt-auto">
                <h3 className="font-display text-xl font-medium tracking-[-0.025em] text-white">
                  {capability.label}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/[0.42]">{capability.text}</p>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="mt-8 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
        <p className="max-w-2xl font-display text-2xl font-medium tracking-[-0.03em] text-white md:text-3xl">
          Built to make every company stronger than it could be alone.
        </p>
        <a href="#focus" className="button-quiet shrink-0">
          See our focus
          <ArrowDownRight size={16} />
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default BusinessModelSection;
