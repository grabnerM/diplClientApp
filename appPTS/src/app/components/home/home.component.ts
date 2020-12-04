import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/core';
import { Map, tileLayer, marker, Routing } from 'leaflet';
import { HttpService } from '../../service/http.service';
import 'leaflet-routing-machine';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  private interval: any;
  map: Map;
  start: any;
  private wp = [];
  route: any;
  currentLocation: any;
  private routing: any
  public tracking: boolean = false;

  constructor(
    private router: Router,
    private http: HttpService,
    private data: DataService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.map = new Map("map").setView([48.1654, 14.0366], 13);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'MapData @ <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
    }).addTo(this.map);
  }

  async getLocation() {
    const position = await Geolocation.getCurrentPosition()
    console.log(position)
    if (position.coords.latitude != null) {
      this.currentLocation = [position.coords.latitude, position.coords.longitude]
      //Only for testing
      let body
      if (this.wp.length == 0) {
        this.wp.push([48.151417, 14.020848])
        body = {
          routeid: this.data.routeid,
          lat: 48.151417,
          lng: 14.020848
        }
      } else if (this.wp.length == 1) {
        this.wp.push([48.163901, 14.033382])
        body = {
          routeid: this.data.routeid,
          lat: 48.163901,
          lng: 14.033382
        }
      } else if (this.wp.length == 2) {
        this.wp.push([48.170509, 14.051609])
        body = {
          routeid: this.data.routeid,
          lat: 48.170509,
          lng: 14.051609
        }
      }

      /*let body = {
        routeid: this.data.routeid,
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }*/

      //this.wp.push(this.currentLocation)
      this.http.setLocation(body).subscribe( value => {
        console.log(value)
      })
    }
  }

  async newLocation() {
    await this.getLocation()

    /*let pin = icon({
      iconUrl: 'assets/icon/pin.svg',
      iconSize: [40,40],
      iconAnchor: [20,20]
    })

    let location = icon({
      iconUrl: 'assets/icon/location.svg',
      iconSize: [40,40],
      iconAnchor: [20,20]
    })*/

    let l = this.wp.length

    if (l > 0) {
      if (l >= 2) {
        this.map.removeControl(this.routing)
      }

      this.routing = Routing.control({
        routeWhileDragging: false,
        show: false,
        addWaypoints: false,
        plan: Routing.plan(this.wp, {
          createMarker: function(j, waypoint) {
            if (j == 0) {
              return marker(waypoint.latLng, {draggable: false})
            } else if (j+1 == l) {
              return marker(waypoint.latLng, {draggable: false})
            }
          }
        })
      }).addTo(this.map);
    }
  }

  async generateRoute() {
    let body = {
      num: "WL-18ET"
    }

    this.http.generateRoute(body).subscribe( value => {
      console.log(value)
    })
  } 
  
  changeTracking() {
    console.log(this.wp)
    this.tracking = !this.tracking

    console.log(this.tracking)

    if (this.tracking) {
      this.generateRoute()
      document.getElementById('tracking').innerHTML = 'Stop Tracking'
      this.interval = setInterval(() => {
        this.newLocation()
      }, 6000);
    } else {
      document.getElementById('tracking').innerHTML = 'Start Tracking'
      clearInterval(this.interval);
    }
  }
}
