using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using To_Do_List.Entity.Models;

namespace To_Do_List.Entity
{
    public class ToDoListContext : DbContext
    {
        public DbSet<Note> Notes { get; set; }
    }
}