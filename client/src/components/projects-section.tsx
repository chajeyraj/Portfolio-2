import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { GlassCard } from "./ui/glass-card";
import { ExternalLink, Github, Loader2, Palette, Code, Database, Zap } from "lucide-react";
import type { Project } from "@shared/schema";
import { getSlug } from "@/data/projects";

// Image paths from public folder
const IMAGE_PATHS = {
  studio: "/images/projects/studio.png",
  mediclimic: "/images/projects/mediclimic1.jpg",
  schoolManagement: "/images/projects/School-Management-System.jpg",
  singlepage: "/images/projects/singlepage.jpg",
  studioManagement: "/images/projects/studio-management.jpg",
  schoolGif: "/images/projects/school-management-system2.gif",
  medical: "/images/projects/medical.jpg",
  poster: "/images/projects/poster.jpg"
};

// Local fallback data
const localProjects: Project[] = [
  {
    id: 1,
    title: "Studio Management System",
    description:
      "Complete UI/UX design system with interactive prototypes for a SaaS analytics platform",
    image: IMAGE_PATHS.studio,
    technologies: ["Figma", "UI/UX", "Prototyping", "Design System"],
    githubUrl: "https://www.figma.com/community/file/1534999020577057482/studio-management-system",
    liveUrl: "https://www.behance.net/gallery/232008411/Studio-Management-System",
    featured: 1,
    category: "figma",
    createdAt: new Date(),
  },
  {
    id: 1,
    title: "Medi Clinic Website",
    description:
      "Complete UI/UX design system with interactive prototypes for a SaaS analytics platform",
    image: IMAGE_PATHS.mediclimic,
    technologies: ["Figma", "UI/UX", "Prototyping", "Design System"],
    githubUrl: "https://www.figma.com/community/file/1534863522049022954/medi-clinic-website",
    liveUrl: "https://www.behance.net/gallery/231933485/Medi-Clinic-Website",
    featured: 1,
    category: "figma",
    createdAt: new Date(),
  },
  {
    id: 1,
    title: "School management system",
    description:
      "Complete UI/UX design system with interactive prototypes for a SaaS analytics platform",
    image: IMAGE_PATHS.schoolManagement,
    technologies: ["Figma", "UI/UX", "Prototyping", "Design System"],
    githubUrl: "https://www.figma.com/community/file/1534662733381470502/school-management-system",
    liveUrl: "https://www.behance.net/gallery/231932275/School-Management-System",
    featured: 1,
    category: "figma",
    createdAt: new Date(),
  },
  {
    id: 1,
    title: "Single Page Websites",
    description:
      "Complete UI/UX design system with interactive prototypes for a SaaS analytics platform",
    image: IMAGE_PATHS.singlepage,
    technologies: ["Figma", "UI/UX", "Prototyping", "Design System"],
    githubUrl: "https://www.figma.com/community/file/1534870379711532055/single-page-websites",
    liveUrl: "https://www.behance.net/gallery/231973209/Single-page-website-Designs",
    featured: 1,
    category: "figma",
    createdAt: new Date(),
  },

  {
    id: 2,
    title: "Studio Management System",
    description: "Studio Management System built using Angular.",
    image: IMAGE_PATHS.studioManagement,
    technologies: ["Angular", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/chajeyraj/Studio-Management-System",
    liveUrl: "https://www.behance.net/gallery/232008411/Studio-Management-System",
    featured: 1,
    category: "frontend",
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "School management system",
    description: "School Management System built using React.",
    image: IMAGE_PATHS.schoolGif,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/chajeyraj/Menage-School",
    liveUrl: "https://www.behance.net/gallery/231932275/School-Management-System",
    featured: 1,
    category: "frontend",
    createdAt: new Date(),
  },
  {
    id: 2,
    title: "Medi Clinic Website",
    description: "Medi Clinic Website built using React.",
    image: IMAGE_PATHS.medical,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/chajeyraj/medi-clinic",
    liveUrl: "https://www.behance.net/gallery/231933485/Medi-Clinic-Website",
    featured: 1,
    category: "frontend",
    createdAt: new Date(),
  },

  {
    id: 3,
    title: "Task Key",
    description:
      "I create videos, photos, and UI/UX designs, working with developers to turn client ideas into complete full-stack websites.",
      image: IMAGE_PATHS.poster,
      technologies: ["react","dotnet", "typescript", "tailwind", "framer-motion"],
    githubUrl: "https://github.com/chanakaprasanna/personal-assistant",
    liveUrl: "https://personal-assistant-demo.com",
    featured: 1,
    category: "full-stack",
    createdAt: new Date(),
  },
  {
    id: 4,
    title: "Scroll-Based Storytelling",
    description:
      "Interactive storytelling website with advanced scroll-triggered animations",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400",
    technologies: ["GSAP", "ScrollMagic", "Three.js", "WebGL"],
    githubUrl: "https://github.com/chanakaprasanna/scroll-story",
    liveUrl: "https://scroll-story-demo.com",
    featured: 1,
    category: "animation",
    createdAt: new Date(),
  },
];

export function ProjectsSection() {
  const [, navigate] = useLocation();
  const { data: projects, isLoading, error } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const effectiveProjects =
    projects && projects.length > 0 ? projects : localProjects;

  const categories = [
    {
      key: "figma",
      title: "Figma Work",
      subtitle: "UI/UX design and prototypes",
      icon: <Palette className="w-6 h-6" />,
      gradient: "from-pink-500 to-purple-500",
      bgGradient: "from-pink-500/10 to-purple-500/10",
    },
    {
      key: "frontend",
      title: "Frontend Work",
      subtitle: "React, HTML, CSS, animations",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      key: "full-stack",
      title: "Full Stack Projects",
      subtitle: "Backend integration, APIs, databases",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
    },
    {
      key: "animation",
      title: "Animation Work",
      subtitle: "Creative motion design, scroll effects, interactive UI",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
    },
  ];

  const projectsByCategory =
    effectiveProjects?.reduce((acc, project) => {
      const category = project.category || "full-stack";
      if (!acc[category]) acc[category] = [];
      acc[category].push(project);
      return acc;
    }, {} as Record<string, Project[]>) || {};

  if (isLoading) {
    return (
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex justify-center items-center min-h-[400px]">
          <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
             <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A curated collection of projects across design, development, and
            animation
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categoryProjects = projectsByCategory[category.key] || [];
            if (categoryProjects.length === 0) return null;

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6 flex items-center">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white shadow-lg`}
                  >
                    {category.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                <div className="overflow-x-auto horizontal-scroll pb-6">
                  <div className="flex space-x-6 w-max px-1">
                    {categoryProjects.map((project, index) => (
                      <motion.div
                        key={project.id + "-" + index}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex-shrink-0"
                      >
                        <GlassCard 
                          className="p-6 w-80 h-full group cursor-pointer" 
                          hover
                          onClick={() => {
                            // Store the project data in session storage for the details page
                            sessionStorage.setItem('selectedProject', JSON.stringify(project));
                            // Navigate to the project details page with the slug
                            navigate(`/project/${getSlug(project.title)}`);
                          }}
                        >
                          <div className="mb-4 relative overflow-hidden rounded-2xl">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div
                              className={`absolute inset-0 bg-gradient-to-t ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                            />
                          </div>

                          <div className="flex items-center space-x-2 mb-3">
                            <div
                              className={`w-6 h-6 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white text-xs`}
                            >
                              {category.icon}
                            </div>
                            <span
                              className={`text-sm font-medium bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                            >
                              {category.title}
                            </span>
                          </div>

                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            {project.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {Array.isArray(project.technologies)
                              ? project.technologies
                                  .slice(0, 8)
                                  .map((tech, techIndex) => (
                                    <span
                                      key={techIndex}
                                      className={`px-3 py-1 bg-gradient-to-r ${category.bgGradient} text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium`}
                                    >
                                      {tech}
                                    </span>
                                  ))
                              : null}
                 
                          </div>

                          <div className="flex space-x-4 mt-auto">
                            {project.githubUrl &&
                              project.category !== "figma" && (
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                  <Github className="w-4 h-4" />
                                  <span>Code</span>
                                </a>
                              )}
                            {project.githubUrl &&
                              project.category === "figma" && (
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors"
                                >
                                  <Palette className="w-4 h-4" />
                                  <span>Figma</span>
                                </a>
                              )}
                            {project && (
                              <a
                                href={`/project/${getSlug(project.title)}`}
                                onClick={(e) => {
                                  try {
                                    sessionStorage.setItem("selectedProject", JSON.stringify(project));
                                  } catch (_) {}
                                }}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                                <span>Live</span>
                              </a>
                            )}
                          </div>
                        </GlassCard>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {categoryProjects.length > 1 && (
                  <div className="flex justify-center mt-4 text-gray-400 dark:text-gray-600 text-sm">
                    ← Scroll to see more projects →
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
