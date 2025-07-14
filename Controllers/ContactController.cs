
using Microsoft.AspNetCore.Mvc;
using Portfolio.Models;
using Portfolio.Services;
using System.ComponentModel.DataAnnotations;

namespace Portfolio.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly IStorageService _storage;

        public ContactController(IStorageService storage)
        {
            _storage = storage;
        }

        [HttpPost]
        public async Task<IActionResult> CreateContact([FromBody] ContactRequest request)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(new { message = "Invalid form data", errors = ModelState });
                }

                var contact = new Contact
                {
                    Name = request.Name,
                    Email = request.Email,
                    Subject = request.Subject,
                    Message = request.Message
                };

                var createdContact = await _storage.CreateContactAsync(contact);
                return CreatedAtAction(nameof(CreateContact), new { message = "Contact form submitted successfully", contact = createdContact });
            }
            catch (Exception)
            {
                return StatusCode(500, new { message = "Failed to submit contact form" });
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllContacts()
        {
            try
            {
                var contacts = await _storage.GetAllContactsAsync();
                return Ok(contacts);
            }
            catch (Exception)
            {
                return StatusCode(500, new { message = "Failed to fetch contacts" });
            }
        }
    }

    public class ContactRequest
    {
        [Required]
        public string Name { get; set; } = string.Empty;

        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;

        [Required]
        public string Subject { get; set; } = string.Empty;

        [Required]
        public string Message { get; set; } = string.Empty;
    }
}
