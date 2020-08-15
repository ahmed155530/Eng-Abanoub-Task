using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TechnicalTask.NLog_Exceptions
{
    public interface ILog
    {
        void Warning(string message);
        void Error(string message);
    }
}
