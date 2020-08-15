using Entities;
using Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository
{
    public class UnitOfWorkRepository  : IUnitOfWork
    {
        private RepositoryContext repositoryContext;
        private CustomerRepository customerRepository;
        public UnitOfWorkRepository(RepositoryContext _repositoryContext)
        {
            repositoryContext = _repositoryContext;
        }
        public ICustomerRepository Customer
        {
            get
            {
                if (customerRepository == null)
                {
                    customerRepository = new CustomerRepository(repositoryContext);
                }
                return customerRepository;
            }
        }
        public void save()
        {
            repositoryContext.SaveChanges();
        }

        public void Dispose()
        {
            repositoryContext.Dispose();
        }
    }
}
