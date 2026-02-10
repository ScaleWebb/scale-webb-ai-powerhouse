import AnimatedSection from "./AnimatedSection";
import { Search, Layers, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Identificare",
    text: "Prodotti digitali e PMI manifatturiere ad alto potenziale: revenue 10–50M €, margini migliorabili, base clienti solida.",
  },
  {
    icon: Layers,
    num: "02",
    title: "Acquisire & Centralizzare",
    text: "Tecnologia, dati e processi vengono integrati su una piattaforma AI + ERP cloud proprietaria.",
  },
  {
    icon: Settings,
    num: "03",
    title: "Ottimizzare",
    text: "Playbook di integrazione operativo: supply chain, produzione, qualità e finance per aumentare margini e ridurre costi.",
  },
  {
    icon: Rocket,
    num: "04",
    title: "Scalare",
    text: "Espansione geografica, verticalizzazione dei moduli software e acquisizioni continue.",
  },
];

const BusinessModelSection = () => (
  <section id="modello" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-display text-sm font-medium tracking-widest uppercase mb-4">
          Il modello
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 max-w-3xl">
          Come funziona il nostro modello.
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-16">
          Un modello integrato che combina ricavi operativi delle aziende manifatturiere,
          ricavi SaaS e servizi di implementazione.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <AnimatedSection key={step.num} delay={i * 0.12}>
            <div className="relative bg-card border border-border rounded-xl p-8 h-full hover:border-primary/30 transition-all duration-300 group">
              <span className="text-5xl font-display font-bold text-primary/10 absolute top-4 right-6 group-hover:text-primary/20 transition-colors">
                {step.num}
              </span>
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <step.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default BusinessModelSection;
