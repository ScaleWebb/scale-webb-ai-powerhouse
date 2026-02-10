import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroVisual}
        alt="Network AI visualization"
        className="w-full h-full object-cover opacity-40"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-20 w-full">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-primary font-display text-sm md:text-base font-medium tracking-widest uppercase mb-6">
            Scaling digital & manufacturing with AI
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] tracking-tight text-foreground mb-8">
            La holding AI-first che consolida{" "}
            <span className="text-gradient-primary">digitale e manifattura</span>{" "}
            in Europa.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10">
            Scale Webb acquisisce e trasforma prodotti digitali e PMI manifatturiere,
            integrandoli in una piattaforma tecnologica centralizzata basata su AI ed ERP cloud,
            per aumentare margini, efficienza e valore nel lungo termine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contatti"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md font-display font-semibold text-base hover:bg-primary/90 transition-all glow-primary"
            >
              Parla con il team
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded-md font-display font-medium text-base hover:bg-secondary transition-all"
            >
              <FileText size={18} />
              Scarica il business plan
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:block"
        />
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-xs text-muted-foreground tracking-widest uppercase">Scopri di più</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <ArrowDown size={20} className="text-primary" />
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
