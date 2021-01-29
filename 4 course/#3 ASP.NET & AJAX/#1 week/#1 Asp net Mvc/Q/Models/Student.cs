using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Q.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public int Age { get; set; }
        public int Stars { get; set; }
        public int Course { get; set; }
    }
}
