using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using myEF_WebApi01.Models;

namespace myEF_WebApi01.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BlogController : ControllerBase
    {
        private readonly ILogger<BlogController> _logger;
        private readonly BloggingContext _dbctx;

        public BlogController(BloggingContext dbctx, ILogger<BlogController> logger)
        {
            _dbctx = dbctx;
            _logger = logger;
        }

        [HttpGet("{id}")]
        public ActionResult<Blog> Get(int id)
        {
            Blog b = _dbctx.Blogs.Where(b => b.BlogId == id).FirstOrDefault();
            _logger.LogInformation($"blog/get/{id} -> {b?.BlogId}");
            return b ?? new Blog() { BlogId = id, Url = "abc", Rating = 10 };
        }

        [HttpPost]
        public ActionResult<Blog> Post(Blog blog)
        {
            try
            {
                using (var transaction = _dbctx.Database.BeginTransaction())
                {
                    _dbctx.Blogs.Add(blog);
                    _dbctx.SaveChanges();
                    transaction.Commit();
                }
                return blog;
            }
            catch
            {
                return null;
            }
        }
    }
}
