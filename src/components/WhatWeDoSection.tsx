import { Blocks, Factory, Gauge, ScanSearch } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const actions = [
  {
    label: "Build",
    title: "We build new companies",
    text: "We research markets, validate opportunities and develop new ventures from the ground up.",
    icon: Blocks,
    color: "text-candy-purple",
    glow: "what-card-purple",
  },
  {
    label: "Acquire",
    title: "We acquire digital and operational assets",
    text: "We identify companies, platforms and products with untapped potential and integrate them into our ecosystem.",
    icon: ScanSearch,
    color: "text-candy-pink",
    glow: "what-card-pink",
  },
  {
    label: "Operate",
    title: "We operate through one central core",
    text: "Technology, data, product, marketing, finance and operations are centralized through ScaleWebb.",
    icon: Factory,
    color: "text-candy-blue",
    glow: "what-card-blue",
  },
  {
    label: "Scale",
    title: "We scale with proprietary systems",
    text: "We improve efficiency, automate workflows and help each company grow through software, AI and shared infrastructure.",
    icon: Gauge,
    color: "text-candy-mint",
    glow: "what-card-mint",
  },
];

const WhatWeDoSection = () => (
  <section id="what-we-do" className="section-padding bg-[#090b10]">
    <div className="section-shell">
      <AnimatedSection className="grid gap-10 lg:grid-cols-[0.36fr_0.64fr] lg:gap-24">
        <p className="section-index section-index-dark">02 / Operating holding</p>
        <div>
          <h2 className="heading-light">What ScaleWebb Does</h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/50">
            We do more than allocate capital. We create, control and operate businesses through a shared technological system.
          </p>
        </div>
      </AnimatedSection>

      <div className="mt-16 grid gap-4 md:grid-cols-2">
        {actions.map((action, index) => (
          <AnimatedSection key={action.label} delay={index * 0.07} className="h-full">
            <article className={`what-card ${action.glow}`}>
              <div className="flex items-start justify-between">
                <action.icon size={24} strokeWidth={1.5} className={action.color} />
                <span className="font-mono text-[9px] tracking-[0.18em] text-white/25">0{index + 1}</span>
              </div>
              <div className="mt-16">
                <p className={`font-mono text-[9px] uppercase tracking-[0.2em] ${action.color}`}>{action.label}</p>
                <h3 className="mt-4 max-w-md font-display text-2xl font-medium tracking-[-0.035em] text-white md:text-3xl">
                  {action.title}
                </h3>
                <p className="mt-5 max-w-lg leading-7 text-white/[0.45]">{action.text}</p>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeDoSection;
