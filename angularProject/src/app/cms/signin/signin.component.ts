import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './../../services/authentication.service';
import { AngularMaterialModule } from './../../angular-material/angular-material.module';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators , FormControl , FormsModule , ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
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
      password: ['', Validators.required]
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
      this.authService.userAuthentication(this.loginForm.value).subscribe(
        (response:any)=>{

          //console.log(response);
          //this.authService.login(response.token.token,response.id,response.role);
          if(response.role === 'Admin')
            this.router.navigate(['/backend/dasboard']);
          else if(response.role ==='Customer')
          {
            this.router.navigate(['/']);
          }
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
