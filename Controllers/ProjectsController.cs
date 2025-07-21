
using Microsoft.AspNetCore.Mvc;
using Portfolio.Services;

namespace Portfolio.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectsController : ControllerBase
    {
        private readonly IStorageService _storage;

        public ProjectsController(IStorageService storage)
        {
            _storage = storage;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllProjects()
        {
            try
            {
                var projects = await _storage.GetAllProjectsAsync();
                return Ok(projects);
            }
            catch (Exception)
            {
                return StatusCode(500, new { message = "Failed to fetch projects" });
            }
        }

        [HttpGet("featured")]
        public async Task<IActionResult> GetFeaturedProjects()
        {
            try
            {
                var projects = await _storage.GetFeaturedProjectsAsync();
                return Ok(projects);
            }
            catch (Exception)
            {
                return StatusCode(500, new { message = "Failed to fetch featured projects" });
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProjectById(int id)
        {
            try
            {
                var project = await _storage.GetProjectByIdAsync(id);
                if (project == null)
                {
                    return NotFound(new { message = "Project not found" });
                }
                return Ok(project);
            }
            catch (Exception)
            {
                return StatusCode(500, new { message = "Failed to fetch project" });
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateProject([FromBody] Models.Project project)
        {
            try
            {
                var createdProject = await _storage.CreateProjectAsync(project);
                return CreatedAtAction(nameof(GetProjectById), new { id = createdProject.Id }, createdProject);
            }
            catch (Exception)
            {
                return StatusCode(500, new { message = "Failed to create project" });
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProject(int id, [FromBody] Models.Project project)
        {
            try
            {
                project.Id = id;
                var updatedProject = await _storage.UpdateProjectAsync(project);
                if (updatedProject == null)
                {
                    return NotFound(new { message = "Project not found" });
                }
                return Ok(updatedProject);
            }
            catch (Exception)
            {
                return StatusCode(500, new { message = "Failed to update project" });
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProject(int id)
        {
            try
            {
                var deleted = await _storage.DeleteProjectAsync(id);
                if (!deleted)
                {
                    return NotFound(new { message = "Project not found" });
                }
                return Ok(new { message = "Project deleted successfully" });
            }
            catch (Exception)
            {
                return StatusCode(500, new { message = "Failed to delete project" });
            }
        }
    }
}
