import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-kid',
  templateUrl: './create-kid.component.html',
  styleUrls: ['./create-kid.component.scss']
})
export class CreateKidComponent implements OnInit {

  createKidForm;

  constructor(private fb: FormBuilder, private router: Router, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.createKidForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.maxLength(100)]],
        female: ['', Validators.required],
        birthDate: ['', Validators.required],
        specialNeeds: ['', Validators.maxLength(200)]
      }
    )
  }

}
