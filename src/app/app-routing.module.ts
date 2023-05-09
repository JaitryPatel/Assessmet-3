import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './employee/update/update.component';
import { ListComponent } from './employee/list/list.component';


const routes: Routes = [
  {path:"", redirectTo:"list", pathMatch:"full"},
  // {path:"add-emp", component : AddEmployeeComponent},
  {path:"update/:id", component: UpdateComponent},
  {path:"list", component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
