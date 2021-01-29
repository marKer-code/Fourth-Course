using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Q.Models
{
    public class StudentsContext : DbContext
    {
        public DbSet<Student> Students { get; set; }
    }
}