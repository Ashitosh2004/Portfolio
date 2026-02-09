import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  index?: number;
}

const SkillBadge = ({ skill, index = 0 }: SkillBadgeProps) => {
  const badgeRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = badgeRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 50);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <span
      ref={badgeRef}
      className={cn(
        "inline-flex px-4 py-2 text-sm rounded-lg bg-card border border-border font-medium",
        "transform transition-all duration-300 ease-out cursor-default",
        "opacity-0 translate-y-4 scale-95",
        isVisible && "opacity-100 translate-y-0 scale-100",
        // Hover effect
        "hover:border-primary hover:text-primary hover:-translate-y-0.5",
        "hover:shadow-[0_4px_12px_-4px_hsl(var(--primary)/0.2)]"
      )}
    >
      {skill}
    </span>
  );
};

export default SkillBadge;
