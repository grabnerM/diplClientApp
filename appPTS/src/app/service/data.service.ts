/*
  Autor: Maximilian Grabner
  Titel: DataService
  Beschreibung: Zentraler Service zum Speichern von wichtigen Daten
*/
import { Injectable } from '@angular/core';
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
