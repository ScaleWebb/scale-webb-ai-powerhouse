import AnimatedSection from "./AnimatedSection";
import { Cpu, Factory, MapPin, Repeat } from "lucide-react";

const points = [
  {
    icon: Cpu,
    title: "AI-First Technology",
    text: "Native ERP + AI platform, not retrofit. Every process is powered by machine learning and analytics.",
  },
  {
    icon: Factory,
    title: "Deep Manufacturing Expertise",
    text: "Deep focus on operations, supply chain, quality, and production. We're not just tech—we're industrial.",
  },
  {
    icon: MapPin,
    title: "Italian Roots, European Ambition",
    text: "Credibility with Italian family SMEs, long-term culture. Ready to scale across Europe.",
  },
  {
    icon: Repeat,
    title: "Replicable Playbook",
    text: "Industrial approach to product, integration, and growth. Inspired by the best: Bending Spoons, Constellation Software.",
  },
];

const WhySection = () => (
  <section id="why" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-display text-sm font-medium tracking-widest uppercase mb-4">
          Why Scale Webb
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-16 max-w-3xl">
          What makes us unique.
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-6">
        {points.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.12}>
            <div className="flex gap-5 bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <p.icon size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{p.text}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
