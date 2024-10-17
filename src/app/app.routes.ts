import { Routes } from '@angular/router';

import { HomeComponent } from './presentation/pages/dashboard/home/home.component';
import { JobOfferComponent } from './presentation/pages/dashboard/job-offer/query-job-offer/job-offer.component';
import { MantJobOfferComponent } from './presentation/pages/dashboard/job-offer/mant-job-offer/mant-job-offer.component';
import { OrdersComponent } from './presentation/pages/orders/orders.component';


export const routes: Routes = [
   {
      path:'dashboard',
      loadComponent: () => import('./presentation/pages/dashboard/dashboard.component').then(c => c.DashboardComponent),
      children:[
         {
            path:'',
            component: HomeComponent
         },
         {
           path:'jobOffer',
           component: JobOfferComponent
        },
        {
          path:'jobOfferMant',
          component: MantJobOfferComponent
        },
        
      ]
   },
   {
      path:'orders',
      component: OrdersComponent
    }
];
