import { useRef, useEffect, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  index?: number;
}

const ProjectCard = ({ title, description, category, tags, githubUrl, liveUrl, index = 0 }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Bidirectional animation with staggered delay
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
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
    <article
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative bg-card rounded-2xl border border-border overflow-hidden",
        "transform transition-all duration-500 ease-out",
        isVisible 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-10 scale-95",
        "hover:-translate-y-3 hover:border-primary/50",
        "hover:shadow-[0_25px_50px_-12px_hsl(var(--primary)/0.25)]"
      )}
    >
      {/* Top accent bar - animated */}
      <div className={cn(
        "absolute top-0 left-0 right-0 h-1 bg-primary",
        "transform origin-left transition-transform duration-700 ease-out",
        isHovered ? "scale-x-100" : "scale-x-0"
      )} />
      
      {/* Card content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className={cn(
            "inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full",
            "bg-primary/10 text-primary",
            "transition-all duration-500",
            isHovered && "bg-primary text-primary-foreground"
          )}>
            {category}
          </span>
          
          {/* Action Links */}
          <div className={cn(
            "flex items-center gap-1",
            "transform transition-all duration-500",
            "opacity-0 translate-x-4",
            isHovered && "opacity-100 translate-x-0"
          )}>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-lg text-muted-foreground",
                  "transition-all duration-300",
                  "hover:text-foreground hover:bg-muted"
                )}
                aria-label="View GitHub repository"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={18} />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 rounded-lg text-muted-foreground",
                  "transition-all duration-300",
                  "hover:text-primary hover:bg-primary/10"
                )}
                aria-label="View live demo"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
        
        <h3 className={cn(
          "text-lg font-semibold mb-2 text-card-foreground",
          "transition-colors duration-500",
          "group-hover:text-primary"
        )}>
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={tag}
              className={cn(
                "text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground",
                "transition-all duration-500 ease-out",
                isHovered && "bg-secondary/50 text-secondary-foreground"
              )}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Hover gradient overlay */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none",
        "opacity-0 transition-opacity duration-500",
        isHovered && "opacity-100"
      )} />
    </article>
  );
};

export default ProjectCard;
