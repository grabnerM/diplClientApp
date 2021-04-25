/*
  Autor: Maximilian Grabner
  Titel: Auftraggeber Home
  Beschreibung: Anzeigen aller offenen und akzeptierten Aufträge eines Auftraggebers.
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/class/Task';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-receiver-home',
  templateUrl: './receiver-home.component.html',
  styleUrls: ['./receiver-home.component.scss'],
})
export class ReceiverHomeComponent implements OnInit {

  private createdTasks: Task[]

  constructor(
    private http: HttpService,
    private router: Router
  ) { }

  /**
   * Abfrage aller offenen und akzeptierten Tasks eines Kunden
   */
  ngOnInit() {
    this.http.getReceiverTasks().subscribe( result => {
      result.subscribe( tasks => {
        this.createdTasks = tasks
      })
    })
  }

  /**
   * Übermitteln der Daten an die Detailansicht.
   * @param task Task für die jeweilige Detailansicht
   */
  showDetails(task) {
    this.router.navigate(['taskDetail', task])
  }

}
