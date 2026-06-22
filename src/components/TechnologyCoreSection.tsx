import AnimatedSection from "./AnimatedSection";

const systems = [
  ["01", "Proprietary software", "candy-pill-purple"],
  ["02", "Artificial intelligence", "candy-pill-pink"],
  ["03", "Data infrastructure", "candy-pill-blue"],
  ["04", "Automation", "candy-pill-mint"],
  ["05", "ERP and CRM systems", "candy-pill-yellow"],
  ["06", "Product design", "candy-pill-purple"],
  ["07", "Marketing and growth systems", "candy-pill-pink"],
  ["08", "Operational management", "candy-pill-blue"],
];

const TechnologyCoreSection = () => (
  <section id="technology-core" className="section-padding bg-[#090b10]">
    <div className="section-shell">
      <AnimatedSection className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-24">
        <div>
          <p className="section-index section-index-dark">05 / Shared systems</p>
          <h2 className="heading-light mt-7">The centralized technological core</h2>
        </div>
        <p className="max-w-2xl self-end text-lg leading-8 text-white/50">
          Our companies are different on the outside, but connected on the inside by shared systems, data,
          technology and execution.
        </p>
      </AnimatedSection>

      <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {systems.map(([number, label, className], index) => (
          <AnimatedSection key={label} delay={index * 0.04} className="h-full">
            <article className={`technology-pill ${className}`}>
              <span>{number}</span>
              <h3>{label}</h3>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TechnologyCoreSection;
