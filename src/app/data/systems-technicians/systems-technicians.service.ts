import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

//interfaces
import { Technical } from '../../domain/interfaces/orders';

@Injectable({
  providedIn: 'root'
})
export class SystemsTechniciansService {
  private _http = inject(HttpClient);
  
  constructor() { }

  public getListTechnical = ():Observable<Technical[]> => {
    return this._http.get<Technical[]>(environment.baseApi + '/Tecnico/GetAllTecnicos')
  }

  public getTechnical = (id:number):Observable<Technical> => {
    return this._http.get<Technical>(environment.baseApi + `/Tecnico/GetTecnicoDetails?id=${id}`)
  }

  public createTechnical = (obj:any):Observable<any> => {
    return this._http.post<any>(environment.baseApi + '/Tecnico/CreateTecnico', obj)
  }

  public updateTechnical = (id:number, obj:any):Observable<any> => {
    return this._http.put<any>(environment.baseApi + `/Tecnico/UpdateTecnico?id=${id}`, obj)
  }

  public deleteTechnical = (id:number):Observable<any> => {
    return this._http.delete<any>(environment.baseApi + `/Tecnico/DeleteTecnico?id=${id}`)
  }

  public searchTechnical = (obj:any):Observable<Technical[]> => {
    return this._http.post<Technical[]>(environment.baseApi + '/Tecnico/SearchTecnicoDetails', obj)
  }

}
