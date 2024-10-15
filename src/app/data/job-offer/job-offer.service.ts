import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  private _http = inject(HttpClient)
  
  constructor() { }

  public getListJobOffer = ( obj:any ):Observable<any[]> => {
    //si es get
    //return this._http.get<any[]>(environment.baseApi + 'list')
    return this._http.post<any[]>(environment.baseApi + '/list', obj)
  }

  
  public createJobOffer = ( obj:any ):Observable<any> => {

    return this._http.post<any>(environment.baseApi + '/create', obj)
  }

}
