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

  ngOnInit() {
    this.http.getReceiverTasks().subscribe( result => {
      result.subscribe( tasks => {
        this.createdTasks = tasks
      })
    })
  }

  showDetails(task) {
    this.router.navigate(['taskDetail', task])
  }

}
