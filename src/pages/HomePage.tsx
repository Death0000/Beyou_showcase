import { useScroll, motion } from "motion/react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection3 from "@/components/ui/about-section";
import FeaturesSection from "@/components/sections/FeaturesSection";
import { Skiper52 } from "@/components/sections/InteractiveGallery";

interface HomePageProps {
  setActivePage: (page: string) => void;
}

export default function HomePage({ setActivePage }: HomePageProps) {
  // Global scroll tracker
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      key="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Main Hero Interface View */}
      <div className="relative">
        <HeroSection scrollProgress={scrollYProgress} setActivePage={setActivePage} />
      </div>

      {/* Integrated AboutSection3 component */}
      <AboutSection3 setActivePage={setActivePage} />

      {/* Max Reed Personal Portfolio Features Grid Section */}
      <FeaturesSection />

      {/* Interactive Designer Portfolio Showcase Gallery (Skiper52 Expand-on-Hover UI) */}
      <Skiper52 />
    </motion.div>
  );
}
