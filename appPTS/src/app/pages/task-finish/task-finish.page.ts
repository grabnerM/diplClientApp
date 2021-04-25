/*
  Autor: Maximilian Grabner
  Titel: FinishModal
  Beschreibung: Dieses Modal dient dazu, einen Auftrag als abgeliefert zu markieren..
*/
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpService } from '../../service/http.service';
import { Map, tileLayer, marker, Routing, Marker, latLng, Icon } from 'leaflet';
import { acceptedTask } from '../../class/acceptedTask';
import { HomeComponent } from '../../components/home/home.component';

const osrm_url = "https://v2202010130694129625.goodsrv.de:50/route/v1"

@Component({
  selector: 'app-task-finish',
  templateUrl: './task-finish.page.html',
  styleUrls: ['./task-finish.page.scss'],
})
export class TaskFinishPage implements OnInit {

  @Input() task: acceptedTask

  private map: Map
  private lat
  private lng

  constructor(
    private modalCtrl: ModalController,
    private http: HttpService,
    private home: HomeComponent
  ) { }

  /**
   * Berechnung des Mittelpunkts der Strecke
   */
  ngOnInit() {
    this.lat = (this.task.startlat + this.task.endlat) / 2
    this.lng = (this.task.startlng + this.task.endlng) / 2
  }

  /**
   * Setzen der Map
   */
  ionViewDidEnter() {
    this.map = new Map("mapFinishTask").setView([this.lat, this.lng], 11)

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map)

    this.showRoute()
  }

  /**
   * Route anzeigen
   */
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
    }).addTo(this.map)
  }

  /**
   * Modal ohne Aktion schließen
   */
  dismiss() {
    this.modalCtrl.dismiss(null)
  }

  /**
   * Task beenden und Modal schließen.
   */
  finishTask() {
    this.modalCtrl.dismiss(this.task)
  }
}
