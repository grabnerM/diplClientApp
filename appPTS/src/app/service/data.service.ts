import { Injectable } from '@angular/core';
import { Marker } from 'leaflet';
import { acceptedTask } from '../class/acceptedTask';
import { Task } from '../class/Task';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public routeId: number
  public tasks: Task[] = []
  public acceptedTasks: acceptedTask[] = []
  public acceptedTaskMarker: Marker[] = []

  constructor() { }
}
