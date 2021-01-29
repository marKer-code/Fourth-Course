using HW1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HW1.Controllers
{
    public class HomeController : Controller
    {
        private PostContext _ctx = new PostContext();

        public ActionResult Index()
        {
            IEnumerable<Post> posts = _ctx.Posts;
            ViewBag.Posts = posts;
            return View();
        }

        [HttpGet]
        public ActionResult Add()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Add(Post post)
        {
            _ctx.Posts.Add(post);
            _ctx.SaveChanges();

            return RedirectToAction("Index");
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}