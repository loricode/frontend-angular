import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _http = inject(HttpClient)
  
  constructor() { }

  public getListCustomer = ( obj:any ):Observable<any[]> => {
    return this._http.post<any[]>(environment.baseApi + '/list', obj)
  }

  public createCustomer = ( obj:any ):Observable<any> => {
    return this._http.post<any>(environment.baseApi + '/create', obj)
  }

  public updateCustomer = ( obj:any ):Observable<any> => {
    return this._http.post<any>(environment.baseApi + '/update', obj)
  }

  public deleteCustomer = ( obj:any ):Observable<any> => {
    return this._http.post<any>(environment.baseApi + '/update', obj)
  }

}
