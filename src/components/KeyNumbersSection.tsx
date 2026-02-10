import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const numbers = [
  { label: "Ricavi target Year 5", value: 700, suffix: "M €", display: "600–800" },
  { label: "EBITDA target", value: 82, suffix: "M €" },
  { label: "Margine EBITDA", value: 14, suffix: "%" },
  { label: "Aziende in portfolio", value: 45, suffix: "", display: "40–49" },
];

const KeyNumbersSection = () => (
  <section id="numeri" className="section-padding bg-card/50">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection>
        <p className="text-primary font-display text-sm font-medium tracking-widest uppercase mb-4">
          I numeri
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 max-w-3xl">
          Ambizione misurabile.
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-16">
          TAM combinato SaaS + mobile app ~1.400 mld USD al 2030. Digital transformation Italia ~166 mld USD al 2030.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {numbers.map((n, i) => (
          <AnimatedSection key={n.label} delay={i * 0.1}>
            <div className="bg-card border border-border rounded-xl p-8 text-center hover:border-primary/30 transition-all duration-300">
              <p className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                {n.display ? n.display : <Counter target={n.value} suffix={n.suffix} />}
                {n.display && <span className="text-3xl"> {n.suffix?.trim()}</span>}
              </p>
              <p className="text-sm text-muted-foreground">{n.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default KeyNumbersSection;
