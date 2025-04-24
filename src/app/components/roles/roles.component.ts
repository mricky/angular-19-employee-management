import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  // string, number, boolean,date, object, array, null, undefined
  firstName : string = "Angular Tutorial";
  angularVersion = "Version 19";
  version = 19;
  isActive : boolean = false;
  currentDate : Date = new Date();
  inputType : string = "radio";
  selectedState: string = "";
}
