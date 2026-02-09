import { useLocation, useNavigate } from "react-router-dom";
import { Home, FolderOpen, User, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const items = [
  { icon: Home, label: "Home", href: "/", sectionId: "hero", isHash: false },
  { icon: User, label: "About", href: "/#about", sectionId: "about", isHash: true },
  { icon: FolderOpen, label: "Projects", href: "/projects", sectionId: null, isHash: false },
  { icon: Mail, label: "Contact", href: "/#contact", sectionId: "contact", isHash: true },
];

const MobileNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string | null>("hero");

  // Track active section based on scroll position
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Sort entries by intersection ratio to prioritize the most visible section
        const sortedEntries = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (sortedEntries.length > 0) {
          setActiveSection(sortedEntries[0].target.id);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
        rootMargin: "-80px 0px -50% 0px"
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
    <nav className="fixed bottom-6 left-0 right-0 z-50 flex justify-center md:hidden animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
      <div className="flex items-center gap-1 px-3 py-2.5 rounded-full bg-card/95 backdrop-blur-sm border border-border shadow-lg">
        {items.map((item) => {
          const active = isActive(item);
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href, item.isHash, item.sectionId)}
              className={cn(
                "relative flex items-center justify-center w-12 h-12 rounded-full",
                "transition-all duration-500 ease-out cursor-pointer",
                active
                  ? "bg-foreground text-background scale-105"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <item.icon size={22} strokeWidth={active ? 2.5 : 2} className="transition-all duration-300" />
              {active && (
                <span className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
