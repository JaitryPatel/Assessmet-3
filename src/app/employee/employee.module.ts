import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';




@NgModule({
  declarations: [
    ListComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FormsModule
  ],
  exports: [
    FormsModule
  ]
})
export class EmployeeModule { }
