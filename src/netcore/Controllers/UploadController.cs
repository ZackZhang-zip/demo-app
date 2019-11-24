using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using myEF_WebApi01.Models;

namespace myEF_WebApi01.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UploadController : ControllerBase
    {
        private readonly ILogger<UploadController> _logger;
        private readonly BloggingContext _dbctx;

        public UploadController(BloggingContext dbctx, ILogger<UploadController> logger)
        {
            _dbctx = dbctx;
            _logger = logger;
        }

        [EnableCors()]
        [HttpPost]
        public ActionResult UploadFile(IFormFile file)
        {
            Response.Headers.Add("Access-Control-Allow-Origin","*");
            if (file != null) {
                Console.WriteLine(file.FileName);
                return new JsonResult("File received");
            }                
            else
                return new JsonResult("No file");
        }
    }
}
