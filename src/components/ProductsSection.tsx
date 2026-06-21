import { ArrowUpRight, Binary, Factory, Layers3 } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const focusAreas = [
  {
    icon: Layers3,
    title: "Vertical software",
    text: "Mission-critical products with deep workflow integration, resilient customer relationships and clear paths to expansion.",
    tags: ["B2B SaaS", "Workflow", "Infrastructure"],
  },
  {
    icon: Binary,
    title: "Applied intelligence",
    text: "AI-native products that turn proprietary data and domain expertise into measurable customer outcomes.",
    tags: ["Applied AI", "Data products", "Automation"],
  },
  {
    icon: Factory,
    title: "Industrial technology",
    text: "Software and connected systems that modernize production, logistics, quality and the industrial value chain.",
    tags: ["Industry 4.0", "Operations", "IoT"],
  },
];

const ProductsSection = () => (
  <section id="focus" className="section-light section-padding">
    <div className="section-shell">
      <AnimatedSection className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
        <div>
          <p className="section-index">03 / Investment focus</p>
          <h2 className="heading-dark mt-8 max-w-4xl">Durable technology.<br />Real-world relevance.</h2>
        </div>
        <p className="max-w-md text-base leading-7 text-ink/[0.55] lg:pb-2">
          We focus where technology becomes embedded in how businesses operate, decide and grow.
        </p>
      </AnimatedSection>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink/[0.15] bg-ink/[0.15] lg:grid-cols-3">
        {focusAreas.map((area, index) => (
          <AnimatedSection key={area.title} delay={index * 0.08} className="h-full bg-[#f2f0e9]">
            <article className="group flex h-full min-h-[440px] flex-col bg-[#f2f0e9] p-7 transition-colors hover:bg-white md:p-9">
              <div className="flex items-center justify-between">
                <area.icon size={25} strokeWidth={1.5} className="text-blue" />
                <ArrowUpRight size={18} className="text-ink/25 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <div className="mt-auto">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/[0.35]">Focus 0{index + 1}</p>
                <h3 className="mt-4 font-display text-3xl font-medium tracking-[-0.04em] text-ink">{area.title}</h3>
                <p className="mt-5 leading-7 text-ink/[0.55]">{area.text}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-ink/[0.15] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-ink/[0.55]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="mt-12 grid gap-8 border-t border-ink/[0.15] pt-10 md:grid-cols-[0.45fr_0.55fr]">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">What we value</p>
        <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {["Distinct product advantage", "Recurring, resilient demand", "Ambitious operating teams", "International potential"].map((item) => (
            <p key={item} className="flex items-center gap-3 text-sm font-medium text-ink/70">
              <span className="h-1.5 w-1.5 rounded-full bg-blue" />
              {item}
            </p>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ProductsSection;
