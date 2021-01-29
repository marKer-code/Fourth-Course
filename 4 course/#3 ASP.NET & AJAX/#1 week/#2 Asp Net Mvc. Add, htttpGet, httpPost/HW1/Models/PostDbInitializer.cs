using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace HW1.Models
{
    public class PostDbInitializer : DropCreateDatabaseIfModelChanges<PostContext>
    {
        protected override void Seed(PostContext context)
        {
            context.Posts.Add(
                new Post
                {
                    Author="Maryna",
                    Title = "First post",
                    Date = "26.01.2021",
                    Description = "qqq"
                });

            base.Seed(context);
        }
    }
}