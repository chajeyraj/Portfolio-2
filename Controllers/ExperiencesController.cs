
using Microsoft.AspNetCore.Mvc;
using Portfolio.Services;

namespace Portfolio.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExperiencesController : ControllerBase
    {
        private readonly IStorageService _storage;

        public ExperiencesController(IStorageService storage)
        {
            _storage = storage;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllExperiences()
        {
            try
            {
                var experiences = await _storage.GetAllExperiencesAsync();
                return Ok(experiences);
            }
            catch (Exception)
            {
                return StatusCode(500, new { message = "Failed to fetch experiences" });
            }
        }
    }
}
