import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewmytweets',
  templateUrl: './viewmytweets.component.html',
  styleUrls: ['./viewmytweets.component.css']
})
export class ViewmytweetsComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  fetchData=()=>{
    let data ={
      "user_id":localStorage.getItem("id")
    }
    console.log(data)
    this.myapi.viewSingle(data).subscribe(
      (res)=>{
        this.dataD=res
      }
    )
  }
  

dataD:any=[]
  ngOnInit(): void {
  }

}
