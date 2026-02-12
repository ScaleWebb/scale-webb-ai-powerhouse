import AnimatedSection from "./AnimatedSection";
import { Cloud, Factory, Brain, BarChart3, Eye, Wrench, Truck, Cpu } from "lucide-react";

const digitalProducts = [
{ icon: Cloud, name: "Vertical cloud ERP for manufacturing" },
{ icon: Cpu, name: "MES modules for production & shopfloor" },
{ icon: BarChart3, name: "AI demand forecasting" },
{ icon: Eye, name: "Quality control computer vision" },
{ icon: Wrench, name: "Predictive maintenance" },
{ icon: Truck, name: "Supply chain optimization" }];


const ProductsSection = () => {
  return (
    <section id="products" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Technology</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-16">Digital Products</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {digitalProducts.map((product) => (
            <AnimatedSection key={product.name}>
              <div className="border border-neutral-800 rounded-2xl p-8 hover:border-neutral-600 transition-colors flex items-start gap-4">
                <product.icon className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-white font-medium">{product.name}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;