import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import FolderSection from "@/components/ui/FolderSection";
import ProjectCard from "@/components/ui/ProjectCard";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const allProjects: Project[] = [
  {
    id: "1",
    title: "Curriflex – Smart Timetable Generator",
    description: "Intelligent system for generating conflict-free academic timetables, automating subject, faculty, and time-slot allocation.",
    category: "Web App",
    tags: ["JavaScript", "HTML", "CSS", "Automation"],
    githubUrl: "https://github.com/Ashitosh2004/Curriflex.git",
    liveUrl: "https://curriflex.vercel.app/",
  },
  {
    id: "2",
    title: "ResumePro – AI Resume Analyzer",
    description: "AI-based resume analysis against job descriptions, ATS score evaluation, keyword gap identification, and optimization suggestions.",
    category: "Web App",
    tags: ["AI", "JavaScript", "NLP", "ATS"],
    githubUrl: "https://github.com/Ashitosh2004/ResumePro.git",
    liveUrl: "https://resumeprotech.vercel.app/",
  },
  {
    id: "3",
    title: "Skylin",
    description: "Modern weather application providing real-time weather data, forecasts, and beautiful visualizations.",
    category: "Web App",
    tags: ["React", "API", "Weather", "UI/UX"],
    githubUrl: "https://github.com/Ashitosh2004/Skylin.git",
    liveUrl: "https://skylin.vercel.app/",
  },
  {
    id: "4",
    title: "Pest Detection System (IoT)",
    description: "Sensor and microcontroller-based system for real-time pest activity detection and alert generation.",
    category: "IoT",
    tags: ["Arduino", "ESP32-CAM", "Sensors", "IoT"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: "5",
    title: "RescueGo – Animal Rescue Platform",
    description: "Web-based platform for reporting, tracking, and coordinating animal rescue operations.",
    category: "Web App",
    tags: ["HTML", "CSS", "JavaScript", "Database"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: "6",
    title: "RakMitra – Smart Blood Donation App",
    description: "Android application connecting blood donors and recipients with emergency notifications and location-based matching.",
    category: "Mobile App",
    tags: ["Android", "Java", "Firebase", "Maps API"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: "7",
    title: "Portfolio Hub",
    description: "Modern, elegant portfolio website showcasing projects, skills, and professional experience with responsive design.",
    category: "Web App",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "",
    liveUrl: "",
  },
];

const FeaturedProjects = () => {
  const featured = allProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-6 bg-card/30">
      <FolderSection title="Featured Projects" isActive>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              category={project.category}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              index={index}
            />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className={cn(
              "inline-flex items-center gap-3 px-6 py-3 rounded-full",
              "text-sm font-medium text-foreground",
              "border border-border",
              "transition-all duration-500 ease-out group",
              "hover:border-primary hover:text-primary",
              "hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.3)]"
            )}
          >
            View All Projects
            <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
        </div>
      </FolderSection>
    </section>
  );
};

export default FeaturedProjects;
