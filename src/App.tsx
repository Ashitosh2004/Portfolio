import { useEffect, useState, Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageLoader from "@/components/ui/PageLoader";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load Projects page
const Projects = lazy(() => import("./pages/Projects"));

const queryClient = new QueryClient();

// Initialize theme on app load
function ThemeInitializer() {
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Apply theme: use stored preference, or fall back to system preference
    const theme = stored || (systemDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
    
    if (!stored) {
      localStorage.setItem("theme", theme);
    }
  }, []);

  return null;
}

// Loading wrapper with minimum display time
const LoadingFallback = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && <PageLoader />}
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeInitializer />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route 
            path="/projects" 
            element={
              <Suspense fallback={<PageLoader />}>
                <Projects />
              </Suspense>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
