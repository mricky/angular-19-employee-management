import { Component,inject,OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';
import { AsyncPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AlertComponent } from "../../reusableComponent/alert/alert.component";
import { MyButtonComponent } from "../../reusableComponent/my-button/my-button.component";

@Component({
  selector: 'app-client',
  imports: [FormsModule, UpperCasePipe, DatePipe,AlertComponent, MyButtonComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
  currentDate = new Date();
  clientObj: Client = new Client();
  clientList: Client[] =[];
  // contoh async 
  userList$ : Observable<any> = new Observable<any>;

  clientService = inject(ClientService);
 
  ngOnInit(): void {
      this.loadClient();
      this.userList$ = this.clientService.getUsers();
  }

  loadClient(){
    this.clientService.getClients().subscribe((res:APIResponseModel)=>{
        this.clientList = res.data;
    })
  }
  onSaveClient(data:string){
    // alert(data);
    this.clientService.addUpdate(this.clientObj).subscribe((res:APIResponseModel)=>{
        if(res.result){
            alert("Client Created Success");
            this.loadClient();
            this.clientObj = new Client()
        } else {
            alert(res.message);
        }
    });
  }
  onEditClient(data:Client){
    this.clientObj = data;
  }
  onDeleteClient(id:number){
    const isDelete = confirm("Are you sure want to delete ?")
    debugger
    if(isDelete){
        this.clientService.deleteCleintId(id).subscribe((res:APIResponseModel)=>{
          if(res.result){
              alert("Client Deleted Success");
              this.loadClient();
          } else {
              alert(res.message);
          }
      });
    }
  }
 
}
