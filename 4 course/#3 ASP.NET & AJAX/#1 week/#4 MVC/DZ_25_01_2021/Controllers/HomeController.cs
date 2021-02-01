using DZ_25_01_2021.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DZ_25_01_2021.Controllers
{
    public class HomeController : Controller
    {
        PostContext ctx = new PostContext();
        public ActionResult Index()
        {
            IEnumerable<Post> students = ctx.Posts;
            ViewBag.Posts = students;
            return View();
        }
        [HttpGet]
        public ActionResult Add()
        {

            return View();
        }
        [HttpPost]
        public ActionResult Add(Post pt)
        {
            ctx.Posts.Add(pt);
            ctx.SaveChanges();
            return RedirectToAction("Index");
        }


        [HttpGet]
        public ActionResult Update()
        {

            return View();
        }
    }
}