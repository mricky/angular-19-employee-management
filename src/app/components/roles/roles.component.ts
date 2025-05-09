import { HttpClient } from '@angular/common/http';
import { Component,inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{
 
 //roleList: any [] = [];

 roleList: IRole [] = [];

 http = inject(HttpClient);
 // DI call server Old Way new way using @Iject
 //constructor(private http: HttpClient) {
 //}
 ngOnInit(): void {

    this.getAllRoles();
 }
 
 
 getAllRoles(){

   this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/clientStrive/GetAllRoles").subscribe((res:APIResponseModel)=>{
      this.roleList = res.data;
   })

 }


 
  // string, number, boolean,date, object, array, null, undefined
  firstName : string = "Angular Tutorial";
  angularVersion = "Version 19";
  version = 19;
  isActive : boolean = false;
  currentDate : Date = new Date();
  inputType : string = "radio";
  selectedState: string = "";

  showWelcomeAlert(){
    alert("Welcome to Angular 19 Tutorial");
  }

  showMessage(message: string){
    alert(message);
  }
}
