import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerbaby',
  templateUrl: './registerbaby.component.html',
  styleUrls: ['./registerbaby.component.scss']
})

export class RegisterbabyComponent implements OnInit {
  registerBabyForm;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerBabyForm = this.fb.group(
      {
          name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
          female: ['', Validators.required],
          birthDate: ['', Validators.required],
          specialNeeds: ['', Validators.required],
          address: ['', Validators.required],
          zipCode: ['', Validators.required],
          city: ['', Validators.required]
      }
    )
  }

  onSubmit(registerBabyForm){
    if (registerBabyForm.valid){
      alert("valid");
    } else
      alert("invalid");
    console.log(registerBabyForm)
  }
}
