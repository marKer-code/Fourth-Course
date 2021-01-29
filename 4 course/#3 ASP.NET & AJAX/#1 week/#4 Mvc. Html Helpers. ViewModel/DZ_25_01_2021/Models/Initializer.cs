using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace DZ_25_01_2021.Models
{
    public class Initializer : DropCreateDatabaseIfModelChanges<PostContext>
    {
            protected override void Seed(PostContext context)
            {
                context.Posts.Add(new Post { Title = "BlaBla", Author = "MarKer", Date = "25-01-2021", Description = "tbbgsbnsgnsdtngndtntrangnmzymytmmsmfgyfgmfgmgffmm"});
                context.Posts.Add(new Post { Title = "Bla Bla", Author = "MarKer", Date = "05-01-2021", Description = "tgjjdgngdrsbv jhyfabihaeruihvfo7ygfiuqgh4fghrgvhfvhv "});
                context.Posts.Add(new Post { Title = "Bla bla bla", Author = "MarKer", Date = "15-01-2021", Description = "gbryf gtrufg yeriyfaegfagwg8743 4g f"});
                context.Posts.Add(new Post { Title = "Bla Bla Bla", Author = "MarKer", Date = "20-01-2021", Description = " ferrufgagfvygfry  ifgigaigfgaw fu a ufurf] iurafg a"});
                context.Posts.Add(new Post { Title = "Bla-Bla-Bla", Author = "MarKer", Date = "25-12-2020", Description = "  yrfgyufg yg eyfig ag fyi ae gflgy aefeygiay g 744387 7h"});
                base.Seed(context);
            }
    }
}