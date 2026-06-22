import CompaniesSection from "@/components/CompaniesSection";
import CompanyFactorySection from "@/components/CompanyFactorySection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import OperatingModelSection from "@/components/OperatingModelSection";
import ServicesContactSection from "@/components/ServicesContactSection";
import ServicesSection from "@/components/ServicesSection";
import TechnologyCoreSection from "@/components/TechnologyCoreSection";
import TrustedBySection from "@/components/TrustedBySection";
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
      <ServicesSection />
      <TrustedBySection />
      <ServicesContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
