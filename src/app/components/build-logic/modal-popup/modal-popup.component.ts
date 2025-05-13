import { Component, ElementRef, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-popup',
  imports: [],
  templateUrl: './modal-popup.component.html',
  styleUrl: './modal-popup.component.css'
})
export class ModalPopupComponent {
  // Menggunakan Signal
  isModal4Open = signal(false);
  isModal5Open : boolean = false;
  
  openByClassName(){
    this.isModal5Open = true;
  }

  closeByClassName(){
    this.isModal5Open = false;
  }
  openBySignal(){
    this.isModal4Open.set(true)
  }
  closeBySignal(){
    this.isModal4Open.set(false)
  }

  // Menggunakan viewChild
  @ViewChild('modal2') modalPopup2 : ElementRef | undefined;
  

  openByViewChild(){
    if(this.modalPopup2){
      this.modalPopup2.nativeElement.style.display = "block"
    }
  }
  closeByViewChild(){
    if(this.modalPopup2){
      this.modalPopup2.nativeElement.style.display = "none"
    }
  }
  // Menggunakan Document ID
  openByDocument(){
    const modal = document.getElementById("myModal");
    if(modal != null){
      modal.style.display = "block"
    }
  }
  closeModalByDocument(){
    const modal = document.getElementById("myModal");
    if(modal != null){
      modal.style.display = "none"
    }
  }
}
