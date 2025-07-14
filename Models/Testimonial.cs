
using System.ComponentModel.DataAnnotations;

namespace Portfolio.Models
{
    public class Testimonial
    {
        public int Id { get; set; }
        
        [Required]
        public string Name { get; set; } = string.Empty;
        
        [Required]
        public string Title { get; set; } = string.Empty;
        
        [Required]
        public string Content { get; set; } = string.Empty;
        
        public string? Avatar { get; set; }
        
        [Range(1, 5)]
        public int Rating { get; set; }
    }
}
