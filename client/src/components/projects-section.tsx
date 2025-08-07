import { motion } from "framer-motion";
import { GlassCard } from "./ui/glass-card";
import { ExternalLink, Github, Palette, Code, Database, Zap } from "lucide-react";
import type { Project } from "../types";
import { projects } from "../data/staticData";

export function ProjectsSection() {
  // Using static data instead of API calls

  // Category configuration
  const categories = [
    {
      key: "figma",
      title: "Figma Work",
      subtitle: "UI/UX design and prototypes",
      icon: <Palette className="w-6 h-6" />,
      gradient: "from-pink-500 to-purple-500",
      bgGradient: "from-pink-500/10 to-purple-500/10"
    },
    {
      key: "frontend",
      title: "Frontend Work",
      subtitle: "React, HTML, CSS, animations",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      key: "full-stack",
      title: "Full Stack Projects",
      subtitle: "Backend integration, APIs, databases",
      icon: <Database className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      key: "animation",
      title: "Animation Work",
      subtitle: "Creative motion design, scroll effects, interactive UI",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10"
    }
  ];

  // Group projects by category
  const projectsByCategory = projects.reduce((acc, project) => {
    const category = project.category || "full-stack";
    if (!acc[category]) acc[category] = [];
    acc[category].push(project);
    return acc;
  }, {} as Record<string, Project[]>);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A curated collection of projects across design, development, and animation
          </p>
        </motion.div>

        {/* Categories with Horizontal Scrolling */}
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
                {/* Category Header */}
                <div className="mb-6">
                  <div className="category-header">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white shadow-lg`}>
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
                </div>

                {/* Horizontal Scrolling Projects */}
                <div className="overflow-x-auto horizontal-scroll pb-6">
                  <div className="flex space-x-6 w-max px-1">
                    {categoryProjects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex-shrink-0"
                      >
                        <GlassCard className="p-6 w-80 h-full group" hover>
                          <div className="mb-4 relative overflow-hidden rounded-2xl">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                          </div>
                          
                          <div className="flex items-center space-x-2 mb-3">
                            <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white text-xs`}>
                              {category.icon}
                            </div>
                            <span className={`text-sm font-medium bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
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
                            {Array.isArray(project.technologies) ? project.technologies.slice(0, 3).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className={`px-3 py-1 bg-gradient-to-r ${category.bgGradient} text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium`}
                              >
                                {tech}
                              </span>
                            )) : null}
                            {Array.isArray(project.technologies) && project.technologies.length > 3 && (
                              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm">
                                +{project.technologies.length - 3} more
                              </span>
                            )}
                          </div>
                          
                          <div className="flex space-x-4 mt-auto">
                            {project.githubUrl && (
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
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
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

                {/* Scroll Indicator - only show if there are multiple projects */}
                {categoryProjects.length > 1 && (
                  <div className="flex justify-center mt-4">
                    <div className="flex items-center space-x-2 text-gray-400 dark:text-gray-600 text-sm">
                      <span>← Scroll to see more projects →</span>
                    </div>
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
