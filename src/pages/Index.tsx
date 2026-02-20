import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import WhoBakeFor from "@/components/WhoBakeFor";
import DiscoveryCatalog from "@/components/DiscoveryCatalog";
import PackagingSpotlight from "@/components/PackagingSpotlight";
import FounderStory from "@/components/FounderStory";
import LogisticsSection from "@/components/LogisticsSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <HeroSection />
    <ProductGrid />
    <WhoBakeFor />
    <PackagingSpotlight />
    <DiscoveryCatalog />
    <FounderStory />
    <LogisticsSection />
    <Footer />
  </div>
);

export default Index;
