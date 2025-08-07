using Portfolio.Models;

namespace Portfolio.Services
{
    public interface IStorageService
    {
        Task<List<Project>> GetAllProjectsAsync();
        Task<List<Project>> GetFeaturedProjectsAsync();
        Task<Project?> GetProjectByIdAsync(int id);
        Task<Project> CreateProjectAsync(Project project);
        Task<Project?> UpdateProjectAsync(Project project);
        Task<bool> DeleteProjectAsync(int id);
        Task<List<Experience>> GetAllExperiencesAsync();
        Task<List<Testimonial>> GetAllTestimonialsAsync();
        Task<List<Contact>> GetAllContactsAsync();
        Task<Contact> CreateContactAsync(Contact contact);
        Task SeedDataAsync();
    }
}