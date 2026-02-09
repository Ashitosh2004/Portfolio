import { useState, FormEvent, useRef, useEffect } from "react";
import { Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import FolderSection from "@/components/ui/FolderSection";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const el = formRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Bidirectional animation
        setFormVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputBaseClass = cn(
    "w-full px-5 py-4 rounded-xl bg-background border border-border text-foreground text-sm",
    "transition-all duration-500 ease-out",
    "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
    "hover:border-muted-foreground/50",
    "placeholder:text-muted-foreground/50"
  );

  const socialLinks = [
    { icon: Github, href: "https://github.com/Ashitosh2004", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ashitosh-ingale-6702a82a3/", label: "LinkedIn" },
    { icon: Send, href: "mailto:ashitoshingale8@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <FolderSection title="Get in Touch">
        <div className="grid md:grid-cols-[1fr_280px] gap-12">
          {submitted ? (
            <div className={cn(
              "text-center py-16 md:col-span-2",
              "animate-scale-in"
            )}>
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <>
              {/* Contact Form */}
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className={cn(
                  "space-y-6 transition-all duration-700 ease-out",
                  formVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className={cn(
                    "transition-transform duration-500",
                    focusedField === "name" && "-translate-y-1"
                  )}>
                    <label className="text-sm font-medium block mb-2 text-muted-foreground">Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      className={inputBaseClass}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>

                  <div className={cn(
                    "transition-transform duration-500",
                    focusedField === "email" && "-translate-y-1"
                  )}>
                    <label className="text-sm font-medium block mb-2 text-muted-foreground">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="your@email.com"
                      className={inputBaseClass}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                    />
                  </div>
                </div>

                <div className={cn(
                  "transition-transform duration-500",
                  focusedField === "message" && "-translate-y-1"
                )}>
                  <label className="text-sm font-medium block mb-2 text-muted-foreground">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={cn(inputBaseClass, "resize-none")}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                <button
                  type="submit"
                  className={cn(
                    "inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-medium",
                    "transition-all duration-500 ease-out",
                    "hover:shadow-[0_15px_40px_-12px_hsl(var(--primary)/0.5)]",
                    "hover:-translate-y-1 active:translate-y-0",
                    "active:scale-[0.98]"
                  )}
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>

              {/* Social Links - Side panel */}
              <div className={cn(
                "transition-all duration-700 ease-out delay-150",
                formVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              )}>
                <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
                  Connect
                </h4>
                <div className="space-y-3">
                  {socialLinks.map(({ icon: Icon, href, label }, i) => (
                    <a
                      key={i}
                      href={href}
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-xl border border-border",
                        "transition-all duration-500 ease-out group",
                        "hover:border-primary hover:bg-primary/5",
                        "hover:-translate-x-1 hover:shadow-[0_8px_20px_-8px_hsl(var(--primary)/0.2)]"
                      )}
                    >
                      <div className="p-2 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors duration-300">
                        <Icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      </div>
                      <span className="text-sm font-medium group-hover:text-primary transition-colors duration-300">
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </FolderSection>
    </section>
  );
};

export default Contact;
