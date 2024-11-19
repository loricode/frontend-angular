import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SparePartService {

  private _http = inject(HttpClient);
  constructor() { }

  public createSparePart = (obj:any):Observable<boolean> => {
    return this._http.post<boolean>(environment.baseApi + '/Repuesto/CrearRepuesto', obj)
  }

  public getListSpareParts = ():Observable<any[]> => {
    return this._http.get<any[]>(environment.baseApi + '/Repuesto/GetRepuestos')
  }

  public searchSpareParts = (query:string):Observable<any[]> => {
    return this._http.post<any[]>(environment.baseApi + '/Repuesto/GetRepuestos', { query })
  }

  public deleteSparePart = (id:any):Observable<boolean> => {
    return this._http.delete<boolean>(environment.baseApi + `/Repuesto/EliminarRepuesto?id=${id}`)
  }

}
