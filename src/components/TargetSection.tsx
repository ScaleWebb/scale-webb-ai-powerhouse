import AnimatedSection from "./AnimatedSection";
import { Code2, Factory, Landmark } from "lucide-react";

const targets = [
  {
    icon: Code2,
    title: "Founder di prodotti digitali / SaaS",
    text: "Offriamo exit attraenti, continuità di prodotto, crescita tramite piattaforma e team centralizzato.",
  },
  {
    icon: Factory,
    title: "Imprenditori manifatturieri / PMI",
    text: "Portiamo AI, ERP cloud e operational excellence per aumentare margini e competitività senza snaturare brand e persone.",
  },
  {
    icon: Landmark,
    title: "Investitori (PE, family office, fondi)",
    text: "Accesso a un portafoglio diversificato di aziende digitali e manifatturiere con chiaro playbook di creazione di valore e potenziale IPO/exit.",
  },
];

const TargetSection = () => (
  <section id="target" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-display text-sm font-medium tracking-widest uppercase mb-4">
          Per chi lo facciamo
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-16 max-w-3xl">
          Partner, non semplici acquisizioni.
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
