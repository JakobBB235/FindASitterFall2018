// import { Component, OnInit, Input } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
// import { TempDataService } from '../../../temp-data.service';
// import { Sitter } from '../../../entities/sitter';

// @Component({
//   selector: 'app-registersitter',
//   templateUrl: './registersitter.component.html',
//   styleUrls: ['./registersitter.component.scss']
// })
// export class RegistersitterComponent implements OnInit {

//   registerSitterForm;
//   constructor(private fb: FormBuilder, private tempData: TempDataService) { } //new

//   ngOnInit() {
//     this.registerSitterForm = this.fb.group(
//       {
//         name: ['', [Validators.required, Validators.maxLength(100)]],
//         female: ['', Validators.required],
//         birthDate: ['', Validators.required],
//         noCriminalRecord: ['', Validators.required],
//         noChildRecord: ['', Validators.required],
//         hourlyWage: ['', Validators.required],
//         address: ['', Validators.required],
//         zipCode: ['', Validators.required],
//         city: ['', Validators.required]
//       }
//     )
//   }

//   onSubmit(registerSitterForm){
//     if (registerSitterForm.valid){
//       // alert("valid"); 
//       this.createNewUser(registerSitterForm); //Used in test
//     } else
//       alert("invalid");
//     console.log(registerSitterForm)
//   }
  
//   //Used in test
//   createNewUser(registerSitterForm){
//     // Sitter theSitter = new Sitter();
//     const theSitter = new Sitter();
//     theSitter.name = registerSitterForm.name;
//     theSitter.female = registerSitterForm.female;
//     theSitter.birthDate = registerSitterForm.birthDate;
//     theSitter.noCriminalRecord = registerSitterForm.noCriminalRecord;
//     theSitter.noChildRecord = registerSitterForm.noChildRecord;
//     theSitter.hourlyWage = registerSitterForm.hourlyWage;
//     theSitter.address = registerSitterForm.address;
//     theSitter.zipCode = registerSitterForm.zipCode;
//     theSitter.city = registerSitterForm.city;

//     //Easy way, cast to sitter:
//     // let sitter = registerSitterForm.value as Sitter;

//     this.tempData.addSitter(theSitter); //pass object to tempdata

//     //nav til router: dep inject Router. this.router.navigate("/path")
//   }
// }

import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TempDataService } from '../../../temp-data.service';
import { Sitter } from '../../../entities/sitter';
import { SittersActions } from 'src/app/portal/findsitter/sitters.actions';

@Component({
  selector: 'app-registersitter',
  templateUrl: './registersitter.component.html',
  styleUrls: ['./registersitter.component.scss']
})
export class RegistersitterComponent implements OnInit {

  registerSitterForm;

  constructor(private fb: FormBuilder, private tempData: TempDataService, private sittersActions: SittersActions) { } //Added sittersactions

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

    // this.tempData.addSitter(theSitter); //pass object to tempdata
    this.sittersActions.createSitter(sitter);

    //nav til router: dep inject Router. this.router.navigate("/path")
  }
}
