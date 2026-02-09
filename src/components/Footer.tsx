import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => (
  <footer className="relative py-16 border-t border-border overflow-hidden">
    {/* Subtle background pattern */}
    <div className="absolute inset-0 grid-background opacity-[0.01] pointer-events-none" />

    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">
            Portfolio<span className="text-primary">.</span>
          </span>
        </div>

        {/* Center text */}
        <p className={cn(
          "flex items-center gap-1.5 text-sm text-muted-foreground",
          "transition-colors duration-300 hover:text-foreground"
        )}>
          Built with <Heart size={14} className="text-primary fill-primary animate-pulse" /> using React & Tailwind
        </p>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ashitosh Krishna Ingale. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
