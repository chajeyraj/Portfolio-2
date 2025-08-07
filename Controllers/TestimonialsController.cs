
using Microsoft.AspNetCore.Mvc;
using Portfolio.Services;

namespace Portfolio.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestimonialsController : ControllerBase
    {
        private readonly IStorageService _storage;

        public TestimonialsController(IStorageService storage)
        {
            _storage = storage;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTestimonials()
        {
            try
            {
                var testimonials = await _storage.GetAllTestimonialsAsync();
                return Ok(testimonials);
            }
            catch (Exception)
            {
                return StatusCode(500, new { message = "Failed to fetch testimonials" });
            }
        }
    }
}
