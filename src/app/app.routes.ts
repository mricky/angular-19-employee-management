import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';
import { ClientProjectComponent } from './components/client-project/client-project.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './services/auth.guard';
import { SubMenuLayoutComponent } from './components/sub-menu-layout/sub-menu-layout.component';
import { ModalPopupComponent } from './components/build-logic/modal-popup/modal-popup.component';
import { AppTrainBookingComponent } from './components/build-logic/app-train-booking/app-train-booking.component';
import { AppGlossaryCartComponent } from './components/build-logic/app-glossary-cart/app-glossary-cart.component';
import { ServerSidePaginationComponent } from './components/build-logic/server-side-pagination/server-side-pagination.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: 'master', // default
    //     pathMatch: 'full'
    // },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: SubMenuLayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path:'build-logic',
                children:[
                    {
                        path:'modal-popup',
                        component:ModalPopupComponent
                        
                    },
                    {
                        path: 'app-train-booking',
                        component: AppTrainBookingComponent
                    },
                    {
                        path: 'app-glossary-cart',
                        component: AppGlossaryCartComponent
                    }, {
                        path: 'app-server-side-pagination',
                        component: ServerSidePaginationComponent
                    }
                ]
            },
            {
                path: 'master',
                component: MasterComponent
            },
            {
                path: 'employee',
                component: EmployeeComponent
            },
            {
                path: 'client',
                component: ClientComponent,
            },
            {
                path: 'client-project',
                component: ClientProjectComponent
            }
        ]
    }
    
];
