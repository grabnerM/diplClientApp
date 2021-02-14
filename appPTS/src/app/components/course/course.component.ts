import { Component, OnInit } from '@angular/core';
import { finishedTask } from 'src/app/class/finishedTask';
import { HttpService } from 'src/app/service/http.service';

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

  ngOnInit() {
    this.http.getFinishedTasks().subscribe( result => {
      result.subscribe( tasks => {
        this.tasks = tasks
        console.log(tasks)
      })
    })
  }
}
