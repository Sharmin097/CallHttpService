import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';

import { Student1Service } from './student.service';


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [Student1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
