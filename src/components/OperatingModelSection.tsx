import AnimatedSection from "./AnimatedSection";

const OperatingModelSection = () => (
  <section id="operating-model" className="section-light section-padding overflow-hidden">
    <div className="section-shell">
      <AnimatedSection className="mx-auto max-w-5xl text-center">
        <p className="section-index">03 / Operating model</p>
        <h2 className="heading-dark mt-7">One brain. Multiple companies. Different industries.</h2>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-ink/[0.55]">
          Each company operates in its own market, with its own brand and business model. ScaleWebb provides the
          technological brain, strategic direction and shared infrastructure needed to grow.
        </p>
      </AnimatedSection>

      <AnimatedSection className="operating-diagram" delay={0.1}>
        <div className="diagram-line diagram-line-horizontal diagram-line-top" aria-hidden="true" />
        <div className="diagram-line diagram-line-horizontal diagram-line-bottom" aria-hidden="true" />
        <div className="diagram-line diagram-line-vertical" aria-hidden="true" />
        <div className="diagram-company diagram-company-axen">
          <span className="diagram-dot bg-candy-blue" />
          <span>Axen Platform</span>
          <small>Sports technology</small>
        </div>
        <div className="diagram-company diagram-company-falde">
          <span className="diagram-dot bg-candy-pink" />
          <span>Falde Atelier</span>
          <small>Fashion & luxury</small>
        </div>
        <div className="diagram-company diagram-company-services">
          <span className="diagram-dot bg-candy-yellow" />
          <span>ScaleWebb Services</span>
          <small>Services for companies</small>
        </div>
        <div className="diagram-company diagram-company-new">
          <span className="diagram-dot bg-candy-mint" />
          <span>New companies</span>
          <small>Built or acquired</small>
        </div>
        <div className="diagram-core">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">Central core</span>
          <strong>ScaleWebb</strong>
          <p>Software / AI / Data / Operations</p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default OperatingModelSection;
