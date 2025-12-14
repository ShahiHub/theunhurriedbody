import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExpertSection } from "@/components/sections/ExpertSection";
import { RelationsSection } from "@/components/sections/RelationsSection";
import { EmotionsSection } from "@/components/sections/EmotionsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SessionsSection } from "@/components/sections/SessionsSection";
import { StorySection } from "@/components/sections/StorySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Justin Nelson – Alexander Technique | Gentle Movement Teaching</title>
        <meta
          name="description"
          content="One-to-one and small-group Alexander Technique lessons with Justin Nelson. Learn to notice how you move, let go of unnecessary effort, and feel more at ease in your own body."
        />
        <meta property="og:title" content="Justin Nelson – Alexander Technique" />
        <meta
          property="og:description"
          content="One-to-one and small-group Alexander Technique lessons. Learn to move with ease."
        />
      </Helmet>
      
      <Navigation />
      
      <main className="w-full">
        <HeroSection />
        <ExpertSection />
        <RelationsSection />
        <EmotionsSection />
        <AboutSection />
        <SessionsSection />
        <StorySection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
