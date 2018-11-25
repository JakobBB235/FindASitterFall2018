import { Component, OnInit } from '@angular/core';
import { ParentsActions } from 'src/app/portal/findparent/parents.actions';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Parent } from 'src/app/entities/parent';

@Component({
  selector: 'app-registerparent',
  templateUrl: './registerparent.component.html',
  styleUrls: ['./registerparent.component.scss']
})
export class RegisterparentComponent implements OnInit {

  registerParentForm;
  
  constructor(private fb: FormBuilder, private router: Router, private parentsActions: ParentsActions) { }

  ngOnInit() {
    this.registerParentForm = this.fb.group(
      {
        username:['', Validators.required],
        password:['', Validators.required],

        name: ['', [Validators.required, Validators.maxLength(100)]],
        female: ['', Validators.required],
        address: ['', Validators.required],
        zipCode: ['', Validators.required],
        city: ['', Validators.required]
      }
    )
  }

  onSubmit(registerParentForm){
    if (registerParentForm.valid){
      // alert("valid"); 
      this.createNewUser(registerParentForm); 
    } else
      alert("invalid");
    console.log(registerParentForm)
  }

  createNewUser(registerSitterForm){
    let parent = registerSitterForm.value as Parent;
    this.parentsActions.createParent(parent); 
    this.router.navigate(['/home/login']); //Navigate to loginpage. Might conflict with e2e test
  }
}
