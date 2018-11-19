import { Component, OnInit } from '@angular/core';
import { Sitter } from 'src/app/entities/sitter';
import { SittersActions } from 'src/app/portal/findsitter/sitters.actions';
import { Validators, FormBuilder } from '@angular/forms';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-sitter',
  templateUrl: './edit-sitter.component.html',
  styleUrls: ['./edit-sitter.component.scss']
})
export class EditSitterComponent implements OnInit {

  editSitterForm;
  sitterToBeEdited: Sitter; //get from store?
  itemId: string;

  constructor(private fb: FormBuilder, private router: Router, private sittersActions: SittersActions, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.ngRedux.select(x => x.sitters).subscribe((data) => {
      //OLD
      // this.index = data.itemIndex;
      // this.sitterToBeEdited = data.sitters[data.itemIndex];
      // console.log(this.sitterToBeEdited.name);
      // console.log(data.itemIndex);
      this.itemId = data.itemId;
      this.sitterToBeEdited = data.sitters.find(sitter => sitter._id == data.itemId);//.filter(sitter => sitter._id == data.itemId)//Or itemId
    });

    this.editSitterForm = this.fb.group(
    {
      _id:['', Validators.required], //REMOVE?
      username:['', Validators.required],
      password:['', Validators.required],

      name: ['', [Validators.required, Validators.maxLength(100)]], // '' -> this.sitterToBeEdited.name?
      female: ['', Validators.required],
      birthDate: ['', Validators.required],
      noCriminalRecord: ['', Validators.required],
      noChildRecord: ['', Validators.required],
      hourlyWage: ['', Validators.required],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
      city: ['', Validators.required]
    });

    this.editSitterForm.setValue(this.sitterToBeEdited); //Only works if all attribues are a part of form.
    // this.editSitterForm.get('name').setValue(this.sitterToBeEdited.name) //Sets value of single attribute
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
    this.sittersActions.updateSitter(sitter);
    this.router.navigate(['/home/findsitter']);
  }
}
