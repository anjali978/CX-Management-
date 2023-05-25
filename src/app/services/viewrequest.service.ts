import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewrequestService {
  constructor(private http: HttpClient) {}

  viewRequests() {
    return this.http.get('http://172.19.113.60:3000/api/request');
  }
}
