import AnimatedSection from "./AnimatedSection";

const pillars = [
  {
    number: "01",
    title: "Acquire with conviction",
    text: "We pursue durable products, exceptional talent and markets where focused ownership can create a category leader.",
  },
  {
    number: "02",
    title: "Build with operators",
    text: "We work alongside management teams, bringing product, data, talent and operational capabilities where they matter most.",
  },
  {
    number: "03",
    title: "Compound for the long term",
    text: "We reinvest knowledge, technology and capital across the group to create strength that grows with every company.",
  },
];

const AboutSection = () => (
  <section id="thesis" className="section-light section-padding">
    <div className="section-shell">
      <AnimatedSection className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:gap-24">
        <div>
          <p className="section-index">01 / Investment thesis</p>
        </div>
        <div>
          <h2 className="heading-dark max-w-4xl">
            Permanent ambition.<br />Operator-led execution.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/60 md:text-xl md:leading-9">
            The best technology companies are not assembled through financial engineering alone.
            They are built through product judgment, operating discipline and patient ownership.
          </p>
        </div>
      </AnimatedSection>

      <div className="mt-20 border-t border-ink/[0.15] lg:ml-[calc(36%+6rem)]">
        {pillars.map((pillar, index) => (
          <AnimatedSection key={pillar.number} delay={index * 0.08}>
            <article className="group grid gap-5 border-b border-ink/[0.15] py-9 md:grid-cols-[70px_0.75fr_1fr] md:items-start md:gap-8">
              <span className="font-mono text-[10px] tracking-[0.2em] text-ink/[0.35]">{pillar.number}</span>
              <h3 className="font-display text-2xl font-medium tracking-[-0.035em] text-ink md:text-3xl">
                {pillar.title}
              </h3>
              <p className="max-w-xl leading-7 text-ink/[0.55]">{pillar.text}</p>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
