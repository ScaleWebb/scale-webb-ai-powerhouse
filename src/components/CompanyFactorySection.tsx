import { ArrowDownRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const stages = ["Research", "Validate", "Build", "Launch", "Operate", "Scale"];

const CompanyFactorySection = () => (
  <section id="company-factory" className="factory-section relative overflow-hidden py-24 md:py-32 lg:py-40">
    <div className="factory-noise" aria-hidden="true" />
    <div className="section-shell relative z-10">
      <AnimatedSection className="grid gap-14 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/[0.45]">04 / Company factory</p>
          <h2 className="mt-7 max-w-5xl font-display text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.94] tracking-[-0.06em] text-ink">
            A company factory<br />for the AI era.
          </h2>
        </div>
        <div>
          <ArrowDownRight size={28} strokeWidth={1.4} className="mb-7 text-ink/[0.35]" />
          <p className="text-lg leading-8 text-ink/60">
            ScaleWebb develops new business opportunities internally: from research and validation to product
            development, launch and operational scaling. When a new opportunity proves strong enough, it can
            become a dedicated company within the ScaleWebb ecosystem.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-20 grid grid-cols-2 overflow-hidden rounded-2xl border border-ink/[0.15] md:grid-cols-3 lg:grid-cols-6" delay={0.1}>
        {stages.map((stage, index) => (
          <div key={stage} className="factory-stage">
            <span>0{index + 1}</span>
            <strong>{stage}</strong>
          </div>
        ))}
      </AnimatedSection>
    </div>
  </section>
);

export default CompanyFactorySection;
