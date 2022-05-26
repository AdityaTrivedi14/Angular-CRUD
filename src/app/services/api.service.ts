import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/posts';

  constructor(private http: HttpClient) { }

  saveEmployee(data: any){
    return this.http.post<any>('http://localhost:5000/posts', data).pipe(map((res: any)=>{
      return res;
    }))
  }

  getEmployee(){
    return this.http.get<any>('http://localhost:5000/posts').pipe(map((res: any)=>{
      return res;
    }))
  }

  updateEmployee(data: any, id: number){
    const url = `${this.apiUrl}/${id}`
    return this.http.put<any>(url, data).pipe(map((res: any)=>{
      return res;
    }))
  }

  deleteEmployee(id: number){
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<any>(url, httpOptions).pipe(map((res: any)=>{
      return res;
    }))
  }
}
