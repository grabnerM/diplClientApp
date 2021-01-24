import { Injectable } from '@angular/core';
import { Task } from '../class/Task';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public routeid: number
  public tasks: Task[] = []
  public acceptedTasks: Task[] = []

  constructor() { }
}
