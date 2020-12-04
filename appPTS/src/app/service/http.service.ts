import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

const baseUrl = "http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private data: DataService
  ) { }

  setLocation(body) {
    return this.http.post(baseUrl + 'sender/savePosition', body)
  }

  //rsId überarbeiten
  generateRoute(body) {
    return this.http.post(baseUrl + 'sender/newRoute/' + this.data.rsId, body)
  }
}
