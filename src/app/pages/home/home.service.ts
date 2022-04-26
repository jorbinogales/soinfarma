import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { ClientInterface } from 'src/app/interface/client.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeService {


  public _client: BehaviorSubject<ClientInterface | null> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  /* GET PROFILE */
  get profile$(): Observable<ClientInterface>
  {
    return this._client.asObservable();
  }

  
  create(formData: any): Observable<ClientInterface>
  {
      const data = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          state: formData.state,
          business: formData.business
      }
      return this.http.post<ClientInterface>(`${environment.API_BACKEND}/client`, data).pipe(
        map((response) => {
            return response;
        })
    );
  }

  sendEmail(formData: any): Observable<ClientInterface>
  {
      const data = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          business: formData.business,
      }
      return this.http.post<ClientInterface>(`${environment.API_BACKEND}/client/contact`, data).pipe(
        map((response) => {
          return response;
        })
      )
  }

  
}