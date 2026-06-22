import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const companies = [
  {
    name: "Axen Platform",
    description:
      "Axen Platform is a multi-sport technology platform designed to simplify bookings, improve client experience and digitize sport education services.",
    logo: "/assets/axen-logo.png",
    logoClassName: "max-h-24 w-full max-w-[360px]",
    accent: "company-accent-blue",
    industry: "Sports technology",
  },
  {
    name: "Falde Atelier",
    description:
      "Falde Atelier is a Made in Italy fashion and tailor-made brand focused on product, digital experience and scalable luxury operations.",
    logo: "/assets/falde-logo.png",
    logoClassName: "max-h-20 w-full max-w-[420px]",
    accent: "company-accent-pink",
    industry: "Fashion & luxury",
  },
];

const CompaniesSection = () => (
  <section id="companies" className="section-light section-padding">
    <div className="section-shell">
      <AnimatedSection className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div>
          <p className="section-index">01 / Portfolio</p>
          <h2 className="heading-dark mt-7">Our Companies</h2>
        </div>
        <p className="max-w-xl text-lg leading-8 text-ink/[0.55]">
          Independent companies, connected by one centralized technological and operational system.
        </p>
      </AnimatedSection>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {companies.map((company, index) => (
          <AnimatedSection key={company.name} delay={index * 0.1} className="h-full">
            <article className={`company-card ${company.accent}`}>
              <div className="company-logo-panel">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className={`${company.logoClassName} object-contain`}
                />
              </div>
              <div className="flex flex-1 flex-col p-7 md:p-9">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-ink/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/[0.45]">
                    {company.industry}
                  </span>
                  <ArrowUpRight size={18} className="text-ink/25" />
                </div>
                <h3 className="mt-9 font-display text-3xl font-medium tracking-[-0.045em] text-ink md:text-4xl">
                  {company.name}
                </h3>
                <p className="mt-5 max-w-xl leading-7 text-ink/[0.55]">{company.description}</p>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CompaniesSection;
