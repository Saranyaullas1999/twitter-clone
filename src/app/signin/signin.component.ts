import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private myRouter:Router,private myapi:ApiService) { }

  email=""
  password=""

  readValue=()=>{
    let data={
      "email":this.email,
      "password":this.password
    }
    console.log(data)
   this.myapi.signIn(data).subscribe(
    (res:any)=>{
      if (res.length>0) {
        localStorage.setItem("name",res[0].name)
        localStorage.setItem("id",res[0].id)
        this.myRouter.navigate(["/tweet"])  

      } else {

        alert("Invalid Credentials")

      }
      
    }
   )
   
  }

  ngOnInit(): void {
  }

}
