import { useLocation, useNavigate } from "react-router-dom";
import { Home, FolderOpen, User, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const items = [
  { icon: Home, label: "Home", href: "/", sectionId: "hero", isHash: false },
  { icon: User, label: "About", href: "/#about", sectionId: "about", isHash: true },
  { icon: FolderOpen, label: "Projects", href: "/projects", sectionId: null, isHash: false },
  { icon: Mail, label: "Contact", href: "/#contact", sectionId: "contact", isHash: true },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggle } = useTheme();
  const [activeSection, setActiveSection] = useState<string | null>("hero");

  // Track active section based on scroll position
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -60% 0px"
      }
    );

    // Observe all sections
    const sections = ["hero", "about", "skills", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const isActive = (item: typeof items[0]) => {
    if (item.href === "/projects") {
      return location.pathname === "/projects";
    }
    if (location.pathname !== "/") return false;
    return activeSection === item.sectionId;
  };

  const handleClick = (e: React.MouseEvent, href: string, isHash: boolean, sectionId: string | null) => {
    e.preventDefault();

    if (href === "/") {
      // Home button - scroll to top
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (isHash && sectionId) {
      // Section links (About, Contact)
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }, 100);
      } else {
        // We're on home page, just scroll
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    } else {
      // Projects page
      navigate(href);
    }
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
      <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-card/95 backdrop-blur-sm border border-border shadow-lg">
        {items.map((item) => {
          const active = isActive(item);
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href, item.isHash, item.sectionId)}
              className={cn(
                "relative flex items-center gap-2 px-4 py-2.5 rounded-full",
                "transition-all duration-500 ease-out cursor-pointer",
                active
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <item.icon size={18} strokeWidth={active ? 2.5 : 2} className="transition-all duration-300" />
              <span className={cn(
                "text-sm font-medium transition-all duration-500",
                active ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden md:opacity-100 md:w-auto"
              )}>
                {item.label}
              </span>
            </a>
          );
        })}

        {/* Theme Toggle */}
        <button
          onClick={toggle}
          className="flex items-center justify-center w-10 h-10 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-500 ease-out hover:rotate-180"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
