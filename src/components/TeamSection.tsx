import AnimatedSection from "./AnimatedSection";
import { User } from "lucide-react";

const roles = [
  { title: "Founder & CEO", desc: "Strategy, vision, and investor relations" },
  { title: "CTO / VP Engineering", desc: "Technology platform, AI, and product" },
  { title: "CFO", desc: "Finance, M&A structuring, and reporting" },
  { title: "COO", desc: "Operations, integration, and playbook" },
  { title: "VP M&A", desc: "Deal sourcing, due diligence, and negotiation" },
];

const TeamSection = () => (
  <section id="team" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-display text-sm font-medium tracking-widest uppercase mb-4">
          Team & Governance
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-16 max-w-3xl">
          Experienced leadership.
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
        {roles.map((role, i) => (
          <AnimatedSection key={role.title} delay={i * 0.1}>
            <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <User size={28} className="text-primary" />
              </div>
              <h3 className="text-sm font-display font-semibold text-foreground mb-1">{role.title}</h3>
              <p className="text-xs text-muted-foreground">{role.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.4}>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Board with PE partners, manufacturing experts, and technology leaders ensuring solid governance and strategic vision.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default TeamSection;
