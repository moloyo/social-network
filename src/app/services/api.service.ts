import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { CONFIG } from '../config/config';
import {catchError } from 'rxjs/operators';
import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { UserData } from '../models/user-data';
import { NotifyService } from './notify.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private headers: HttpHeaders;
  private get token() {
      return localStorage.getItem('token');
  }

  constructor(private http: HttpClient, private readonly notifyService: NotifyService) {
    this.headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
  }

  post<T>(url: string, body: any, sendOptions = false): Observable<T> {
    const headers = sendOptions ? { headers: this.headers } : undefined;
    return this.http.post<T>(`${CONFIG.API_URL}/${url}`, body, headers).pipe(
      catchError( err => {
        this.notifyService.notify(`ERROR: ${err.status} ${err.name}. Detail: ${err.statusText}`, 'error', 10);
        return EMPTY;
      })
    );
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${CONFIG.API_URL}/${url}`, { headers: this.headers }).pipe(
      catchError( err => {
        this.notifyService.notify(`ERROR: ${err.status} ${err.name}. Detail: ${err.statusText}`, 'error', 10);
        return EMPTY;
      })
    );
  }

  put<T>(url: string, body: any) {
    return this.http.put<T>(`${CONFIG.API_URL}/${url}`, body, { headers: this.headers }).pipe(
      catchError( err => {
        this.notifyService.notify(`ERROR: ${err.status} ${err.name}. Detail: ${err.statusText}`, 'error', 10);
        return EMPTY;
      })
    );
  }
}
