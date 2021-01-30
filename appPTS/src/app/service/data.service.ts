import { Injectable } from '@angular/core';
import { acceptedTask } from '../class/acceptedTask';
import { Task } from '../class/Task';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public routeid: number
  public tasks: Task[] = []
  public acceptedTasks: acceptedTask[] = []

  constructor() { }
}
