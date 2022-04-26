import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppService {


  constructor(private http: HttpClient) { }

    sendIp(ip: string)
    {
        const data = {
            ip: ip
        }
        return this.http.post<any>(`${environment.API_BACKEND}/visitor`, data).toPromise().then((resp:any) =>{
            console.log(resp);
        })
    }

  
}