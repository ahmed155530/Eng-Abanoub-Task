using System;
using System.Collections.Generic;
using System.Text;

namespace Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        ICustomerRepository Customer { get; }
        void save();
    }
}
