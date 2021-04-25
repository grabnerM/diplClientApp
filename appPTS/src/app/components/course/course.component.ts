/*
  Autor: Maximilian Grabner
  Titel: Auftragsliste
  Beschreibung: Diese Component ist das Gerüst für die Anzeige aller bisher abgeschlossenen Aufträge.
    Die einzelnen Aufträge werden durch die CardComponent angezeigt.
*/

import { Component, OnInit } from '@angular/core';
import { finishedTask } from '../../class/finishedTask';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {

  public tasks: finishedTask[]

  constructor(
    private http: HttpService
  ) { }

  /**
   * Abfrage aller bisherigen abgeschlossenen Tasks eines Kuriers.
   */
  ngOnInit() {
    this.http.getFinishedTasks().subscribe( result => {
      result.subscribe( tasks => {
        this.tasks = tasks
        console.log(tasks)
      })
    })
  }
}
