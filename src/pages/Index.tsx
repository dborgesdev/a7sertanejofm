import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PlayerSection from "@/components/PlayerSection";
import AboutSection from "@/components/AboutSection";
import CultureCards from "@/components/CultureCards";
import BenefitsRow from "@/components/BenefitsRow";
import AppDownload from "@/components/AppDownload";
import InstagramCTA from "@/components/InstagramCTA";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <PlayerSection />
      <AboutSection />
      <CultureCards />
      <BenefitsRow />
      <AppDownload />
      <InstagramCTA />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
