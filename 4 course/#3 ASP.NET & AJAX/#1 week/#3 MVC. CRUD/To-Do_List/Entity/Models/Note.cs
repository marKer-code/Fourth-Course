using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace To_Do_List.Entity.Models
{
    public class Note
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Date { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public bool IsPriority { get; set; }
        public string Image { get; set; }
    }
}