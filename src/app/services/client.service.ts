import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { environment } from '../../environments/environment.development';
import { APIResponseModel } from '../model/interface/role';
import { Constant } from '../constrant/Constrant';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  // contoh untuk async
  getUsers(){
      return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  getClients():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENT);
  }
  addUpdate(obj:Client):Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL +Constant.API_METHOD.ADD_UPDATE_CLIENT,obj);
  }
  deleteCleintId(id:number):Observable<APIResponseModel>{
    return this.http.delete<APIResponseModel>(environment.API_URL +Constant.API_METHOD.DELETE_CLIENT+id);
  }

  // Employee 
  getEmployees():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL +Constant.API_METHOD.GET_ALL_EMPLOYEE);
  }

  addClientProjectUpdate(obj:Client):Observable<APIResponseModel>{
     return this.http.post<APIResponseModel>(environment.API_URL +Constant.API_METHOD.ADD_UPDATE_CLIENT_PROJECT,obj);
  }
  getClientProjects():Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENT_PROJECT);
  }
  
}
