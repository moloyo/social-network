import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { CONFIG } from '../config/config';
import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from '../models/user-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private headers: HttpHeaders;
  private get token() {
      return localStorage.getItem('token');
  }

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  }

  post(url: string, body: any): Observable<UserData> {
    return this.http.post<UserData>(`${CONFIG.API_URL}/${url}`, body);
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${CONFIG.API_URL}/${url}`, { headers: this.headers });
  }
}
