import { ReactNode, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FolderSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
  isActive?: boolean;
}

const FolderSection = ({ title, children, className, isActive = false }: FolderSectionProps) => {
  const folderRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = folderRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Bidirectional: animate in when entering, animate out when leaving
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={folderRef}
      className={cn(
        "group relative",
        "transform transition-all duration-700 ease-out",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-12",
        className
      )}
    >
      {/* Folder Tab */}
      <div className="relative z-10 inline-flex">
        <div
          className={cn(
            "px-8 py-4 rounded-t-2xl font-semibold text-sm tracking-wide",
            "transform origin-bottom transition-all duration-700 ease-out",
            isActive 
              ? "bg-primary text-primary-foreground" 
              : "bg-secondary/80 text-secondary-foreground",
            "group-hover:-translate-y-2 group-hover:shadow-[0_-8px_30px_-10px_hsl(var(--primary)/0.2)]"
          )}
        >
          {title}
        </div>
      </div>

      {/* Folder Content */}
      <div
        className={cn(
          "relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl rounded-tl-none",
          "p-8 md:p-10 transition-all duration-700 ease-out",
          "group-hover:shadow-[0_20px_60px_-20px_hsl(var(--secondary)/0.3)]",
          "group-hover:border-secondary/50"
        )}
      >
        {/* Corner accent */}
        <div className={cn(
          "absolute top-0 right-0 w-20 h-20 rounded-bl-3xl",
          "bg-gradient-to-bl from-primary/5 to-transparent",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        )} />
        
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FolderSection;
