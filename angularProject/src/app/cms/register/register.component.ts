import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('form') form : any;
  public error:string = "";
  submitted = false;
  returnUrl: string;
  loginForm: FormGroup;
  public username : string = '' ;
  constructor(private formBuilder: FormBuilder , private router: Router ,
    private route: ActivatedRoute,
    private authService : AuthenticationService ,
    private httpClient : HttpClient) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      confirmpassword: ['', Validators.required],

    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  submit()
  {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid)
    {
      return;
    }
    else {
      this.authService.register(this.loginForm.value).subscribe(
        (response:any)=>{
            this.router.navigate(['/']);
        },
        (error)=>
        {
          console.log(error);
          this.error=("UserName or Password is not Correct");
        }
      );
    }
  }

}
