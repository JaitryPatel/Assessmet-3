import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { EmployeeModule } from './employee/employee.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
// import { ListComponent } from './employee/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CoreModule, 
    EmployeeModule, 
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
    // ListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
