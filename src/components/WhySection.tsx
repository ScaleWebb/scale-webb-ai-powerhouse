import AnimatedSection from "./AnimatedSection";

const principles = [
  ["01", "Long-term ownership", "We make decisions for enduring enterprise value, not the next reporting cycle."],
  ["02", "Operational depth", "Capital matters. Product judgment, talent and execution create the compounding."],
  ["03", "Aligned partnership", "We treat founders and operators as partners, with clarity on ambition and accountability."],
  ["04", "European perspective", "Built in Europe, connected globally and grounded in the region's technical excellence."],
];

const WhySection = () => (
  <section id="principles" className="section-padding bg-[#10141b]">
    <div className="section-shell">
      <AnimatedSection className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr]">
        <div>
          <p className="section-index section-index-dark">04 / Our principles</p>
          <h2 className="heading-light mt-8 max-w-xl">How we choose to build.</h2>
        </div>
        <p className="max-w-xl self-end text-lg leading-8 text-white/50">
          Scale Webb is built around a simple belief: exceptional companies deserve owners who understand
          the work, respect the people and stay committed to the outcome.
        </p>
      </AnimatedSection>

      <div className="mt-16 border-t border-white/10">
        {principles.map(([number, title, text], index) => (
          <AnimatedSection key={number} delay={index * 0.06}>
            <article className="grid gap-5 border-b border-white/10 py-8 transition-colors hover:bg-white/[0.02] md:grid-cols-[80px_0.7fr_1fr] md:gap-8 md:px-4">
              <span className="font-mono text-[10px] tracking-[0.2em] text-primary">{number}</span>
              <h3 className="font-display text-2xl font-medium tracking-[-0.035em] text-white">{title}</h3>
              <p className="max-w-xl leading-7 text-white/[0.45]">{text}</p>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
