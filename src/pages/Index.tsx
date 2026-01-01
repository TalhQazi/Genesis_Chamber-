import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import OverviewSection from '@/components/OverviewSection';
import SessionPhasesSection from '@/components/SessionPhasesSection';
import TechnologySection from '@/components/TechnologySection';
import ModulesSection from '@/components/ModulesSection';
import ImmuneOptimizationSection from '@/components/ImmuneOptimizationSection';
import CellularResilienceSection from '@/components/CellularResilienceSection';
import AdaptiveIntelligenceSection from '@/components/AdaptiveIntelligenceSection';
import ComparisonSection from '@/components/ComparisonSection';
import SpecificationsSection from '@/components/SpecificationsSection';
import ResearchSection from '@/components/ResearchSection';
import FAQSection from '@/components/FAQSection';
import LegalSection from '@/components/LegalSection';
import ContactSection from '@/components/ContactSection';
import PurchaseSection from '@/components/PurchaseSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <OverviewSection />
      <SessionPhasesSection />
      <ModulesSection />
      <ImmuneOptimizationSection />
      <CellularResilienceSection />
      <AdaptiveIntelligenceSection />
      <TechnologySection />
      <ComparisonSection />
      <SpecificationsSection />
      <ResearchSection />
      <PurchaseSection />
      <FAQSection />
      <ContactSection />
      <LegalSection />
      <Footer />
    </main>
  );
};

export default Index;
