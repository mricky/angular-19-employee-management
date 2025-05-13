import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-glossary-cart',
  imports: [CommonModule, FormsModule],
  templateUrl: './app-glossary-cart.component.html',
  styleUrl: './app-glossary-cart.component.css'
})
export class AppGlossaryCartComponent {

  foodItemList = [
    { itemId: 21, itemName: 'Cooking Oil', cost: 120 },
    { itemId: 2, itemName: 'Rice', cost: 60 },
    { itemId: 14, itemName: 'Dal', cost: 100 },
    { itemId: 51, itemName: 'Sugar', cost: 45 },
    { itemId: 61, itemName: 'Aata', cost: 40 },
    { itemId: 14, itemName: 'Tumeric', cost: 200 },
    { itemId: 23, itemName: 'Coffe', cost: 2500 },
    { itemId: 145, itemName: 'Dry Fruit Mix', cost: 850 },
  ]

  selectedFoodItemList: any[] = [];
  cartObj: any = {
    itemId: '',
    quantity: '',
    itemName: '',
    cost:''
  }

  totalCost: number =0;

  onAddItem() {
    
    const itemRecord = this.foodItemList.find(m=>m.itemId == this.cartObj.itemId);
    
    const isItemAlreadySelected = this.selectedFoodItemList.find(m=>m.itemId == this.cartObj.itemId);

    
    if(itemRecord !== undefined){
      
      if(isItemAlreadySelected != undefined){
        isItemAlreadySelected.quantity = Number(this.cartObj.quantity) + Number(isItemAlreadySelected.quantity);
        
       
      } else {
        this.cartObj.itemName = itemRecord.itemName + '-' +itemRecord.cost;
        this.cartObj.cost = itemRecord.cost;
        this.selectedFoodItemList.unshift(this.cartObj)
      }
        this.cartObj = {
          itemId: '',
          quantity: '',
          itemName: '',
          cost:''
        }
    }

    this.totalCost = 0;
    this.selectedFoodItemList.forEach(element=>{
      const total = element.quantity * element.cost;
      this.totalCost = this.totalCost + total;
    });
   
  }
}
