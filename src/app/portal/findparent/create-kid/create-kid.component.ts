import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Kid, Parent } from 'src/app/entities/parent';
import { ParentsActions } from '../parents.actions';

@Component({
  selector: 'app-create-kid',
  templateUrl: './create-kid.component.html',
  styleUrls: ['./create-kid.component.scss']
})
export class CreateKidComponent implements OnInit {

  createKidForm;
  clickedParent: Parent;

  constructor(private fb: FormBuilder, private router: Router, private ngRedux: NgRedux<IAppState>, 
    private parentsActions: ParentsActions) { } 

  ngOnInit() {
    this.createKidForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.maxLength(100)]],
        female: ['', Validators.required],
        birthDate: ['', Validators.required],
        specialNeeds: ['', Validators.maxLength(200)]
      }
    );

    this.ngRedux.select(x => x.parents).subscribe((data) => {
      this.clickedParent = data.parents.filter(x => x._id === data.itemId)[0] //only one with matching id so always index 0

    });

    
  }

  onSubmit(createKidForm){
    if (createKidForm.valid){
      // alert("valid"); 
      this.createNewKid(createKidForm); //Used in test
    } else
      alert("invalid");
    console.log(createKidForm);
  }

  createNewKid(createKidForm){
    let kid = createKidForm.value as Kid;
    console.log(this.clickedParent);
    console.log(kid);
    
    let kids: Kid[] = [kid];
    if(this.clickedParent.kids != undefined){
      kids = this.clickedParent.kids;
      kids.push(kid);
    } 
    else {
      this.clickedParent.kids = kids;
    }
    console.log(kid);
    this.parentsActions.updateParent(this.clickedParent); 
    // this.router.navigate(['/home/login']); 
  }
}
