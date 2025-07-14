
using System.ComponentModel.DataAnnotations;

namespace Portfolio.Models
{
    public class Experience
    {
        public int Id { get; set; }
        
        [Required]
        public string Title { get; set; } = string.Empty;
        
        [Required]
        public string Company { get; set; } = string.Empty;
        
        [Required]
        public string Description { get; set; } = string.Empty;
        
        public List<string> Technologies { get; set; } = new();
        
        [Required]
        public string StartDate { get; set; } = string.Empty;
        
        public string? EndDate { get; set; }
        
        public bool Current { get; set; }
    }
}
