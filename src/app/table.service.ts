import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http:HttpClient) { }


  getData():Observable<Data>{
    return this.http.get('https://dummy.restapiexample.com/api/v1/employees')
  }
}
