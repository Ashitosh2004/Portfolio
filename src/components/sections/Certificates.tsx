import { useRef, useEffect, useState } from "react";
import { Award } from "lucide-react";
import { cn } from "@/lib/utils";
import FolderSection from "@/components/ui/FolderSection";

const certificates = [
    { name: "OOP Fundamentals NPTEL", year: "2025" },
    { name: "IoT with Arduino & ESP32 DY Patil SEM", year: "2025" },
    { name: "C Programming", year: "" },
    { name: "C++ Programming", year: "" },
    { name: "Java Programming", year: "" },
    { name: "OOP Fundamentals – NPTEL", year: "2025" },
    { name: "App Genius – Technotsav", year: "2024" },
];

interface CertificateCardProps {
    cert: typeof certificates[0];
    index: number;
}

const CertificateCard = ({ cert, index }: CertificateCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), index * 80);
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
        <div
            ref={cardRef}
            className={cn(
                "group relative p-5 rounded-xl border border-border bg-card",
                "transition-all duration-500 ease-out",
                "hover:border-primary/50 hover:-translate-y-1",
                "hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.2)]",
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
            )}
        >
            <div className="flex items-start gap-4">
                <div className={cn(
                    "p-2.5 rounded-lg bg-primary/10 transition-all duration-300",
                    "group-hover:bg-primary group-hover:scale-110"
                )}>
                    <Award size={20} className={cn(
                        "text-primary transition-colors duration-300",
                        "group-hover:text-primary-foreground"
                    )} />
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className={cn(
                        "text-sm font-semibold mb-1 transition-colors duration-300",
                        "group-hover:text-primary"
                    )}>
                        {cert.name}
                    </h3>
                    {cert.year && (
                        <p className="text-xs text-muted-foreground">{cert.year}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

const Certificates = () => {
    return (
        <section id="certificates" className="py-20 px-6">
            <FolderSection title="Certificates & Awards">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {certificates.map((cert, i) => (
                        <CertificateCard key={i} cert={cert} index={i} />
                    ))}
                </div>
            </FolderSection>
        </section>
    );
};

export default Certificates;
