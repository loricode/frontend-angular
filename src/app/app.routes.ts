import { Routes } from '@angular/router';

import { HomeComponent } from './presentation/pages/dashboard/home/home.component';

import { OrdersComponent } from './presentation/pages/dashboard/orders/orders.component';
import { CustomerComponent } from './presentation/pages/dashboard/customer/customer.component';
import { SystemsTechniciansComponent } from './presentation/pages/dashboard/systems-technicians/systems-technicians.component';
import { ServicesComponent } from './presentation/pages/dashboard/services/services.component';

//auth
import { LoginComponent } from './presentation/pages/auth/login/login.component';



export const routes: Routes = [
   {
      path:'',
      component: LoginComponent

   },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./presentation/pages/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'ordenes',
        component: OrdersComponent,
      },
      {
        path: 'clientes',
        component: CustomerComponent,
      },
      {
        path: 'servicios',
        component: ServicesComponent,
      },
      {
        path: 'tecnicos',
        component: SystemsTechniciansComponent,
      },
    ],
  },
];
