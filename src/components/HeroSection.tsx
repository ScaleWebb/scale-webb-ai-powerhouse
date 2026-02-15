import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

const HeroSection = () =>
<section className="relative min-h-screen flex items-end overflow-hidden bg-black">


    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-32 pt-48 w-full">
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="max-w-3xl">

        <h1 className="text-5xl lg:text-7xl xl:text-8xl font-display font-bold leading-[1.05] tracking-tight text-white mb-8 md:text-4xl">
          <span className="text-primary">The Tech-first holding</span>{" "}
          consolidating digital & manufacturing in Europe.
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-xl mb-12">Scale Webb acquires and transforms digital products and manufacturing SMEs, integrating them into a centralized AI & cloud ERP technology.


      </p>

        <div className="flex items-center gap-6">
          <a
          href="#contact"
          className="inline-flex items-center gap-2 border border-neutral-600 text-white px-7 py-3.5 rounded-full font-display font-medium text-sm hover:bg-white/10 transition-all">

            Talk to the team
            <ArrowRight size={16} />
          </a>
          <a
          href="#about"
          className="inline-flex items-center gap-1.5 text-neutral-300 font-display font-medium text-sm hover:text-white transition-colors">

            Learn more
            <ArrowRight size={16} />
          </a>
        </div>
      </motion.div>
    </div>

    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5 }}
    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">

      <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 1.8 }}>

        <ArrowDown size={20} className="text-neutral-500" />
      </motion.div>
    </motion.div>
  </section>;


export default HeroSection;