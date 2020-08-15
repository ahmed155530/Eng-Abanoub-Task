using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using DTOs;
using Entities;
using Entities.Models;
using Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using TechnicalTask.NLog_Exceptions;
using ViewModels;

namespace TechnicalTask.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private UserManager<IdentityUser> _userManager;
        private SignInManager<IdentityUser> _singInManager;
        private readonly IOptions<ApplicationSettings> appSettings;
        private readonly IUnitOfWork repository;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly ApplicationSettings _appSettings;

        public AuthenticationController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager, IOptions<ApplicationSettings> appSettings, IUnitOfWork repository,  RoleManager<IdentityRole> roleManager)
        {
            _userManager = userManager;
            _singInManager = signInManager;
            this.appSettings = appSettings;
            this.repository = repository;

            this.roleManager = roleManager;
            _appSettings = appSettings.Value;
        }


        [HttpPost , Route("addRole")]
        public async Task<ActionResult> addRole(RoleViewModel model)
        {
            if(model != null)
            {
                IdentityRole role = new IdentityRole()
                {
                    Name = model.name
                };
                IdentityResult result = await roleManager.CreateAsync(role);
                return Ok();
            }
            else
            {
                return BadRequest();
            }
        }


        [HttpPost]
        [Route("Register")]
        //POST : /api/Authentication/Register
        public async Task<Object> Register([FromBody] RegisterViewModel model)
        {
            IdentityUser user = new IdentityUser();
            user.UserName = model.username;
            user.PhoneNumber = model.phone;
            try
            {
                var Result = await _userManager.CreateAsync(user, model.password);
                if (!Result.Succeeded)
                {
                    foreach (var item in Result.Errors)
                    {
                        return BadRequest(item.Description);
                    }
                }
                Customer customer = new Customer()
                {
                    firstName = model.firstName,
                    lastName = model.lastName,
                    UserID = user.Id
                };
                await _userManager.AddToRoleAsync(user, "Customer");
                repository.Customer.Add(customer);
                repository.save();
                var json = JsonConvert.SerializeObject(Result.Succeeded);
                return new OkObjectResult(json);
            }
            catch (Exception)
            {
                //logger.Error(ex.ToString());
                //logger.Warning(ex.StackTrace);
                DTO dto = new DTO()
                {
                    success = false,
                    message = "Registration process has failed"
                };
                return BadRequest(dto);
            }
        }


        [HttpPost]
        [Route("Login")]
        //POST : /api/Authentication/Login
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            var user = await _userManager.FindByNameAsync(model.username);
            if (user != null && await _userManager.CheckPasswordAsync(user, model.password))
            {
                // Get role assigned to the user
                var role = await _userManager.GetRolesAsync(user);
                IdentityOptions _options = new IdentityOptions();

                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim("UserID",user.Id.ToString()),
                        new Claim(_options.ClaimsIdentity.RoleClaimType,role.FirstOrDefault())
                    }),
                    Expires = DateTime.UtcNow.AddDays(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appSettings.JWT_Secret)), SecurityAlgorithms.HmacSha256Signature)
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);
                var response = new
                {
                    id = user.Id.ToString(),
                    token =  token,
                    role = role,
                };
                var json = JsonConvert.SerializeObject(response);
                return new OkObjectResult(response);

            }
            else
                return BadRequest(new { message = "Username or password is incorrect." });
        }
    }
}
