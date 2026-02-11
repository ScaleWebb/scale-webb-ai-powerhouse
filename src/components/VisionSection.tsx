import AnimatedSection from "./AnimatedSection";
import { Eye, Target, Shield } from "lucide-react";

const cards = [
  {
    icon: Eye,
    title: "Vision",
    text: "Build the leading European platform for digital products and AI-transformed manufacturing companies.",
  },
  {
    icon: Target,
    title: "Mission",
    text: "Acquire, integrate, and grow digital products and manufacturing SMEs through an AI-first platform and a replicable operational playbook.",
  },
  {
    icon: Shield,
    title: "Values",
    text: "Operational excellence and data-driven decisions. Founder respect. AI/ML innovation. Financial discipline. Long-term horizon.",
  },
];

const VisionSection = () => (
  <section className="section-padding bg-card/50">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-display text-sm font-medium tracking-widest uppercase mb-4">
          Vision & Values
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-16 max-w-3xl">
          Building for the long term.
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <AnimatedSection key={card.title} delay={i * 0.15}>
            <div className="bg-card border border-border rounded-xl p-8 h-full hover:border-primary/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <card.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default VisionSection;
