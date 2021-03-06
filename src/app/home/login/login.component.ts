import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { SittersActions } from 'src/app/portal/findsitter/sitters.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private sittersActions: SittersActions) { } //Dependency injection, reactive form

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
    const username: string = loginForm.value.username as string;
    const password: string = loginForm.value.password as string;
    console.log(username);
    console.log(password);
    if(username == "admin" && password == "aD_min123"){
      console.log("Admin Authority");
      this.sittersActions.enableAdminAuthority();
      console.log("Logged in as admin");
      // this.router.navigate(['/admin']);
    }
    console.log(loginForm);

    this.authService.login().subscribe(result => {
      console.log("Logged in as user");
      this.router.navigate(['/portal']);
    }); //Subscribe!
      
    } else
      // alert("invalid");
      console.log(loginForm)
  }

}
