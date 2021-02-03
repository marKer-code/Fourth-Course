using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using To_Do_List.Entity;
using To_Do_List.Entity.Models;
using To_Do_List.Models;

namespace To_Do_List.Controllers
{
    public class HomeController : Controller
    {
        private readonly ToDoListContext ctx;

        public HomeController() => ctx = new ToDoListContext();

        public ActionResult Index()
        {
            IEnumerable<ToDoListViewModels> models = ctx.Notes.Select(m => new ToDoListViewModels()
            {
                Id = m.Id,
                Date = m.Date,
                Description = m.Description,
                Image = m.Image,
                IsPriority = m.IsPriority,
                Title = m.Title
            });
            return View(models);
        }

        [HttpGet]
        public ActionResult Edit(int id)
        {
            ViewBag.Post = ctx.Notes.Find(id);
            return View();
        }

        [HttpPost]
        public ActionResult Edit(Note nt)
        {
            Note n = ctx.Notes.Find(nt.Id);
            n.Title = nt.Title;
            n.Date = nt.Date;
            n.Description = nt.Description;
            n.IsPriority = nt.IsPriority;
            n.Image = nt.Image;
            ctx.SaveChanges();
            return RedirectToAction("Index");
        }

        [HttpGet]
        public ActionResult Add() => View();
        [HttpPost]
        public ActionResult Add(Note nt)
        {
            ctx.Notes.Add(nt);
            ctx.SaveChanges();
            return RedirectToAction("Index");
        }

        public ActionResult Remove(Note nt)
        {
            ctx.Notes.Remove(ctx.Notes.Find(nt.Id));
            ctx.SaveChanges();
            return RedirectToAction("Index");
        }

        public ActionResult Sort()
        {
            IEnumerable<ToDoListViewModels> models = ctx.Notes.Select(m => new ToDoListViewModels()
            {
                Id = m.Id,
                Date = m.Date,
                Description = m.Description,
                Image = m.Image,
                IsPriority = m.IsPriority,
                Title = m.Title
            })
            .OrderBy(t => t.Title);
            return View("Index", models);
        }

        public ActionResult SortDate()
        {
            IEnumerable<ToDoListViewModels> models = ctx.Notes.Select(m => new ToDoListViewModels()
            {
                Id = m.Id,
                Date = m.Date,
                Description = m.Description,
                Image = m.Image,
                IsPriority = m.IsPriority,
                Title = m.Title
            })
            .OrderBy(t => t.Date);
            return View("Index", models);
        }

        public ActionResult SortDesc()
        {
            IEnumerable<ToDoListViewModels> models = ctx.Notes.Select(m => new ToDoListViewModels()
            {
                Id = m.Id,
                Date = m.Date,
                Description = m.Description,
                Image = m.Image,
                IsPriority = m.IsPriority,
                Title = m.Title
            })
            .OrderBy(t => t.Description);
            return View("Index", models);
        }

        public ActionResult Search(string el)
        {
            IEnumerable<ToDoListViewModels> models = ctx.Notes.Select(m => new ToDoListViewModels()
            {
                Id = m.Id,
                Date = m.Date,
                Description = m.Description,
                Image = m.Image,
                IsPriority = m.IsPriority,
                Title = m.Title
            })
            .Where(n => n.Title == el ||
                   n.Description == el);
            return View("Index", models);
        }

        public ActionResult Calendar(DateTime date)
        {
            IEnumerable<ToDoListViewModels> model = ctx.Notes.Where(x => x.Date == date)
                .Select(n => new ToDoListViewModels
                {
                    Date = n.Date,
                    Description = n.Description,
                    Id = n.Id,
                    Image = n.Image,
                    IsPriority = n.IsPriority,
                    Title = n.Title
                });
            return View("Index", model);
        }
        public ActionResult Calendar_(DateTime date)
        {
            IEnumerable<ToDoListViewModels> model = ctx.Notes.Where(x => x.Date.Month == date.Month)
                .Select(n => new ToDoListViewModels
                {
                    Date = n.Date,
                    Description = n.Description,
                    Id = n.Id,
                    Image = n.Image,
                    IsPriority = n.IsPriority,
                    Title = n.Title
                });
            return View("Index", model);
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