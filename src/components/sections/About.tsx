import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import FolderSection from "@/components/ui/FolderSection";

const About = () => {
  const avatarRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [avatarVisible, setAvatarVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const observeElement = (el: HTMLElement | null, callback: (visible: boolean) => void) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          callback(entry.isIntersecting);
        },
        { threshold: 0.2 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    };

    const cleanup1 = observeElement(avatarRef.current, setAvatarVisible);
    const cleanup2 = observeElement(textRef.current, (visible) => {
      if (visible) {
        setTimeout(() => setTextVisible(true), 150);
      } else {
        setTextVisible(false);
      }
    });

    return () => {
      cleanup1?.();
      cleanup2?.();
    };
  }, []);

  return (
    <section id="about" className="py-20 px-6">
      <FolderSection title="About Me">
        <div className="grid md:grid-cols-[220px_1fr] gap-12 items-start">
          {/* Avatar with premium animation */}
          <div className="flex justify-center md:justify-start">
            <div
              ref={avatarRef}
              className={cn(
                "relative w-44 h-44 rounded-2xl overflow-hidden",
                "transform transition-all duration-700 ease-out",
                avatarVisible
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-90 rotate-3",
              )}
            >
              {/* Profile Photo */}
              <img
                src="/profile.jpeg"
                alt="Ashitosh Krishna Ingale"
                className="w-full h-full object-cover"
              />

              {/* Hover overlay */}
              <div className={cn(
                "absolute inset-0 bg-primary/0 transition-all duration-500",
                "hover:bg-primary/10"
              )} />

              {/* Decorative corner */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 border-2 border-primary rounded-lg opacity-30" />
            </div>
          </div>

          {/* Bio content with staggered reveal */}
          <div ref={textRef} className="space-y-5">
            <h2 className={cn(
              "text-2xl font-bold mb-2",
              "transform transition-all duration-500 ease-out",
              textVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            )}>
              Ashitosh Krishna Ingale
            </h2>
            <p className={cn(
              "text-lg text-muted-foreground leading-relaxed",
              "transform transition-all duration-500 ease-out delay-75",
              textVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            )}>
              I'm a detail-oriented Computer Science Engineering student at D.Y. Patil School of
              Engineering & Management University, Kolhapur. I have hands-on experience in developing
              applications such as a smart timetable generator, AI-based resume analyzer, and
              social-impact platforms.
            </p>
            <p className={cn(
              "text-lg text-muted-foreground leading-relaxed",
              "transform transition-all duration-500 ease-out delay-100",
              textVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            )}>
              Eager to learn, adapt, and contribute to innovative technology-driven teams. Experienced
              in developing applications with modern web technologies and IoT systems.
            </p>

            {/* Stats row */}
            <div className={cn(
              "flex flex-wrap gap-8 pt-6",
              "transform transition-all duration-500 ease-out delay-200",
              textVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            )}>
              {[
                { value: "Pursuing", label: "B.Tech CSE" },
                { value: "6+", label: "Projects Completed" },
                { value: "7+", label: "Certifications" },
              ].map((stat, i) => (
                <div key={i} className="group">
                  <span className="text-3xl font-bold text-primary group-hover:scale-110 inline-block transition-transform duration-300">
                    {stat.value}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FolderSection>
    </section>
  );
};

export default About;
