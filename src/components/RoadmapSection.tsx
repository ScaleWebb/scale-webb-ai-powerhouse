import AnimatedSection from "./AnimatedSection";

const phases = [
  {
    period: "Year 1",
    title: "Foundation",
    items: [
      "Holding formation and core team (CEO, CTO, CFO, VP M&A, COO)",
      "Platform MVP development (ERP core + first MES module)",
      "First 2–3 acquisitions, consolidated revenue €25–35M",
    ],
  },
  {
    period: "Year 2–3",
    title: "Acceleration",
    items: [
      "Acquisitions up to 18–22 companies",
      "AI roadmap completion: demand forecasting, quality control, predictive maintenance",
      "Average portfolio EBITDA margin ~14%",
    ],
  },
  {
    period: "Year 4–5",
    title: "Scale",
    items: [
      "Portfolio of 40+ companies, revenue €600–800M, EBITDA €82M",
      "Exit options: IPO, strategic sale, or private continuation with refinance",
    ],
  },
];

const RoadmapSection = () => (
  <section id="roadmap" className="section-padding bg-card/50">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-display text-sm font-medium tracking-widest uppercase mb-4">
          Roadmap
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-16 max-w-3xl">
          The path to scale.
        </h2>
      </AnimatedSection>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12 md:space-y-0">
          {phases.map((phase, i) => (
            <AnimatedSection key={phase.period} delay={i * 0.15}>
              <div className={`md:grid md:grid-cols-2 md:gap-12 mb-12 ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
                <div className={`${i % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <div className="bg-card border border-border rounded-xl p-8 relative hover:border-primary/30 transition-all duration-300">
                    <div className="hidden md:block absolute top-8 w-3 h-3 rounded-full bg-primary glow-primary" style={{
                      [i % 2 === 0 ? 'right' : 'left']: '-1.875rem',
                    }} />
                    <span className="text-primary font-display font-bold text-sm tracking-widest uppercase">
                      {phase.period}
                    </span>
                    <h3 className="text-2xl font-display font-semibold text-foreground mt-2 mb-4">
                      {phase.title}
                    </h3>
                    <ul className="space-y-3">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default RoadmapSection;
