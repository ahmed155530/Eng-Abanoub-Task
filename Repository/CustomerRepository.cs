using Entities;
using Entities.Models;
using Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository
{
    public class CustomerRepository : RepositoryBase<Customer>, ICustomerRepository
    {
        public CustomerRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
        }
    }
}
