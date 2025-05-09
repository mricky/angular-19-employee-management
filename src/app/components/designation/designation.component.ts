import { Component, Inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel, IDesignation } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  designationList : IDesignation[] = [];
  //masterService = Inject(MasterService); // kenapa pakai ini ga jalan
  masterService :any;
  isLoader : boolean = true;
  constructor(masterService : MasterService){
     this.masterService = masterService
  }
  ngOnInit(): void {
      this.masterService.getDesignations().subscribe((result:APIResponseModel)=>{
         this.designationList = result.data;
         this.isLoader = false;
      });
    
  }
  testFunction(){
    this.masterService.testFunction((result:string)=>{
      alert('test')
    })
  }
}
