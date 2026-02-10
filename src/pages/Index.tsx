import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionSection from "@/components/VisionSection";
import BusinessModelSection from "@/components/BusinessModelSection";
import ProductsSection from "@/components/ProductsSection";
import TargetSection from "@/components/TargetSection";
import KeyNumbersSection from "@/components/KeyNumbersSection";
import WhySection from "@/components/WhySection";
import RoadmapSection from "@/components/RoadmapSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <BusinessModelSection />
      <ProductsSection />
      <TargetSection />
      <KeyNumbersSection />
      <WhySection />
      <RoadmapSection />
      <TeamSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
