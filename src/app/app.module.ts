import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcandidateComponent } from './addcandidate/addcandidate.component';
import { ViewAllCandidateComponent } from './view-all-candidate/view-all-candidate.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchCandidateComponent } from './search-candidate/search-candidate.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const myroutes=[
   {path:"",component:AddcandidateComponent },

   {path:"view",component:ViewAllCandidateComponent },

   {path:"search",component:SearchCandidateComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AddcandidateComponent,
    ViewAllCandidateComponent,
    NavbarComponent,
    SearchCandidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes),
  FormsModule,
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
