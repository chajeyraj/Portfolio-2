// Static data for frontend-only portfolio
import type { Project, Experience, Testimonial } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Modern Dashboard UI",
    description: "A comprehensive dashboard interface with analytics, user management, and real-time data visualization. Features dark/light mode and responsive design.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "frontend",
    featured: 1
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Built with modern technologies.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "full-stack",
    featured: 1
  },
  {
    id: 3,
    title: "Mobile App Prototype",
    description: "Interactive mobile app design with micro-interactions and smooth animations. Designed for iOS and Android platforms.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    technologies: ["Figma", "Protopie", "After Effects"],
    githubUrl: "https://github.com",
    liveUrl: "https://figma.com",
    category: "figma",
    featured: 0
  },
  {
    id: 4,
    title: "Interactive Landing Page",
    description: "Award-winning landing page with scroll-triggered animations and 3D elements. Optimized for performance and accessibility.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    technologies: ["Three.js", "GSAP", "WebGL", "CSS3"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "animation",
    featured: 1
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Personal portfolio website with glassmorphism effects and smooth animations. Built with React and TypeScript.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["React", "TypeScript", "Framer Motion"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "frontend",
    featured: 0
  },
  {
    id: 6,
    title: "SaaS Dashboard Design",
    description: "Complete design system for a SaaS platform including components, layouts, and interactive prototypes.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["Figma", "Design System", "Component Library"],
    githubUrl: "https://figma.com",
    liveUrl: "https://figma.com",
    category: "figma",
    featured: 0
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Freelance App Developer",
    company: "Self-Employed",
    startDate: "2021-01-01",
    endDate: null,
    description: "Developing mobile and web applications for clients worldwide. Specializing in React Native, Flutter, and modern web technologies.",
    technologies: ["React", "React Native", "Flutter", "Node.js", "Firebase"],
    current: true
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Tech Startup",
    startDate: "2019-06-01",
    endDate: "2020-12-31",
    description: "Led frontend development for a fintech startup. Built responsive web applications and improved user experience.",
    technologies: ["Vue.js", "TypeScript", "SCSS", "WebPack"],
    current: false
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mathesh",
    title: "Software Engineer",
    company: "Google",
    content: "Outstanding work on our project. The attention to detail and technical expertise exceeded our expectations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Sarah Wilson",
    title: "Product Manager",
    company: "Microsoft",
    content: "Delivered a beautiful, functional application that perfectly matched our requirements. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Alex Chen",
    title: "CTO",
    company: "StartupXYZ",
    content: "Professional, reliable, and incredibly skilled. The project was completed on time and within budget.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    title: "Design Director",
    company: "Adobe",
    content: "Excellent communication and problem-solving skills. The final product was exactly what we envisioned.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];