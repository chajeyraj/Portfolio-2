import type { Project } from "@shared/schema";

// Image paths from public folder
export const IMAGE_PATHS = {
  studio: "/images/projects/studio.png",
  mediclimic: "/images/projects/mediclimic1.jpg",
  schoolManagement: "/images/projects/School-Management-System.jpg",
  singlepage: "/images/projects/singlepage.jpg",
  studioManagement: "/images/projects/studio-management.jpg",
  schoolGif: "/images/projects/school-management-system2.gif",
  medical: "/images/projects/medical.jpg",
  poster: "/images/projects/poster.jpg",
};

export const localProjects: Project[] = [
  {
    id: 1,
    title: "Studio Management System",
    description:
      "Complete UI/UX design system with interactive prototypes for a SaaS analytics platform",
    image: IMAGE_PATHS.studio,
    technologies: ["Figma", "UI/UX", "Prototyping", "Design System"],
    githubUrl:
      "https://www.figma.com/community/file/1534999020577057482/studio-management-system",
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
    githubUrl:
      "https://www.figma.com/community/file/1534863522049022954/medi-clinic-website",
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
    githubUrl:
      "https://www.figma.com/community/file/1534662733381470502/school-management-system",
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
    githubUrl:
      "https://www.figma.com/community/file/1534870379711532055/single-page-websites",
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
    technologies: ["react", "dotnet", "typescript", "tailwind", "framer-motion"],
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

export const getSlug = (title: string) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export const findProjectBySlug = (slug: string): Project | undefined =>
  localProjects.find((p) => getSlug(p.title) === slug);
