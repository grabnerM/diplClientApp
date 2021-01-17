import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpService } from 'src/app/service/http.service';
import { Map, tileLayer, marker, Routing, Marker, latLng } from 'leaflet';
import { Task } from 'src/app/class/Task';

const osrm_url = 'http://195.128.100.64:5000/route/v1'

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.page.html',
  styleUrls: ['./task-info.page.scss'],
})
export class TaskInfoPage implements OnInit {

  @Input() task: Task

  private map: Map;

  constructor(
    private modalCtrl: ModalController,
    private http: HttpService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.map = new Map("route").setView([48.1654, 14.0366], 11)

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map)

    this.showRoute()
  }

  showRoute() {
    let wp = []

    wp.push(latLng(this.task.startlat, this.task.startlng))
    wp.push(latLng(this.task.endlat, this.task.endlng))

    Routing.control({
      routeWhileDragging: false,
      show: false,
      router: new Routing.OSRMv1({
        serviceUrl: osrm_url
      }),
      addWaypoints: false,
      plan: Routing.plan(wp, {
        createMarker: function(j, waypoint) {
          if (j == 0) {
            return marker(waypoint.latLng, {draggable: false})
          } else {
            return marker(waypoint.latLng, {draggable: false})
          }
        }
      })
    }).addTo(this.map);
  }

  dismiss() {
    this.modalCtrl.dismiss()
  }

  acceptTask(taskId) {
    this.http.acceptTask(taskId).subscribe( result => {
      result.subscribe( result => {
        console.log(result)
      })
    })
  }
}
