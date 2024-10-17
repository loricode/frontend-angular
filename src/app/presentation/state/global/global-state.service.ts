import { Injectable } from '@angular/core';

import { Order } from '../../../domain/interfaces/orders';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  public listOrders: Order[] = [{
    id:'4sdf-5ds-6dsf-2fds-3ew',
    address:"wdsdsasfsdf",
    email:"loricode24qgmail.com",
   failure:"sadasd",
   name:"wadfsdf",
   nit:"12435436457"
  },
  {
    id:'4sdf-5ds-6dsf-2fds-3fsdfew',
    address:"wdsdsasfsdf",
    email:"loricode24qgmail.com",
   failure:"sadasd",
   name:"wadfsdf",
   nit:"12435436457"
  },
  {
    id:'4sdf-5ds-6dsf-2fdssad-3fsdfew',
    address:"wdsdsasfsdf",
    email:"loricode24qgmail.com",
   failure:"sadasd",
   name:"wadfsdf",
   nit:"12435436457"
  },
  {
    id:'4sdf-5ds88-6dsf-2fdssad-3fsdfew',
    address:"wdsdsasfsdf",
    email:"loricode24qgmail.com",
   failure:"sadasd",
   name:"wadfsdf",
   nit:"12435436457"
  }];

  public setListOrders = (order: Order) => {

    this.listOrders.push(order);

  }

  constructor() { }
}
