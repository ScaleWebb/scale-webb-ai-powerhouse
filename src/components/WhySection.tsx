import AnimatedSection from "./AnimatedSection";
import { Cpu, Factory, MapPin, Repeat } from "lucide-react";

const points = [
  {
    icon: Cpu,
    title: "Tecnologia AI-first",
    text: "Piattaforma ERP + AI nativa, non retrofit. Ogni processo è potenziato da machine learning e analytics.",
  },
  {
    icon: Factory,
    title: "Conoscenza manifatturiera",
    text: "Focus profondo su operations, supply chain, qualità e produzione. Non siamo solo tech, siamo industriali.",
  },
  {
    icon: MapPin,
    title: "Radici italiane, ambizione europea",
    text: "Credibilità con PMI familiari italiane, cultura di lungo periodo. Pronti a scalare in tutta Europa.",
  },
  {
    icon: Repeat,
    title: "Playbook replicabile",
    text: "Approccio industriale a prodotto, integrazione e crescita. Ispirato ai migliori: Bending Spoons, Constellation Software.",
  },
];

const WhySection = () => (
  <section id="perche" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-display text-sm font-medium tracking-widest uppercase mb-4">
          Perché Scale Webb
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-16 max-w-3xl">
          Cosa ci rende unici.
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
