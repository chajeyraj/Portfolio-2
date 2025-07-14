
using System.ComponentModel.DataAnnotations;

namespace Portfolio.Models
{
    public class Project
    {
        public int Id { get; set; }
        
        [Required]
        public string Title { get; set; } = string.Empty;
        
        [Required]
        public string Description { get; set; } = string.Empty;
        
        public string Image { get; set; } = string.Empty;
        
        public List<string> Technologies { get; set; } = new();
        
        public string? GithubUrl { get; set; }
        
        public string? LiveUrl { get; set; }
        
        public bool Featured { get; set; }
        
        [Required]
        public string Category { get; set; } = string.Empty;
    }
}
