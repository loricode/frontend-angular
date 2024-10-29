import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

//interfaces
import { Customer } from '../../domain/interfaces/orders';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _http = inject(HttpClient);
  
  constructor() { }

  public getListCustomers = ():Observable<Customer[]> => {
    return this._http.get<Customer[]>(environment.baseApi + '/Cliente/GetAllClientes')
  }

  public getCustomer = (id:number):Observable<Customer> => {
    return this._http.get<Customer>(environment.baseApi + `/Cliente/GetClienteDetails?id=${id}`)
  }

  public createCustomer = (obj:any):Observable<any> => {
    return this._http.post<any>(environment.baseApi + '/Cliente/CreateCliente', obj)
  }

  public updateCustomer = (id:number, obj:any):Observable<any> => {
    return this._http.put<any>(environment.baseApi + `/Cliente/UpdateCliente?id=${id}`, obj)
  }

  public deleteCustomer = (id:number):Observable<any> => {
    return this._http.delete<any>(environment.baseApi + `/Cliente/DeleteClientnt?id=${id}`)
  }

  public searchCustomer = (obj:any):Observable<Customer> => {
    return this._http.post<Customer>(environment.baseApi + '/Cliente/SearchClienteDetails', obj)
  }

}
