import AnimatedSection from "./AnimatedSection";
import { Mail, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contatti" className="section-padding bg-card/50">
    <div className="max-w-4xl mx-auto text-center">
      <AnimatedSection>
        <p className="text-primary font-display text-sm font-medium tracking-widest uppercase mb-4">
          Contatti
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
          Sei un founder, un imprenditore manifatturiero o un investitore?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Parliamo di come possiamo scalare insieme digitale e manifattura con l'AI.
        </p>

        <a
          href="mailto:info@scalewebb.com"
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-md font-display font-semibold text-lg hover:bg-primary/90 transition-all glow-primary mb-12"
        >
          Richiedi una call
        </a>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-primary" />
            <span className="text-sm">info@scalewebb.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-primary" />
            <span className="text-sm">Milano, Italia (HQ) – Hub Europa in definizione</span>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ContactSection;
