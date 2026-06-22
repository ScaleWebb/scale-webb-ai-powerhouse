import CompaniesSection from "@/components/CompaniesSection";
import CompanyFactorySection from "@/components/CompanyFactorySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OperatingModelSection from "@/components/OperatingModelSection";
import TechnologyCoreSection from "@/components/TechnologyCoreSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";

const Index = () => (
  <div className="min-h-screen overflow-x-hidden bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <CompaniesSection />
      <WhatWeDoSection />
      <OperatingModelSection />
      <CompanyFactorySection />
      <TechnologyCoreSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
