import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // private fb: FormBuilder; //Manuelt
  loginForm;
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { } //Dependency injection, reactive form

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
          username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
          password: ['', Validators.required]
      }
    )
  }

  onSubmit(loginForm){
    if (loginForm.valid){
      // alert("valid");
      // Send request to back-end to validate login
    //   this.authService.login().subscribe(result => {
    //   this.router.navigate(['/portal']);
    // }); //Subscribe!

    //NEW
    this.authService.login().subscribe(result => {
      if(loginForm.username == "admin" && loginForm.password == "aD_min123")
        this.router.navigate(['/admin']);
      else
        this.router.navigate(['/portal']);
    }); //Subscribe!
      
      //Route to portal site
      // this.router.navigate(['/portal']);
    } else
      // alert("invalid");
      console.log(loginForm)
  }

}
