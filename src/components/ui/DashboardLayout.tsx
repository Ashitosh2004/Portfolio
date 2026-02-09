import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
  className?: string;
  withBackground?: boolean;
}

const DashboardLayout = ({ children, className, withBackground = true }: DashboardLayoutProps) => {
  return (
    <div className={cn("relative min-h-screen", className)}>
      {/* Animated Background */}
      {withBackground && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {/* Moving Grid Lines */}
          <div className="absolute inset-0 grid-background opacity-[0.02]" />
          
          {/* Floating Geometric Outlines */}
          <div className="absolute w-[400px] h-[400px] border border-secondary/10 rounded-full top-[10%] left-[5%] animate-float-slow" />
          <div className="absolute w-[300px] h-[300px] border border-primary/5 top-[60%] right-[10%] rotate-45 animate-float-medium" />
          <div className="absolute w-[200px] h-[200px] border border-secondary/10 rounded-full bottom-[20%] left-[50%] animate-float-fast" />
          <div className="absolute w-[350px] h-[350px] border border-secondary/5 top-[30%] right-[30%] rotate-12 animate-float-slow" style={{ animationDelay: '-5s' }} />
          <div className="absolute w-[150px] h-[150px] border border-primary/5 rounded-full top-[70%] left-[20%] animate-float-medium" style={{ animationDelay: '-10s' }} />
        </div>
      )}

      {/* Centered Dashboard Container */}
      <div className="relative z-10 container mx-auto max-w-5xl px-6 py-12">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
