import AnimatedSection from "./AnimatedSection";
import { Search, Layers, Settings, Rocket } from "lucide-react";

const steps = [
{
  icon: Search,
  num: "01",
  title: "Identify",
  text: "High-potential digital products and manufacturing SMEs: revenue €10–50M, improvable margins, solid customer base."
},
{
  icon: Layers,
  num: "02",
  title: "Acquire & Centralize",
  text: "Technology, data, and processes are integrated onto a proprietary AI + cloud ERP platform."
},
{
  icon: Settings,
  num: "03",
  title: "Optimize",
  text: "Operational integration playbook: supply chain, production, quality, and finance to increase margins and reduce costs."
},
{
  icon: Rocket,
  num: "04",
  title: "Scale",
  text: "Geographic expansion, software module verticalization, and continuous acquisitions."
}];


const BusinessModelSection = () => {
  return (
    <section id="model" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">How It Works</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16">Business Model</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <AnimatedSection key={step.num}>
              <div className="border border-neutral-800 rounded-2xl p-8 hover:border-neutral-600 transition-colors">
                <span className="text-xs text-primary font-mono mb-4 block">{step.num}</span>
                <step.icon className="w-8 h-8 text-white mb-4" />
                <h3 className="text-xl font-display font-bold text-white mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{step.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;