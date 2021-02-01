using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DZ_25_01_2021.Models
{
    public class Post
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Date { get; set; }
        public string Description { get; set; }
    }
}