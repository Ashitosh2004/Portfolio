import FolderSection from "@/components/ui/FolderSection";
import SkillBadge from "@/components/ui/SkillBadge";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const categories: { label: string; skills: string[] }[] = [
  {
    label: "Programming Languages",
    skills: ["Java", "C", "Python", "C++", "TypeScript", "JavaScript", "Dart", "Kotlin"]
  },
  {
    label: "Frontend & Mobile",
    skills: ["HTML5", "CSS3", "React", "React Native", "Next.js", "Flutter", "Vite", "Tailwind CSS", "Bootstrap", "Three.js"]
  },
  {
    label: "Backend & APIs",
    skills: ["Node.js", "Express.js", "Socket.io", "REST APIs", "GraphQL"]
  },
  {
    label: "Databases & Cloud",
    skills: ["MySQL", "MongoDB", "Firebase", "Supabase", "PostgreSQL", "Netlify", "Vercel"]
  },
  {
    label: "AI, Data & Tools",
    skills: ["Pandas", "NumPy", "TensorFlow", "Power BI", "Docker", "Git", "GitHub", "VS Code", "Figma", "Canva", "Postman"]
  },
  {
    label: "IoT & Hardware",
    skills: ["Arduino", "ESP32-CAM"]
  },
  {
    label: "Soft Skills",
    skills: ["Problem-solving", "Leadership", "Communication", "Adaptability", "Time Management"]
  },
  {
    label: "Languages",
    skills: ["English", "Hindi", "Marathi", "Kannada"]
  },
];

const Skills = () => {
  let badgeIndex = 0;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-6">
      <FolderSection title="Skills & Technologies" isActive>
        <div ref={sectionRef} className="space-y-10">
          {categories.map((cat, catIndex) => (
            <div
              key={cat.label}
              className={cn(
                "transform transition-all duration-700 ease-out",
                "opacity-0 translate-x-8",
                isVisible && "opacity-100 translate-x-0"
              )}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest">
                  {cat.label}
                </h3>
                <div className="flex-1 h-px bg-border" />
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => {
                  const currentIndex = badgeIndex++;
                  return <SkillBadge key={skill} skill={skill} index={currentIndex} />;
                })}
              </div>
            </div>
          ))}
        </div>
      </FolderSection>
    </section>
  );
};

export default Skills;
