using System;
using System.Data.Entity;
using To_Do_List.Entity;
using To_Do_List.Entity.Models;

namespace To_Do_List
{
    internal class Initializer : DropCreateDatabaseIfModelChanges<ToDoListContext>
    {
        protected override void Seed(ToDoListContext context)
        {
            context.Notes.Add(new Note { Title = "First", Description = "bla bla", Date = Convert.ToDateTime("28-01-2021"), IsPriority = false, Image = "https://cdn.searchenginejournal.com/wp-content/uploads/2018/04/Pushing_PInterest_Limits-copy.png" });
            context.Notes.Add(new Note { Title = "Second", Description = "bla bla bla", Date = Convert.ToDateTime("29-01-2021"), IsPriority = true, Image= "https://cdn.searchenginejournal.com/wp-content/uploads/2018/04/Pushing_PInterest_Limits-copy.png" });
            context.Notes.Add(new Note { Title = "www", Description = "bla bla bla", Date = Convert.ToDateTime("29-01-2021"), IsPriority = true, Image= "https://cdn.searchenginejournal.com/wp-content/uploads/2018/04/Pushing_PInterest_Limits-copy.png" });
            base.Seed(context);
        }
    }
}