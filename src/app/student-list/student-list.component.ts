import { Component, OnInit } from '@angular/core';
import { Student1Service } from '../student.service';

@Component({
  selector: 'student-list',
  template: `
    <h2>Student List</h2>
    <h3>{{errorMsg}}</h3>
    <ul *ngFor="let student of students">
    <li>{{student.id}}. {{student.name}} - {{student.age}}</li>
    </ul>
  `,
  styles: []
})
export class StudentListComponent implements OnInit {

  public students = [];
  public errorMsg;
  constructor(private _studentService: Student1Service) { }

  ngOnInit() {
    this._studentService.getStudents()
      .subscribe(data => this.students = data,
                error => this.errorMsg = error);
  }



}
