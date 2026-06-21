import AboutSection from "@/components/AboutSection";
import BusinessModelSection from "@/components/BusinessModelSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/ProductsSection";
import WhySection from "@/components/WhySection";

const Index = () => (
  <div className="min-h-screen overflow-x-hidden bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <BusinessModelSection />
      <ProductsSection />
      <WhySection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
