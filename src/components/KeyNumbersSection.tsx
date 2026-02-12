import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

const Counter = ({ target, suffix = "" }: {target: number;suffix?: string;}) => {
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
{ label: "Year 5 Target Revenue", value: 700, suffix: "M €", display: "600–800" },
{ label: "Target EBITDA", value: 82, suffix: "M €" },
{ label: "EBITDA Margin", value: 14, suffix: "%" },
{ label: "Portfolio Companies", value: 45, suffix: "", display: "40–49" }];


const KeyNumbersSection = () => {
  return (
    <section id="numbers" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Projections</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16">Key Numbers</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {numbers.map((n) => (
            <AnimatedSection key={n.label}>
              <div className="border border-neutral-800 rounded-2xl p-8 text-center hover:border-neutral-600 transition-colors">
                <p className="text-4xl font-display font-bold text-white mb-2">
                  {n.display || <Counter target={n.value} suffix={n.suffix} />}
                  {n.display && <span className="text-2xl ml-1">{n.suffix}</span>}
                </p>
                <p className="text-muted-foreground text-sm">{n.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};





























export default KeyNumbersSection;