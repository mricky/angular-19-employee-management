import { CommonModule } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-server-side-pagination',
  imports: [CommonModule,FormsModule],
  templateUrl: './server-side-pagination.component.html',
  styleUrl: './server-side-pagination.component.css'
})
export class ServerSidePaginationComponent implements OnInit{
 
  productId: number =0;
  productName: string = '';
  categoryName: string ='';
  pageNumber: number = 1;
  pageSize: number = 5;
  sortBy: string = 'productName';
  sortOrder: string = 'asc';

  productList: any[]=[];

  totalRecord : number = 0;
  constructor(private http: HttpClient){}
  ngOnInit(): void {
   this.onSearch();
   this.getTotal();
  }
  getValue(){
    return Math.ceil(this.totalRecord/this.pageSize)
  }
  getTotal(){
    this.http.get("https://projectapi.gerasim.in/api/Products/getTotalProduct").subscribe((res:any)=>{
      this.totalRecord = res;
    });
  }
  getPageNumber(){
    const totalPages = Math.ceil(this.totalRecord/this.pageSize);

    return Array(totalPages).fill(0).map((x,i)=>i+1);

  }
  onPageChanged(pageNo:number){
    this.pageNumber = pageNo;
    this.onSearch();
  }
  onSearch(){
      let params = new HttpParams()
      .set('pageNumber',this.pageNumber.toString())
      .set('pageSize',this.pageSize.toString())
      .set('sortBy',this.sortBy.toString())
      .set('sortOrder',this.sortOrder.toString())

    if(this.categoryName !=''){
      params.set('category',this.categoryName)
    }

    if(this.productId){
      params.set('productId',this.productId)
    }
    
    
    if(this.productName != ''){
      params.set('shortName',this.productName)
    }
    
    this.http.get("https://projectapi.gerasim.in/api/Products",{params}).subscribe((res:any)=>{
      this.productList = res;

    })
  }
  
  onSort(fiedName:string){
    this.sortBy = fiedName;
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.onSearch();
  }
}
