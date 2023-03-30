import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchexam=()=>{
    return this.http.get("http://localhost:3000/viewall",)
  }


sentvalue=(data:any)=>{
  return this.http.post("http://localhost:3000/add",data)
}

}