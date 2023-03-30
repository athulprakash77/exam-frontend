import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcandidate',
  templateUrl: './addcandidate.component.html',
  styleUrls: ['./addcandidate.component.css']
})
export class AddcandidateComponent {


  constructor(private api:ApiService){}

    name=""
    regesterNo=""
    phoneNo=""
    DOB=""
    emailid=""
    username=""
    password=""


    
 

    readvalue=()=>{
      let data=   
       {
        "name":this.name,
        "regesterNo":this.regesterNo,
        "phoneNo":this.phoneNo,
        "DOB":this.DOB,
        "emailid":this.emailid,
        "username":this.username,
        "password":this.password
            }

            console.log(data)
     this.api.sentvalue(data).subscribe(
      (Response:any)=>{
        console.log(Response)
      }
     )
            
    }
        

    ngOnInit(): void {
    }

}
