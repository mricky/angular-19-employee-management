import { Component, inject, Inject, OnInit, signal, Signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, Employee, IClientProject } from '../../model/interface/role';
import { Client } from '../../model/class/Client';
import { ClientProject } from '../../model/class/ClientProject';
import { DatePipe } from '@angular/common';
import { AlertComponent } from "../../reusableComponent/alert/alert.component";

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, DatePipe, AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {


   projectForm: FormGroup = new FormGroup({
      clientProjectId: new FormControl(""),
      projectName: new FormControl("",[Validators.required,Validators.minLength(5)]),
      clientName: new FormControl(""),
      expectedEndDate: new FormControl(""),
      startDate: new FormControl(""),
      empDesignation: new FormControl(""),
      empEmailId: new FormControl(""),
      empCode: new FormControl(""),
      empId: new FormControl(0),
      empName: new FormControl("") 
   });

   clientService = inject(ClientService);

   employeeList: Employee[]=[];
   clientList : Client[] = [];
   clientProjectList: ClientProject[] =[];

   // Penggunaan Signal
   firstName = signal('Angular 19');
   projectList = signal<IClientProject[]>([]);


   ngOnInit(): void {
      const name = this.firstName(); // penggunaan signal seperti function

      this.getAllClient();
      this.getAllEmployee();
      //this.loadClientProject();
      this.getClientProject();
   }
   changeSignalFirstName(){
      this.firstName.set('React JS');
   }
   onSaveProject(){
      const formValue = this.projectForm.value;

      this.clientService.addClientProjectUpdate(formValue).subscribe((res:APIResponseModel)=>{
         if(res.result){
            alert('Project Created Success')
         } else {
            alert("Project failed");
         }
      });
   }
   getClientProject(){
      // penggunaan signal
      this.clientService.getClientProjects().subscribe((res:APIResponseModel)=>{
         this.projectList.set(res.data);
     })
   }
   loadClientProject(){
      this.clientService.getClientProjects().subscribe((res:APIResponseModel)=>{
          this.clientProjectList = res.data;
      })
    }
   getAllEmployee(){
      this.clientService.getEmployees().subscribe((res:APIResponseModel)=>{
         this.employeeList = res.data;
      });
   }
   getAllClient(){
      this.clientService.getClients().subscribe((res:APIResponseModel)=>{
         this.clientList = res.data;
      });
   }

}
