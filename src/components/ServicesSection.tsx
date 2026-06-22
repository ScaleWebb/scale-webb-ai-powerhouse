import { Bot, BriefcaseBusiness, Code2, Megaphone, Settings2, Video } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Code2,
    title: "Custom Technology Development",
    text: "Websites, platforms, internal tools, automation systems and software infrastructure built around the company’s real operational needs.",
    accent: "service-card-purple",
  },
  {
    icon: Bot,
    title: "AI, Automation & Systems",
    text: "We design workflows, data systems and AI-powered processes to reduce manual work and improve execution.",
    accent: "service-card-blue",
  },
  {
    icon: Megaphone,
    title: "Marketing & Growth",
    text: "Brand positioning, content strategy, campaigns, customer acquisition systems and digital growth support.",
    accent: "service-card-pink",
  },
  {
    icon: Video,
    title: "Video, Photo & Creative Production",
    text: "Commercial shooting, product content, social media assets and visual material designed to support sales and brand perception.",
    accent: "service-card-yellow",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business Strategy & Organization",
    text: "Support in structuring operations, offers, processes, pricing, internal organization and go-to-market strategy.",
    accent: "service-card-mint",
  },
  {
    icon: Settings2,
    title: "Operational Management",
    text: "Hands-on execution support for companies that need a practical team able to coordinate technology, marketing and business development.",
    accent: "service-card-purple",
  },
];

const ServicesSection = () => (
  <section id="services" className="services-section section-padding">
    <div className="services-glow services-glow-one" aria-hidden="true" />
    <div className="services-glow services-glow-two" aria-hidden="true" />
    <div className="section-shell relative z-10">
      <AnimatedSection className="grid gap-12 lg:grid-cols-[0.36fr_0.64fr] lg:gap-24">
        <div>
          <p className="section-index section-index-dark">06 / Third-party operations</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Technology", "Strategy", "Execution"].map((item) => (
              <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-white/40">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="heading-light">
            ScaleWebb <span className="candy-gradient-text">Services</span>
          </h2>
          <p className="mt-7 max-w-3xl font-display text-2xl font-medium leading-9 tracking-[-0.035em] text-white/80 md:text-3xl md:leading-10">
            An operational partner for companies that need technology, strategy and execution.
          </p>
          <p className="mt-8 max-w-3xl text-base leading-8 text-white/50">
            ScaleWebb Services helps startups, SMEs and established companies design, build and manage the
            technological and operational infrastructure they need to grow. We develop custom software, digital
            platforms, websites, internal tools, automation systems and AI-powered workflows based on each company’s
            specific needs. Beyond technology, we support companies with marketing, brand positioning, video and
            photo production, growth strategy, business organization and operational management.
          </p>
          <div className="mt-9 border-l-2 border-candy-mint pl-5">
            <p className="max-w-2xl text-sm leading-7 text-white/[0.55]">
              Not a generic consultancy. ScaleWebb Services works with third-party companies as an execution-driven
              technology and operations partner.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <AnimatedSection key={service.title} delay={index * 0.05} className="h-full">
            <article className={`service-card ${service.accent}`}>
              <div className="flex items-start justify-between">
                <service.icon size={24} strokeWidth={1.5} className="service-icon" />
                <span className="font-mono text-[9px] tracking-[0.18em] text-white/20">0{index + 1}</span>
              </div>
              <div className="mt-auto pt-16">
                <h3 className="font-display text-2xl font-medium tracking-[-0.035em] text-white">{service.title}</h3>
                <p className="mt-5 leading-7 text-white/[0.45]">{service.text}</p>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
