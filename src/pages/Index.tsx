import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Certificates from "@/components/sections/Certificates";
import Skills from "@/components/sections/Skills";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Contact from "@/components/sections/Contact";

const Index = () => (
  <Layout>
    <HeroSection />

    {/* Content with simplified animated background */}
    <div className="relative">
      {/* Simplified Animated Background - fewer elements for better performance */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Static grid - no animation */}
        <div className="absolute inset-0 grid-background opacity-[0.015]" />

        {/* Reduced floating shapes - only 3 instead of 5 */}
        <div className="absolute w-[400px] h-[400px] border border-secondary/5 rounded-full top-[10%] left-[-5%] animate-float-slow" />
        <div className="absolute w-[300px] h-[300px] border border-primary/3 top-[60%] right-[-5%] rotate-45 animate-float-medium" />
        <div className="absolute w-[250px] h-[250px] border border-secondary/5 rounded-full bottom-[20%] left-[50%] animate-float-fast" />
      </div>

      {/* Dashboard Content */}
      <div className="relative z-10 container mx-auto max-w-5xl px-6 py-16 pb-32 md:pb-16">
        <div className="space-y-6">
          <About />
          <Education />
          <Certificates />
          <Skills />
          <FeaturedProjects />
          <Contact />
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
