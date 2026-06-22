import { ArrowUpRight, Mail, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ServicesContactSection = () => (
  <section id="contact" className="services-contact relative overflow-hidden py-24 text-ink md:py-32">
    <div className="contact-grid" aria-hidden="true" />
    <div className="section-shell relative z-10">
      <AnimatedSection>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/[0.45]">ScaleWebb Services / Contact</p>
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.62fr_0.38fr] lg:items-end">
          <div>
            <h2 className="max-w-5xl font-display text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.94] tracking-[-0.06em]">
              Work with ScaleWebb Services
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/60">
              Tell us what you are building, improving or trying to scale. We can help you define the right
              technological and operational structure.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a href="tel:+393453279011" className="services-contact-button">
              <span className="flex items-center gap-3">
                <Phone size={17} />
                Call us
              </span>
              <span className="text-xs text-ink/[0.45]">+39 345 327 9011</span>
            </a>
            <a href="mailto:service@scalewebb.com" className="services-contact-button services-contact-button-dark">
              <span className="flex items-center gap-3">
                <Mail size={17} />
                Email ScaleWebb Services
              </span>
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ServicesContactSection;
