import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  get<T>(url: string): Observable<T> {
      return (this.http.get(`${environment.api_endpoint}${url}`)) as any;
  }

  post<T>(url: string, body?: any): Observable<T> {
      return (this.http.post(`${environment.api_endpoint}${url}`, body)) as any;
  }

  put<T>(url: string, body?: any): Observable<T> {
      return (this.http.put(`${environment.api_endpoint}${url}`, body)) as any;
  }

  delete<T>(url: string): Observable<T> {
      return (this.http.delete(`${environment.api_endpoint}${url}`)) as any;
  }

}
