import { Component, Input, input,Output, EventEmitter,output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {
  @Input() btnText: string = '';
  @Input() btnClass: string ='';

  @Output() onButtonClicked = new EventEmitter<any>();

  onClick(){
    debugger;
    this.onButtonClicked.emit('admin');
  }
}
