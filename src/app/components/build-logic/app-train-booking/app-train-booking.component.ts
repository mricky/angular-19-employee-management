import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-app-train-booking',
  imports: [CommonModule,FormsModule],
  templateUrl: './app-train-booking.component.html',
  styleUrl: './app-train-booking.component.css'
})
export class AppTrainBookingComponent {
  cityList: string[]=["Gambir","Bekasi","Bandung"];

  // approach 1 dirfference variable
  // ngModule using FormsModule
  fromStation: string = "";
  toStation: string = "";
  dateToTravel: string = "";

  // bisa juga menggunakan object
  journeyDetail: any = {
    fromStation: '',
    toStation: '',
    dateToTravel: ''
  }

  isFormValid: boolean = false;

  onReset(){
    // this.dateToTravel = "";
    // this.fromStation = "";
    // this.toStation = "";

    this.journeyDetail.dateToTravel = "";
    this.journeyDetail.fromStation = "";
    this.journeyDetail.toStation = "";
    this.journeyDetail.isFormValid = false;
  }
  onSearch(){
    // if(this.fromStation == '' || this.toStation == '' || this.dateToTravel == '') {
    //   alert("Please select journal details");
    //   this.isFormValid = false;
    // } else {
    //   if(this.fromStation == this.toStation){
    //     alert("From N to Station can't be same");
    //   } else {
    //     this.isFormValid = true;
    //   }
    //   this.isFormValid = true;
    // }

    // cara object
    if(this.journeyDetail.fromStation == '' || this.journeyDetail.toStation == '' || this.journeyDetail.dateToTravel == '') {
      alert("Please select journal details");
      this.isFormValid = false;
    } else {
      if(this.journeyDetail.fromStation == this.journeyDetail.toStation){
        alert("From N to Station can't be same");
      } else {
        this.isFormValid = true;
      }
      this.isFormValid = true;
    }

  }
}
