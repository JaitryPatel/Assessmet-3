import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '@angular/router';

import { datamodel } from './model';
import { ApiService } from '../api.service';
import { Validation } from '../validation';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  submitted = false;
  employeeform!: FormGroup;
  public data : any | datamodel[];
  public id : any;
  constructor(private formbuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.employeeform = this.formbuilder.group(
      {
      fname: ['',Validators.required, Validators.minLength(2),],
      lname: ['', Validators.required, Validators.minLength(2),],
      email: ['', Validators.required,Validators.email,],
      department: ['', Validators.required],
      address: ['', Validators.required],
      contactnumber: ['', Validators.required],
      description: ['', Validators.required],
      status : ['', Validators.required],
      password: ['', Validators.required,Validators.minLength(8),Validators.maxLength(20),],
      confirmpassword: ['', Validators.required],
      // {
        validators: [Validation.match('password', 'confirmPassword')]
      // }
    
    }
    )
    this.getemployee();
  }

  

  get f(): { [key : string]: AbstractControl}
  {
    return this.employeeform.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if(this.employeeform.invalid)
    {
      return;
    }

    console.log(JSON.stringify(this.employeeform.value, null , 2));
  }

  addemployee(data : datamodel) {
// console.log(data);
// debugger
this.api.addemployee(data).subscribe((res =>{
  this.employeeform.reset();
}))

  }
  getemployee(){
    // debugger
    this.api.getemployee().subscribe(res => {
      this.data = res;
    })
  }
  deleteemployee(){
    this.api.deleteemployee(this.id).subscribe((res =>{
      this.data= res;
      
    }))
  }
}

