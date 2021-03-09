import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/class/Task';
import { Map, tileLayer, marker, Routing, Marker, latLng, Icon } from 'leaflet';

const osrm_url = "https://v2202010130694129625.goodsrv.de:50/route/v1"

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent implements OnInit {

  private task: Task
  private map: Map
  private lat
  private lng

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.task = new Task(Number(params.taskid), Number(params.startlat), Number(params.startlng), Number(params.endlat), Number(params.endlng), 
        params.title, params.description, Number(params.status), Number(params.receiverid))
    })  
  }

  ionViewDidEnter() {  
    this.lat = (this.task.startlat + this.task.endlat) / 2
    this.lng = (this.task.startlng + this.task.endlng) / 2

    this.map = new Map("taskDetail").setView([this.lat, this.lng], 11)

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
            return marker(waypoint.latLng, { 
              icon: new Icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41]
              }), 
              draggable: false
            })
          } else {
            return marker(waypoint.latLng, { 
              icon: new Icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41]
              }), 
              draggable: false
            })
          }
        }
      })
    }).addTo(this.map);
  }

}
