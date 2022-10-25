import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addUser=(data:any)=>{
    return this.http.post("http://localhost:8080/signup",data)
  }


  signIn=(data:any)=>{
    return this.http.post("http://localhost:8080/login",data)
  }

  addPost=(data:any)=>{
    return this.http.post("http://localhost:8080/addPost",data)
  }

  viewPost=()=>{
    return this.http.get("http://localhost:8080/view")
  }
}
