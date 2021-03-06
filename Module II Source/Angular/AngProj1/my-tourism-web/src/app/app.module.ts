import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { MyhomeComponentComponent } from './myhome-component/myhome-component.component';
import { EmployeeListComponentComponent } from './employee-list-component/employee-list-component.component';
import { ContactcomponentComponent } from './contactcomponent/contactcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    MyhomeComponentComponent,
    EmployeeListComponentComponent,
    ContactcomponentComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [ContactcomponentComponent]
})
export class AppModule { }
