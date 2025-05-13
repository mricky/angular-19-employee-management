import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sub-menu-layout',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './sub-menu-layout.component.html',
  styleUrl: './sub-menu-layout.component.css'
})
export class SubMenuLayoutComponent {
  
  expandedMenu: string = '';
  menuList:any[] = [
    {
        title:'Home',
        children: [
          {title:'Dashboard',route:'dashboard'},
          {title:'Analytics',route:'dashboard'},
          {title:'Marketing',route:'dashboard'
          }
        ]
    },
    {
      title:'Employee',
      children: [
        {title:'New Employee',route: 'new-Empl'},
        {title:'Employee List',route: 'emp-Empl'}
      ]
    },
    {
      title:'Client',
      children: [
        {title:'Client List',route: '/client'}
      ]
    },
    {
      title:'Master',
      children: [
        {title:'City',route: 'city'},
        {title:'State',route: 'state'},
        {title:'District',route: 'district'},
        {title:'Dropdown',route: 'dropdown'},
        {title:'Designation',route: 'dropdown'}
      ]
    },
    {
      title:'Build Logic',
      children:[
        {title:'Inline Table Form',route:'inline-form'},
        {title:'Modal',route:'/build-logic/modal-popup'},
        {title:'Train Booking',route:'/build-logic/app-train-booking'},
        {title:'Glossary Cart',route:'/build-logic/app-glossary-cart'},
        {title:'Server Side Pagination',route:'/build-logic/app-server-side-pagination'}
      ]
    }   
  ]

  onExpand(parentMenu:string){
    if(this.expandedMenu === parentMenu){
      this.expandedMenu = ''
    } else {
      this.expandedMenu = parentMenu
    }
   
   
  }
}
