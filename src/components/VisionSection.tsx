import AnimatedSection from "./AnimatedSection";
import { Eye, Target, Shield } from "lucide-react";

const cards = [
{
  icon: Eye,
  title: "Vision",
  text: "Build the leading European platform for digital products and AI-transformed manufacturing companies."
},
{
  icon: Target,
  title: "Mission",
  text: "Acquire, integrate, and grow digital products and manufacturing SMEs through an AI-first platform and a replicable operational playbook."
},
{
  icon: Shield,
  title: "Values",
  text: "Operational excellence and data-driven decisions. Founder respect. AI/ML innovation. Financial discipline. Long-term horizon."
}];


const VisionSection = () => {
  return (
    <section id="vision" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Our Foundation</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16">Vision · Mission · Values</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <AnimatedSection key={card.title}>
              <div className="border border-neutral-800 rounded-2xl p-8 hover:border-neutral-600 transition-colors">
                <card.icon className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-xl font-display font-bold text-white mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};


























export default VisionSection;