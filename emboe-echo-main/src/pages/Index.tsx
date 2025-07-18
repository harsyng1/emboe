import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import StorySection from "@/components/StorySection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductSection />
      <StorySection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
