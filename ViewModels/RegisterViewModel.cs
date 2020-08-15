using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ViewModels
{
    public class RegisterViewModel
    {
        public string firstName { get; set; }
        public string lastName { get; set; }

        public string username { get; set; }
        [DataType(DataType.Password)]
        public string password { get; set; }


        [DataType(DataType.Password) , Compare("password")]
        public string confirmPassword { get; set; }


        [DataType(DataType.PhoneNumber)]
        public string phone { get; set; }
    }
}
