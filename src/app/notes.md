
1. Event Binding
** Interpolation eg <p>{{selectedState}}</p>
** Property Binding eg  [value]="firstName" 
** Two way-data eg. [(ngModel)]="firstName"

** Function
** Step Buat Component Master ng gc master di folder component
** Make it call each component base on directive function from button grup click

2. API Integration
  - tambahkan common/htpp di app.config.ts
  - jika ada error cors strict port, jalankan di port yang berbeda
  - ng serve --port=4209
3. Structure Directive
   - eg in li : <li *ngFor="let item of roleList">{{item.role}}</li>
   - eg in select : <option *ngFor="let item of roleList">{{item.role}}</option>
https://freeapi.miniprojectideas.com/api/clientStrive/GetAllRoles
https://freeapi.miniprojectideas.com/index.html

4. Service
   - ng g s master
   - api Response model interface to wrap data from api
5. Router, Routeroutlet, RouterLink, RouterLinkActive
   - create other compnent untuk mencoba route redirect to compnent;  ng g c employee,ng g c client
   - untuk mencobanya salah satunya pakai Bostrap Navbar
   - Routeroutlet responsible to render activity route
   - Routerlink untuk redirect ke route yang di definisikan
   - RouterLinkActive penandanda di menu route yang sedang aktif

6 Buat Client Module
  - create profer form
  - create class 
  - initialize class, bind to form using FormModule
  pakai class, karna pakai interface lebih tedious (membosankan)
  - buat service, ng g s client
  - buat environment spya API URL bisa disimpan dan tidak berulang ng g environments
7. Validation 
   - template validation ditandai #personName="ngModel"
      #personName="ngModel" required

8. Buat Client Project Module
   - ng g c clientProject (buat component)
   - update route
   - complete UI Part
   - Using Reactive Form ditandai di form [formGroup]="namaForm", dan formControlName
   - menghandle dropdown, buat api service next buat interface
   - Pipe, Capital UperCase,DatePipe implement in ClientList
   - Pipe Asyn get APi tanpa subcribe dan dapat di render di html
   - Penggunanaan Constant
   - Penggunaan signal 

9. Reusable Component Input and Output Properties
   - di folder reusableComponent buat ng g c alert, ng g c myButton
   - @Input pass value between component parent and child
   - pass data from child to parent using output and emiter
10. Login 
   - di component folder, ng g c login, ng g c layout