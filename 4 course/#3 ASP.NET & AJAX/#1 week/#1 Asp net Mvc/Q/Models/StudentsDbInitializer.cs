using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Q.Models
{
    public class StudentsDbInitializer : DropCreateDatabaseIfModelChanges<StudentsContext>
    {
        protected override void Seed(StudentsContext context)
        {
            context.Students.Add(
                new Student
                {
                    Name = "Maryna",
                    Surname = "Kernychna",
                    Age = 16,
                    Stars = 2995,
                    Course = 4
                });
            base.Seed(context);
        }
    }
}