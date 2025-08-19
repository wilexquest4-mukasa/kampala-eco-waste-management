import { HeroSection } from "@/components/hero-section";
import { DashboardSection } from "@/components/dashboard-section";
import { FeaturesSection } from "@/components/features-section";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <DashboardSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
