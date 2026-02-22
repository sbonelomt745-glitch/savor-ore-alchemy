import HeroSection from "@/components/HeroSection";
import DiscoveryCatalog from "@/components/DiscoveryCatalog";
import PackagingSpotlight from "@/components/PackagingSpotlight";

const Index = () => (
  <div className="min-h-screen bg-background relative z-10">
    <HeroSection />
    <DiscoveryCatalog />
    <PackagingSpotlight />
  </div>
);

export default Index;
