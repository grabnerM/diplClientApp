import { Injectable } from '@angular/core';
import { Task } from '../class/Task';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public routeid: number
  public tasks: Task[] = []

  constructor() { }
}
