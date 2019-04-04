import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  IStudent } from './student';
import { Observable } from 'rxjs';



@Injectable()
export class Student1Service {

  private _url: string = "/assets/data/info.json";

  constructor(private http:HttpClient) { }

  getStudents(): Observable<IStudent[]>{
    return this.http.get<IStudent[]>(this._url)
                    
  }
  

}
