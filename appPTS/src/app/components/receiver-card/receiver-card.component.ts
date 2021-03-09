import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/class/Task';

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
