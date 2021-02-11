import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Storage } from '@ionic/storage';
import { from } from 'rxjs';
import { Task } from '../class/Task';
import { acceptedTask } from '../class/acceptedTask';

//const baseUrl = corsUrl + "http://195.128.100.64:8080/"
const baseUrl = "https://v2202010130694129625.goodsrv.de/"
//const baseUrl = "http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private data: DataService
  ) { }

  setLocation(body) {
    return from(this.storage.get('token').then((result) => {
      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + result)

      return this.http.post(baseUrl + 'sender/savePosition', body, {headers})
    }))
  }

  getOpenTasks() {
    return from(this.storage.get('token').then((result) => {
      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + result)

      /*return [new Task(1, 48.138435, 14.004268, 48.155429, 14.036327, 'Lieferung von 2 Kisten Bier (ZM und Hirter Privat Pils)', -1, 12),
              new Task(2, 48.155429, 14.036327, 48.138435, 14.004268, 'Lieferung von 3 Kebap Scharf ohne Tomaten', -1, 13),
              new Task(3, 48.165429, 14.136327, 48.138435, 14.004268, '15 Briefe', 0, 13)]*/
      return this.http.get<Task[]>(baseUrl + 'sender/getOpenTasks', {headers})
    }))
  }

  getAcceptedTasks() {
    return from(this.storage.get('token').then((result) => {
      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + result)

      return this.http.get<acceptedTask[]>(baseUrl + 'sender/getOpenTasksBySender', {headers})
    }))
  }

  acceptTask(taskId) {
    return from(this.storage.get('token').then((result) => {
      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + result)

      return this.http.get(baseUrl + 'sender/acceptTask/' + taskId, {headers})
    }))
  }

  startRoute(taskId) {
    return from(this.storage.get('token').then((result) => {
      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + result)

      let routeid = this.data.acceptedTasks.find(i => i.taskid == taskId).routeid
      
      return this.http.get(baseUrl + 'sender/startRoute/' + routeid, {headers})
    }))
  }

  endRoute(routeId) {
    return from(this.storage.get('token').then((result) => {
      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + result)

      return this.http.get(baseUrl + 'sender/endRoute/' + routeId, {headers})
    }))
  }
}
