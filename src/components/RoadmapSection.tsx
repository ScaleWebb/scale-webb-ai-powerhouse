import AnimatedSection from "./AnimatedSection";

const phases = [
{
  period: "Year 1",
  title: "Foundation",
  items: [
  "Holding formation and core team (CEO, CTO, CFO, VP M&A, COO)",
  "Platform MVP development (ERP core + first MES module)",
  "First 2–3 acquisitions, consolidated revenue €25–35M"]

},
{
  period: "Year 2–3",
  title: "Acceleration",
  items: [
  "Acquisitions up to 18–22 companies",
  "AI roadmap completion: demand forecasting, quality control, predictive maintenance",
  "Average portfolio EBITDA margin ~14%"]

},
{
  period: "Year 4–5",
  title: "Scale",
  items: [
  "Portfolio of 40+ companies, revenue €600–800M, EBITDA €82M",
  "Exit options: IPO, strategic sale, or private continuation with refinance"]

}];


const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Timeline</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16">Roadmap</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {phases.map((phase) => (
            <AnimatedSection key={phase.period}>
              <div className="border border-neutral-800 rounded-2xl p-8 hover:border-neutral-600 transition-colors">
                <span className="text-xs text-primary font-mono mb-2 block">{phase.period}</span>
                <h3 className="text-xl font-display font-bold text-white mb-4">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-primary mt-1">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;