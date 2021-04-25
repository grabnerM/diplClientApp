/*
  Autor: Maximilian Grabner
  Titel: Detailansicht für Auftraggeber
  Beschreibung: Diese Component ist die Detailansicht aller Aufträge eines Auftraggebers. Sie steht
    in Verbindung mit der ReceiverHomeComponent.
*/

import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../class/Task';

@Component({
  selector: 'app-receiver-card',
  templateUrl: './receiver-card.component.html',
  styleUrls: ['./receiver-card.component.scss'],
})
export class ReceiverCardComponent implements OnInit {

  @Input()
  public task: Task

  constructor() { }

  ngOnInit() {}
}
