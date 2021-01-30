import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Storage } from '@ionic/storage';
import { from, Observable } from 'rxjs';
import { Task } from '../class/Task';
import { MotionWatchAccelCallback } from '@capacitor/core';
import { acceptedTask } from '../class/acceptedTask';

const baseUrl = "http://195.128.100.64:8080/"

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
      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.storage.get('token'))

      return this.http.post(baseUrl + 'sender/savePosition', {headers}, body)
    }))
  }

  //überarbeiten
  generateRoute(body) {
    return from(this.storage.get('token').then((result) => {
      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + result)

      //return this.http.post(baseUrl + 'sender/newRoute/', {headers}, body)
    }))
  }

  endRoute() {
    return from(this.storage.get('token').then((result) => {
      let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.storage.get('token'))

      return this.http.put(baseUrl + 'sender/endRoute/' + this.data.routeid, {headers})
    }))
  }

  //überarbeiten
  getTasks() {
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

      let routeId = this.data.acceptedTasks.find(i => i.taskid === taskId).routeId

      console.log(routeId)
    }))
  }
}
