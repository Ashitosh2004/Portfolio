import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import FolderSection from "@/components/ui/FolderSection";

const timeline = [
  {
    year: "2022 — Present",
    title: "B.Tech. Computer Science Engineering (Pursuing)",
    institution: "D.Y. Patil School of Engineering & Management University, Kolhapur",
    description: "Focusing on software engineering, algorithms, web development, and IoT systems.",
  },
  {
    year: "2021 — 2023",
    title: "HSC (PCMB)",
    institution: "S. K. Hukkeri PU College, Ghataprabha",
    description: "Completed Higher Secondary Certificate with Physics, Chemistry, Mathematics, and Biology.",
  },
  {
    year: "2020 — 2021",
    title: "SSC with Distinction",
    institution: "Oriental English Medium School, Ghataprabha",
    description: "Completed Secondary School Certificate with distinction.",
  },
];

interface TimelineItemProps {
  item: typeof timeline[0];
  index: number;
}

const TimelineItem = ({ item, index }: TimelineItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Bidirectional animation
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={itemRef}
      className={cn(
        "relative pl-8 md:pl-12 group",
        "transform transition-all duration-500 ease-out",
        isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-8"
      )}
    >
      {/* Timeline dot with ring effect */}
      <div className={cn(
        "absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-primary bg-background",
        "transition-all duration-500",
        "group-hover:scale-125 group-hover:bg-primary",
        "after:absolute after:inset-[-4px] after:rounded-full after:border after:border-primary/30",
        "after:scale-0 after:transition-transform after:duration-500",
        "group-hover:after:scale-100"
      )} />

      <div className={cn(
        "p-5 rounded-xl transition-all duration-500",
        "hover:bg-muted/50 hover:translate-x-2"
      )}>
        <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3">
          {item.year}
        </span>
        <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">{item.institution}</p>
        <p className="text-sm text-muted-foreground/70">{item.description}</p>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-card/30">
      <FolderSection title="Education">
        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-[7px] md:left-[7px] top-6 bottom-6 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-2">
            {timeline.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </FolderSection>
    </section>
  );
};

export default Education;
