import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-candidate',
  templateUrl: './view-all-candidate.component.html',
  styleUrls: ['./view-all-candidate.component.css']
})
export class ViewAllCandidateComponent {



  
  constructor(private api:ApiService){this.datafromApi()}

  datafromApi=()=>{
    this.api.fetchexam().subscribe(
      (response:any)=>{
this.exam=response
      }
    )
  }

exam:any=[]
  

  ngOnInit(): void {
  }

}
