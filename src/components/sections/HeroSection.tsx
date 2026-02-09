import { useState } from "react";
import { ArrowDown, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import ResumeViewer from "@/components/ui/ResumeViewer";
import "./HeroSection.css";

const HeroSection = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <section id="hero" className="hero-section">
        {/* Animated Background */}
        <div className="hero-background">
          {/* Subtle Grid Overlay */}
          <div className="grid-overlay" />

          {/* Floating Geometric Shapes */}
          <div className="geometric-shape shape-1" />
          <div className="geometric-shape shape-2" />
          <div className="geometric-shape shape-3" />
          <div className="geometric-shape shape-4" />
          <div className="geometric-shape shape-5" />
          <div className="geometric-shape shape-6" />

          {/* Ambient glow orbs */}
          <div className="ambient-orb orb-1" />
          <div className="ambient-orb orb-2" />
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          {/* Subtle tag line */}
          <span className="hero-tagline">
            <span className="hero-tagline-dot" />
            Available for opportunities
          </span>

          <h1 className="hero-heading">
            <span className="hero-heading-line">Crafting Digital</span>
            <span className="hero-heading-line hero-heading-accent">Experiences</span>
          </h1>

          <p className="hero-subtitle">
            A passionate developer focused on creating elegant, user-centered
            applications with clean code and thoughtful design.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#about" className="hero-cta hero-cta-primary">
              Explore Work
              <ArrowDown size={16} className="hero-cta-icon" />
            </a>

            <button
              onClick={() => setResumeOpen(true)}
              className="hero-cta hero-cta-secondary"
            >
              <FileText size={16} />
              View Resume
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-indicator-mouse">
            <div className="scroll-indicator-wheel" />
          </div>
          <span className="scroll-indicator-text">Scroll to explore</span>
        </div>

        {/* Bottom gradient fade */}
        <div className="hero-fade" />
      </section>

      {/* Resume Modal */}
      <ResumeViewer isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
};

export default HeroSection;
