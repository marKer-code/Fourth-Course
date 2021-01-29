using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace DZ_25_01_2021.Models
{
    public class PostContext : DbContext
    {
        public DbSet<Post> Posts { get; set; }
        
    }
}