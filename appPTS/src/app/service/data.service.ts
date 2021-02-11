import { Injectable } from '@angular/core';
import { Marker } from 'leaflet';
import { acceptedTask } from '../class/acceptedTask';
import { Task } from '../class/Task';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public routeId: number
  public acceptedTasks: acceptedTask[] = []
  public openTasks: Task[] = []

  constructor() { }
}
