using Q.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Q.Controllers
{
    public class HomeController : Controller
    {
        private StudentsContext _ctx = new StudentsContext();
        public ActionResult Index()
        {
            IEnumerable<Student> students = _ctx.Students;
            ViewBag.Students = students;
            return View();
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