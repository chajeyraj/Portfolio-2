import { 
  projects, 
  experiences, 
  contacts, 
  testimonials,
  type Project, 
  type Experience, 
  type Contact, 
  type Testimonial,
  type InsertProject, 
  type InsertExperience, 
  type InsertContact, 
  type InsertTestimonial 
} from "@shared/schema";

export interface IStorage {
  // Projects
  getAllProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  getProjectById(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: number): Promise<boolean>;
  
  // Experiences
  getAllExperiences(): Promise<Experience[]>;
  createExperience(experience: InsertExperience): Promise<Experience>;
  
  // Contacts
  getAllContacts(): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;
  
  // Testimonials
  getAllTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private projects: Map<number, Project>;
  private experiences: Map<number, Experience>;
  private contacts: Map<number, Contact>;
  private testimonials: Map<number, Testimonial>;
  private currentProjectId: number;
  private currentExperienceId: number;
  private currentContactId: number;
  private currentTestimonialId: number;

  constructor() {
    this.projects = new Map();
    this.experiences = new Map();
    this.contacts = new Map();
    this.testimonials = new Map();
    this.currentProjectId = 1;
    this.currentExperienceId = 1;
    this.currentContactId = 1;
    this.currentTestimonialId = 1;
    
    this.seedData();
  }

  private seedData() {
    // Seed projects by category
    const seedProjects: InsertProject[] = [
      // Figma Work (UI/UX design and prototypes)
      {
        title: "Modern Dashboard UI",
        description: "Complete UI/UX design system with interactive prototypes for a SaaS analytics platform",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        technologies: ["Figma", "UI/UX", "Prototyping", "Design System"],
        githubUrl: "https://github.com/chanakaprasanna/dashboard-ui",
        liveUrl: "https://figma.com/dashboard-prototype",
        featured: 1,
        category: "figma"
      },
      {
        title: "Mobile App Design",
        description: "Complete mobile app design with user journey mapping and interactive prototypes",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        technologies: ["Figma", "Mobile Design", "User Research", "Wireframing"],
        githubUrl: "https://github.com/chanakaprasanna/mobile-design",
        liveUrl: "https://figma.com/mobile-app-prototype",
        featured: 0,
        category: "figma"
      },
      
      // Frontend Work (React, HTML, CSS, animations)
      {
        title: "Interactive Portfolio",
        description: "Modern portfolio website with advanced animations and responsive design",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        githubUrl: "https://github.com/chanakaprasanna/portfolio",
        liveUrl: "https://chanakaprasanna.dev",
        featured: 1,
        category: "frontend"
      },
      {
        title: "E-commerce Landing Page",
        description: "High-converting landing page with modern design and smooth animations",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        technologies: ["React", "Next.js", "CSS3", "GSAP"],
        githubUrl: "https://github.com/chanakaprasanna/ecommerce-landing",
        liveUrl: "https://ecommerce-landing-demo.com",
        featured: 0,
        category: "frontend"
      },
      
      // Full Stack Projects (with backend integration, APIs, databases)
      {
        title: "Personal Assistant",
        description: "Contextual Conversations Using RAG - Advanced AI assistant with natural language processing capabilities",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        technologies: ["Python", "RAG", "NLP", "OpenAI", "PostgreSQL"],
        githubUrl: "https://github.com/chanakaprasanna/personal-assistant",
        liveUrl: "https://personal-assistant-demo.com",
        featured: 1,
        category: "full-stack"
      },
      {
        title: "Potato Disease Prediction",
        description: "Deep Learning-based Image Classification for Identifying Potato Diseases using CNN",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        technologies: ["TensorFlow", "CNN", "Computer Vision", "Python", "Flask"],
        githubUrl: "https://github.com/chanakaprasanna/potato-disease",
        featured: 1,
        category: "full-stack"
      },
      {
        title: "SmartPOS System",
        description: "Retail Management System with real-time inventory, sales processing, and analytics",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        githubUrl: "https://github.com/chanakaprasanna/smartpos",
        featured: 0,
        category: "full-stack"
      },
      {
        title: "Blog Generator",
        description: "Transforming YouTube videos into high-quality blog posts with AI agents and automation",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        technologies: ["OpenAI", "LangChain", "React", "Node.js", "MongoDB"],
        githubUrl: "https://github.com/chanakaprasanna/blog-generator",
        liveUrl: "https://blog-generator-demo.com",
        featured: 1,
        category: "full-stack"
      },
      
      // Animation Work (creative motion design, scroll effects, interactive UI)
      {
        title: "Scroll-Based Storytelling",
        description: "Interactive storytelling website with advanced scroll-triggered animations",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        technologies: ["GSAP", "ScrollMagic", "Three.js", "WebGL"],
        githubUrl: "https://github.com/chanakaprasanna/scroll-story",
        liveUrl: "https://scroll-story-demo.com",
        featured: 1,
        category: "animation"
      },
      {
        title: "Interactive 3D Gallery",
        description: "Immersive 3D gallery with particle effects and interactive animations",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        technologies: ["Three.js", "WebGL", "Framer Motion", "React"],
        githubUrl: "https://github.com/chanakaprasanna/3d-gallery",
        liveUrl: "https://3d-gallery-demo.com",
        featured: 0,
        category: "animation"
      }
    ];

    seedProjects.forEach(project => {
      this.createProject(project);
    });

    // Seed experiences
    const seedExperiences: InsertExperience[] = [
      {
        title: "Software Engineer Intern",
        company: "Infinity Innovators",
        description: "Developed MyRide, a comprehensive vehicle management app with React Native for the front end and AWS serverless architecture for the back end. Collaborated with team members to deliver a production-ready mobile application.",
        technologies: ["React Native", "AWS", "Serverless", "Node.js"],
        startDate: "2023-06",
        endDate: "2023-12",
        current: 0
      },
      {
        title: "Freelance App Developer",
        company: "Independent",
        description: "Designed and developed mobile apps for iOS and Android, as well as web applications, using React Native Expo and Next.js. Delivered custom solutions for various clients with focus on user experience and performance.",
        technologies: ["React Native", "Next.js", "Expo", "JavaScript"],
        startDate: "2022-01",
        current: 1
      }
    ];

    seedExperiences.forEach(experience => {
      this.createExperience(experience);
    });

    // Seed testimonials
    const seedTestimonials: InsertTestimonial[] = [
      {
        name: "Mathesh",
        title: "Software Engineer Trainee",
        company: "Infinity Innovators",
        content: "I had the pleasure of working with Chanaka during our internship at Infinity Innovators, where we were in the same team. He is highly passionate and enthusiastic, especially about machine learning. His skills in React Native and AWS serverless backend stood out.",
        avatar: "M",
        rating: 5
      },
      {
        name: "Sarah Johnson",
        title: "Project Manager",
        company: "Tech Solutions Inc",
        content: "Chanaka delivered an exceptional mobile application that exceeded our expectations. His attention to detail, technical expertise, and ability to understand our requirements made the entire development process smooth and efficient.",
        avatar: "S",
        rating: 5
      }
    ];

    seedTestimonials.forEach(testimonial => {
      this.createTestimonial(testimonial);
    });
  }

  // Projects
  async getAllProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).sort((a, b) => (b.featured || 0) - (a.featured || 0));
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(p => p.featured === 1);
  }

  async getProjectById(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.currentProjectId++;
    const project: Project = {
      ...insertProject,
      id,
      createdAt: new Date(),
      githubUrl: insertProject.githubUrl || null,
      liveUrl: insertProject.liveUrl || null,
      featured: insertProject.featured || 0,
      category: insertProject.category || "full-stack"
    };
    this.projects.set(id, project);
    return project;
  }

  async updateProject(id: number, updateData: Partial<InsertProject>): Promise<Project | undefined> {
    const existingProject = this.projects.get(id);
    if (!existingProject) {
      return undefined;
    }
    
    const updatedProject: Project = {
      ...existingProject,
      ...updateData,
      id, // Ensure ID doesn't change
      createdAt: existingProject.createdAt, // Preserve original creation date
      githubUrl: updateData.githubUrl !== undefined ? updateData.githubUrl || null : existingProject.githubUrl,
      liveUrl: updateData.liveUrl !== undefined ? updateData.liveUrl || null : existingProject.liveUrl,
      featured: updateData.featured !== undefined ? updateData.featured : existingProject.featured,
      category: updateData.category || existingProject.category
    };
    
    this.projects.set(id, updatedProject);
    return updatedProject;
  }

  async deleteProject(id: number): Promise<boolean> {
    return this.projects.delete(id);
  }

  // Experiences
  async getAllExperiences(): Promise<Experience[]> {
    return Array.from(this.experiences.values()).sort((a, b) => {
      // Sort by current first, then by start date desc
      if ((a.current || 0) !== (b.current || 0)) {
        return (b.current || 0) - (a.current || 0);
      }
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });
  }

  async createExperience(insertExperience: InsertExperience): Promise<Experience> {
    const id = this.currentExperienceId++;
    const experience: Experience = {
      ...insertExperience,
      id,
      createdAt: new Date(),
      current: insertExperience.current || 0,
      endDate: insertExperience.endDate || null
    };
    this.experiences.set(id, experience);
    return experience;
  }

  // Contacts
  async getAllContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort((a, b) => 
      b.createdAt!.getTime() - a.createdAt!.getTime()
    );
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
      projectType: insertContact.projectType || null,
      budgetRange: insertContact.budgetRange || null
    };
    this.contacts.set(id, contact);
    return contact;
  }

  // Testimonials
  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).sort((a, b) => 
      b.createdAt!.getTime() - a.createdAt!.getTime()
    );
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const testimonial: Testimonial = {
      ...insertTestimonial,
      id,
      createdAt: new Date(),
      avatar: insertTestimonial.avatar || null,
      facebookId: insertTestimonial.facebookId || null,
      rating: insertTestimonial.rating || 5
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();
