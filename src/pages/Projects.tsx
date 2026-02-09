import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { allProjects } from "@/components/sections/FeaturedProjects";
import { cn } from "@/lib/utils";

const categories = ["All", ...new Set(allProjects.map((p) => p.category))];

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? allProjects : allProjects.filter((p) => p.category === active);

  return (
    <Layout>
      {/* Background - render immediately */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-background">
        <div className="absolute inset-0 grid-background opacity-[0.015]" />
        <div className="absolute w-[500px] h-[500px] border border-secondary/8 rounded-full top-[5%] left-[-10%] animate-float-slow" />
        <div className="absolute w-[350px] h-[350px] border border-primary/5 top-[50%] right-[-5%] rotate-45 animate-float-medium" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] top-[-10%] right-[-15%]" />
      </div>

      <section className="relative z-10 py-28 md:py-36 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Header - faster animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-12"
          >
            <Link 
              to="/" 
              className={cn(
                "inline-flex items-center gap-2 text-sm text-muted-foreground mb-8",
                "transition-all duration-300 hover:text-foreground group"
              )}
            >
              <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              A collection of work that showcases my skills and passion for building digital products.
            </p>
          </motion.div>

          {/* Filter - faster animation */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "px-5 py-2.5 text-sm font-medium rounded-full border transition-all duration-500",
                  active === c
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_8px_20px_-8px_hsl(var(--primary)/0.4)]"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                )}
              >
                {c}
              </button>
            ))}
          </motion.div>

          {/* Grid - faster card animations */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: Math.min(i * 0.03, 0.15),
                    ease: "easeOut"
                  }}
                  className={cn(
                    "group bg-card rounded-2xl border border-border overflow-hidden",
                    "transition-all duration-500",
                    "hover:-translate-y-2 hover:border-primary/50",
                    "hover:shadow-[0_20px_50px_-12px_hsl(var(--primary)/0.25)]"
                  )}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={cn(
                        "px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full",
                        "transition-all duration-300",
                        "group-hover:bg-primary group-hover:text-primary-foreground"
                      )}>
                        {p.category}
                      </span>
                      
                      <div className="flex items-center gap-1 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                        {p.githubUrl && (
                          <a
                            href={p.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
                          >
                            <Github size={18} />
                          </a>
                        )}
                        {p.liveUrl && (
                          <a
                            href={p.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground group-hover:bg-secondary/50 transition-colors duration-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
