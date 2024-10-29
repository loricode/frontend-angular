import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Order } from '../../domain/interfaces/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private _http = inject(HttpClient);
  constructor() { }

  public createOrder = (obj:any):Observable<boolean> => {
    return this._http.post<boolean>(environment.baseApi + '/Orden/CrearSolicitud', obj)
  }

  public getListOrders = ():Observable<Order[]> => {
    return this._http.get<Order[]>(environment.baseApi + '/Orden/GetOrders')
  }

}
