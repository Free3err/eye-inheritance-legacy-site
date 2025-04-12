
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InheritanceSection from "@/components/InheritanceSection";
import StatisticsSection from "@/components/StatisticsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <InheritanceSection />
      <StatisticsSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
