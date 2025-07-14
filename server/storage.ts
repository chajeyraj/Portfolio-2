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
    // Seed projects
    const seedProjects: InsertProject[] = [
      {
        title: "Personal Assistant",
        description: "Contextual Conversations Using RAG - Advanced AI assistant with natural language processing capabilities",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        technologies: ["Python", "RAG", "NLP", "OpenAI"],
        githubUrl: "https://github.com/chanakaprasanna/personal-assistant",
        liveUrl: "https://personal-assistant-demo.com",
        featured: 1
      },
      {
        title: "Potato Disease Prediction",
        description: "Deep Learning-based Image Classification for Identifying Potato Diseases using CNN",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        technologies: ["TensorFlow", "CNN", "Computer Vision", "Python"],
        githubUrl: "https://github.com/chanakaprasanna/potato-disease",
        featured: 1
      },
      {
        title: "Sentiment Analysis",
        description: "Classifying movie reviews using deep learning and cloud deployment with real-time processing",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        technologies: ["LSTM", "AWS", "Flask", "NLP"],
        githubUrl: "https://github.com/chanakaprasanna/sentiment-analysis",
        featured: 1
      },
      {
        title: "Blog Generator",
        description: "Transforming YouTube videos into high-quality blog posts with AI agents and automation",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        technologies: ["OpenAI", "LangChain", "React", "Node.js"],
        githubUrl: "https://github.com/chanakaprasanna/blog-generator",
        liveUrl: "https://blog-generator-demo.com",
        featured: 1
      },
      {
        title: "SmartPOS System",
        description: "Retail Management System with real-time inventory, sales processing, and analytics",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        githubUrl: "https://github.com/chanakaprasanna/smartpos",
        featured: 0
      },
      {
        title: "LearnAI Platform",
        description: "AI-Powered Learning Platform with intelligent content processing and personalized education",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        technologies: ["React", "Express", "Python", "AI"],
        githubUrl: "https://github.com/chanakaprasanna/learn-ai",
        liveUrl: "https://learn-ai-demo.com",
        featured: 0
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
      featured: insertProject.featured || 0
    };
    this.projects.set(id, project);
    return project;
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
      rating: insertTestimonial.rating || 5
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();
