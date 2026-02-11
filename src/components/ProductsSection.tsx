import AnimatedSection from "./AnimatedSection";
import { Cloud, Factory, Brain, BarChart3, Eye, Wrench, Truck, Cpu } from "lucide-react";

const digitalProducts = [
  { icon: Cloud, name: "Vertical cloud ERP for manufacturing" },
  { icon: Cpu, name: "MES modules for production & shopfloor" },
  { icon: BarChart3, name: "AI demand forecasting" },
  { icon: Eye, name: "Quality control computer vision" },
  { icon: Wrench, name: "Predictive maintenance" },
  { icon: Truck, name: "Supply chain optimization" },
];

const ProductsSection = () => (
  <section id="products" className="section-padding bg-card/50">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-display text-sm font-medium tracking-widest uppercase mb-4">
          Products & Services
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-16 max-w-3xl">
          Two segments, one platform.
        </h2>
      </AnimatedSection>

      <div className="grid lg:grid-cols-2 gap-10">
        <AnimatedSection delay={0.1}>
          <div className="bg-card border border-border rounded-xl p-8 h-full">
            <div className="flex items-center gap-3 mb-6">
              <Brain size={28} className="text-primary" />
              <h3 className="text-2xl font-display font-semibold text-foreground">Digital Products & SaaS</h3>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Scale Webb acquires and develops SaaS, apps, and AI infrastructure with a B2B and manufacturing focus.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {digitalProducts.map((p) => (
                <div
                  key={p.name}
                  className="flex items-start gap-3 bg-background/50 rounded-lg p-4 border border-border/50"
                >
                  <p.icon size={18} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-card border border-border rounded-xl p-8 h-full">
            <div className="flex items-center gap-3 mb-6">
              <Factory size={28} className="text-primary" />
              <h3 className="text-2xl font-display font-semibold text-foreground">Manufacturing Companies</h3>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Scale Webb acquires Italian and European manufacturing SMEs in sectors such as automotive,
              machinery, automation, chemicals, and textiles.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Goal: improve EBITDA from ~6% to 14% through digital and operational interventions.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Operating costs", value: "-20/30%" },
                { label: "Inventory", value: "-20/35%" },
                { label: "Logistics", value: "-15%" },
              ].map((m) => (
                <div key={m.label} className="text-center p-4 bg-background/50 rounded-lg border border-border/50">
                  <p className="text-2xl font-display font-bold text-primary">{m.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ProductsSection;
