using Entities.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities
{
    public class RepositoryContext : IdentityDbContext
    {
        public RepositoryContext(DbContextOptions<RepositoryContext> options)
                    : base(options)
        {

        }
        public virtual DbSet<Customer> Customers { get; set; }
    }
}
