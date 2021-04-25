/*
  Autor: Maximilian Grabner
  Titel: Abgeschlossener Auftrag
  Beschreibung: Diese Component ist mit der CourseComponent eng verknüpft. Sie zeigt einen einzelnen
    erfüllten Auftag an.
*/
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { finishedTask } from '../../class/finishedTask';
import { Icon, latLng, Map, marker, Routing, tileLayer } from 'leaflet';

const osrm_url = "https://v2202010130694129625.goodsrv.de:50/route/v1"

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, AfterViewInit {

  @Input()
  public task: finishedTask

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
  /*  let wp = []
    let lat = (this.task.startlat + this.task.endlat) / 2
    let lng = (this.task.startlng + this.task.endlng) / 2
    let map = new Map('' + this.task.taskid).setView([lat, lng], 11)

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

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
    }).addTo(map)*/
  }
}
