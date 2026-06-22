import AnimatedSection from "./AnimatedSection";

const clients = [
  { name: "Artemaglia", logo: "/assets/artemaglia-logo.png", className: "trusted-logo-artemaglia" },
  { name: "Falde Atelier", logo: "/assets/falde-logo.png", className: "trusted-logo-falde" },
  { name: "Axen Platform", logo: "/assets/axen-logo.png", className: "trusted-logo-axen" },
];

const ClientSet = ({ hidden = false }: { hidden?: boolean }) => (
  <div className="trusted-set" aria-hidden={hidden || undefined}>
    {clients.map((client) => (
      <div key={client.name} className="trusted-pill">
        <img
          src={client.logo}
          alt={hidden ? "" : `${client.name} logo`}
          className={`trusted-logo ${client.className}`}
          loading="lazy"
        />
      </div>
    ))}
  </div>
);

const TrustedBySection = () => (
  <section className="overflow-hidden border-y border-ink/10 bg-[var(--paper)] py-16 text-ink md:py-20">
    <div className="section-shell">
      <AnimatedSection className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <h2 className="font-display text-2xl font-medium tracking-[-0.035em] md:text-3xl">
          Companies that trust our execution
        </h2>
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-ink/[0.35]">Clients and portfolio companies</p>
      </AnimatedSection>
    </div>
    <AnimatedSection className="trusted-marquee mt-10" delay={0.08}>
      <div className="trusted-track">
        <ClientSet />
        <ClientSet hidden />
      </div>
    </AnimatedSection>
  </section>
);

export default TrustedBySection;
