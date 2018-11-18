import { Component, OnInit } from '@angular/core';
import { Sitter } from 'src/app/entities/sitter';
import { SittersActions } from 'src/app/portal/findsitter/sitters.actions';
import { Validators, FormBuilder } from '@angular/forms';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';

@Component({
  selector: 'app-edit-sitter',
  templateUrl: './edit-sitter.component.html',
  styleUrls: ['./edit-sitter.component.scss']
})
export class EditSitterComponent implements OnInit {

  editSitterForm;
  sitterToBeEdited: Sitter; //get from store?
  index: number;

  constructor(private fb: FormBuilder, private sittersActions: SittersActions, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.editSitterForm = this.fb.group(
      {
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

    this.ngRedux.select(x => x.sitters).subscribe((data) => {
      this.index = data.itemIndex;
      this.sitterToBeEdited = data.sitters[this.index];

      //TEST
      // this.sitterToBeEdited = data.sitters[0];
      console.log(this.sitterToBeEdited.name);
    });
  }

  onSubmit(editSitterForm){
    if (editSitterForm.valid){
      // alert("valid"); 
      this.updateSitter(editSitterForm); 
    } else
      alert("invalid");
    console.log(editSitterForm)
  }
  
  updateSitter(editSitterForm){
    //Easy way, cast to sitter:
    let sitter = editSitterForm.value as Sitter;
    this.sittersActions.updateSitter(sitter, this.index);

    //nav til router: dep inject Router. this.router.navigate("/path")
  }

}
