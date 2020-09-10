import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/core';
import { Map, tileLayer, marker, latLng, icon, Routing } from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  interval: any;
  map: Map;
  start: any;
  private wp = [];
  route: any;
  currentLocation: any;
  public tracking: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.map = new Map("map").setView([48.1654, 14.0366], 13);


    this.generateRoute()

    this.getLocation();
  }

  async getLocation() {
    console.log('why')
    const position = await Geolocation.getCurrentPosition()
    console.log(position)
    if (position.coords.latitude != null) {
      this.currentLocation = [position.coords.latitude, position.coords.longitude]
      console.log(this.wp)
      console.log([position.coords.latitude, position.coords.longitude])
      //this.wp.push([position.coords.latitude, position.coords.longitude])
      console.log(this.wp)
      //this.generateRoute
      console.log('fuck')
    }
  }

  generateRoute() {
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'MapData @ <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' + 
                   '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    }).addTo(this.map);

    let pin = icon({
      iconUrl: 'assets/icon/pin.svg',
      iconSize: [40,40],
      iconAnchor: [20,20]
    })

    let location = icon({
      iconUrl: 'assets/icon/location.svg',
      iconSize: [40,40],
      iconAnchor: [20,20]
    })

    let l = this.wp.length

    if (l > 0) {
      Routing.control({
        routeWhileDragging: false,
        plan: Routing.plan(this.wp, {
          addWaypoints: false,  
          createMarker: function(j, waypoint) {
            if (j == 0) {
              return marker(waypoint.latLng, {icon: pin, draggable: false})
            } else if (j+1 == l) {
              return marker(waypoint.latLng, {icon: location, draggable: false})
            }
          }
        }),
        show: false
      }).addTo(this.map);
    }
  }
  
  changeTracking() {
    console.log(this.wp)
    this.tracking = !this.tracking

    console.log(this.tracking)

    if (this.tracking) {
      this.interval = setInterval(this.getLocation, 6000);
    } else {
      clearInterval(this.interval);
    }
  }
}
