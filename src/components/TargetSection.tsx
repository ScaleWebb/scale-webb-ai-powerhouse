import AnimatedSection from "./AnimatedSection";
import { Code2, Factory, Landmark } from "lucide-react";

const targets = [
  {
    icon: Code2,
    title: "Digital Product / SaaS Founders",
    text: "We offer attractive exits, product continuity, growth through our platform and centralized team.",
  },
  {
    icon: Factory,
    title: "Manufacturing Entrepreneurs / SMEs",
    text: "We bring AI, cloud ERP, and operational excellence to increase margins and competitiveness without changing your brand or people.",
  },
  {
    icon: Landmark,
    title: "Investors (PE, Family Offices, Funds)",
    text: "Access a diversified portfolio of digital and manufacturing companies with a clear value creation playbook and IPO/exit potential.",
  },
];

const TargetSection = () => (
  <section id="audience" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-display text-sm font-medium tracking-widest uppercase mb-4">
          Who We Serve
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-16 max-w-3xl">
          Partners, not just acquisitions.
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {targets.map((t, i) => (
          <AnimatedSection key={t.title} delay={i * 0.15}>
            <div className="bg-card border border-border rounded-xl p-8 h-full hover:border-primary/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <t.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">{t.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TargetSection;
