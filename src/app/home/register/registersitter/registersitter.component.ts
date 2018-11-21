import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Sitter } from '../../../entities/sitter';
import { SittersActions } from 'src/app/portal/findsitter/sitters.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registersitter',
  templateUrl: './registersitter.component.html',
  styleUrls: ['./registersitter.component.scss']
})
export class RegistersitterComponent implements OnInit {

  registerSitterForm;

  constructor(private fb: FormBuilder, private router: Router, private sittersActions: SittersActions) { } 

  ngOnInit() { 
    this.registerSitterForm = this.fb.group(
      {
        username:['', Validators.required],
        password:['', Validators.required],

        name: ['', [Validators.required, Validators.maxLength(100)]],
        female: ['', Validators.required],
        birthDate: ['', Validators.required],
        noCriminalRecord: ['', Validators.required],
        noChildRecord: ['', Validators.required],
        hourlyWage: ['', Validators.required],
        address: ['', Validators.required],
        zipCode: ['', Validators.required],
        city: ['', Validators.required]
      }
    )
  }

  onSubmit(registerSitterForm){
    if (registerSitterForm.valid){
      // alert("valid"); 
      this.createNewUser(registerSitterForm); //Used in test
    } else
      alert("invalid");
    console.log(registerSitterForm)
  }
  
  //Used in test
  createNewUser(registerSitterForm){
    // const theSitter = new Sitter();
    // theSitter.name = registerSitterForm.name;
    // theSitter.female = registerSitterForm.female;
    // theSitter.birthDate = registerSitterForm.birthDate;
    // theSitter.noCriminalRecord = registerSitterForm.noCriminalRecord;
    // theSitter.noChildRecord = registerSitterForm.noChildRecord;
    // theSitter.hourlyWage = registerSitterForm.hourlyWage;
    // theSitter.address = registerSitterForm.address;
    // theSitter.zipCode = registerSitterForm.zipCode;
    // theSitter.city = registerSitterForm.city;

    //Easy way, cast to sitter:
    let sitter = registerSitterForm.value as Sitter;
    this.sittersActions.createSitter(sitter); 
    this.router.navigate(['/home/login']); //Navigate to loginpage. Might conflict with e2e test
  }
}
