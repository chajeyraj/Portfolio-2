using Microsoft.EntityFrameworkCore;
using Portfolio.Data;
using Portfolio.Models;

namespace Portfolio.Services
{
    public class StorageService : IStorageService
    {
        private readonly PortfolioDbContext _context;

        public StorageService(PortfolioDbContext context)
        {
            _context = context;
        }

        public async Task<List<Project>> GetAllProjectsAsync()
        {
            return await _context.Projects.ToListAsync();
        }

        public async Task<List<Project>> GetFeaturedProjectsAsync()
        {
            return await _context.Projects.Where(p => p.Featured).ToListAsync();
        }

        public async Task<Project?> GetProjectByIdAsync(int id)
        {
            return await _context.Projects.FindAsync(id);
        }

        public async Task<List<Experience>> GetAllExperiencesAsync()
        {
            return await _context.Experiences.OrderByDescending(e => e.StartDate).ToListAsync();
        }

        public async Task<List<Testimonial>> GetAllTestimonialsAsync()
        {
            return await _context.Testimonials.ToListAsync();
        }

        public async Task<List<Contact>> GetAllContactsAsync()
        {
            return await _context.Contacts.OrderByDescending(c => c.CreatedAt).ToListAsync();
        }

        public async Task<Contact> CreateContactAsync(Contact contact)
        {
            _context.Contacts.Add(contact);
            await _context.SaveChangesAsync();
            return contact;
        }

        public async Task SeedDataAsync()
        {
            if (await _context.Projects.AnyAsync()) return;

            var projects = new List<Project>
            {
                new Project
                {
                    Title = "Modern Dashboard UI",
                    Description = "Complete UI/UX design system with interactive prototypes for a SaaS analytics platform",
                    Image = "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                    Technologies = new List<string> { "Figma", "UI/UX", "Prototyping", "Design System" },
                    GithubUrl = "https://github.com/chanakaprasanna/dashboard-ui",
                    LiveUrl = "https://figma.com/dashboard-prototype",
                    Featured = true,
                    Category = "figma"
                },
                new Project
                {
                    Title = "Interactive Portfolio",
                    Description = "Modern portfolio website with advanced animations and responsive design",
                    Image = "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                    Technologies = new List<string> { "React", "TypeScript", "Tailwind CSS", "Framer Motion" },
                    GithubUrl = "https://github.com/chanakaprasanna/portfolio",
                    LiveUrl = "https://chanakaprasanna.dev",
                    Featured = true,
                    Category = "frontend"
                },
                new Project
                {
                    Title = "Personal Assistant",
                    Description = "Contextual Conversations Using RAG - Advanced AI assistant with natural language processing capabilities",
                    Image = "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                    Technologies = new List<string> { "Python", "RAG", "NLP", "OpenAI", "PostgreSQL" },
                    GithubUrl = "https://github.com/chanakaprasanna/personal-assistant",
                    LiveUrl = "https://personal-assistant-demo.com",
                    Featured = true,
                    Category = "full-stack"
                },
                // Add your new projects here - Replace this with your actual project details
                new Project
                {
                    Title = "E-Commerce Platform",
                    Description = "Full-stack e-commerce solution with payment integration and admin dashboard",
                    Image = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
                    Technologies = new List<string> { "React", "ASP.NET Core", "Entity Framework", "Stripe" },
                    GithubUrl = "https://github.com/yourusername/ecommerce-platform",
                    LiveUrl = "https://your-ecommerce-demo.com",
                    Featured = true,
                    Category = "full-stack"
                }
            };

            var experiences = new List<Experience>
            {
                new Experience
                {
                    Title = "Software Engineer Intern",
                    Company = "Infinity Innovators",
                    Description = "Developed MyRide, a comprehensive vehicle management app with React Native for the front end and AWS serverless architecture for the back end. Collaborated with team members to deliver a production-ready mobile application.",
                    Technologies = new List<string> { "React Native", "AWS", "Serverless", "Node.js" },
                    StartDate = "2023-06",
                    EndDate = "2023-12",
                    Current = false
                },
                new Experience
                {
                    Title = "Freelance App Developer",
                    Company = "Independent",
                    Description = "Designed and developed mobile apps for iOS and Android, as well as web applications, using React Native Expo and Next.js. Delivered custom solutions for various clients with focus on user experience and performance.",
                    Technologies = new List<string> { "React Native", "Next.js", "Expo", "JavaScript" },
                    StartDate = "2022-01",
                    Current = true
                }
            };

            var testimonials = new List<Testimonial>
            {
                new Testimonial
                {
                    Name = "Mathesh",
                    Title = "Software Engineer",
                    Content = "Excellent work on the mobile application. The user interface is intuitive and the performance is outstanding.",
                    Rating = 5
                },
                new Testimonial
                {
                    Name = "Sarah Johnson",
                    Title = "Product Manager",
                    Content = "Professional and reliable developer. Delivered high-quality work on time and exceeded expectations.",
                    Rating = 5
                }
            };

            _context.Projects.AddRange(projects);
            _context.Experiences.AddRange(experiences);
            _context.Testimonials.AddRange(testimonials);
            await _context.SaveChangesAsync();
        }
    }
}