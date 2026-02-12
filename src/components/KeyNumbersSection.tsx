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


const KeyNumbersSection = () => {};































export default KeyNumbersSection;