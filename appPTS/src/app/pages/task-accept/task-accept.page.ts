import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpService } from 'src/app/service/http.service';
import { Map, tileLayer, marker, Routing, Marker, latLng, Icon } from 'leaflet';
import { acceptedTask } from 'src/app/class/acceptedTask';
import { HomeComponent } from 'src/app/components/home/home.component';

const osrm_url = "https://v2202010130694129625.goodsrv.de:50/route/v1"

@Component({
  selector: 'app-task-accept',
  templateUrl: './task-accept.page.html',
  styleUrls: ['./task-accept.page.scss'],
})
export class TaskAcceptPage implements OnInit {

  @Input() task: acceptedTask

  private map: Map;

  constructor(
    private modalCtrl: ModalController,
    private http: HttpService,
    private home: HomeComponent
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

  dismiss() {
    this.modalCtrl.dismiss(this.task.taskid)
  }

}
