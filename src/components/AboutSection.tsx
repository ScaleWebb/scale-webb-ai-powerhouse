import AnimatedSection from "./AnimatedSection";
import { Building2, Brain, TrendingUp, Globe } from "lucide-react";

const metrics = [
  { icon: Building2, label: "Focus", value: "PMI & SaaS" },
  { icon: Brain, label: "Core", value: "AI-first" },
  { icon: TrendingUp, label: "Approccio", value: "PE + Tech" },
  { icon: Globe, label: "Ambizione", value: "Europa" },
];

const AboutSection = () => (
  <section id="chi-siamo" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-display text-sm font-medium tracking-widest uppercase mb-4">
          Chi siamo
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 max-w-3xl">
          Disciplina finanziaria. Eccellenza tecnologica.
        </h2>
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-16 mt-12">
        <AnimatedSection delay={0.1}>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Scale Webb è una holding innovativa con sede in Italia, con focus su acquisizioni di app,
            piattaforme digitali, SaaS e PMI manifatturiere.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Combina la disciplina da private equity — acquisizione, ottimizzazione operativa — con l'eccellenza
            di prodotto tecnologico: ERP verticale, AI e analytics avanzati.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            La nostra visione è diventare una delle big tech europee in grado di migliorare ed integrare
            tecnologie digitali nei settori trasversali, con particolare focus sulla manifattura.
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
