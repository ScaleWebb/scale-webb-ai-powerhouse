import AnimatedSection from "./AnimatedSection";
import { Building2, Brain, TrendingUp, Globe } from "lucide-react";

const metrics = [
  { icon: Building2, label: "Focus", value: "SMEs & SaaS" },
  { icon: Brain, label: "Core", value: "AI-first" },
  { icon: TrendingUp, label: "Approach", value: "PE + Tech" },
  { icon: Globe, label: "Ambition", value: "Europe" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-display text-sm font-medium tracking-widest uppercase mb-4">
          About Us
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 max-w-3xl">
          Financial discipline. Technological excellence.
        </h2>
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-16 mt-12">
        <AnimatedSection delay={0.1}>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Scale Webb is an innovative holding company based in Italy, focused on acquiring apps,
            digital platforms, SaaS products, and manufacturing SMEs.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            We combine private equity discipline — acquisition, operational optimization — with
            technological product excellence: vertical ERP, AI, and advanced analytics.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our vision is to become one of Europe's leading tech companies, integrating
            digital technologies across industries with a particular focus on manufacturing.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="bg-card border border-border rounded-lg p-6 hover:border-glow transition-colors duration-300"
              >
                <m.icon size={28} className="text-primary mb-4" />
                <p className="text-sm text-muted-foreground mb-1">{m.label}</p>
                <p className="text-xl font-display font-semibold text-foreground">{m.value}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
