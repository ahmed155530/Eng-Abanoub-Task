using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities.Models
{
    public class Customer
    {
        [ForeignKey("User")]
        [Key]
        public string UserID { get; set; }
        public virtual IdentityUser User { get; set; }

        public string firstName { get; set; }
        public string lastName { get; set; }
    }
}
