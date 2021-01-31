import { Component, OnInit, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/core';
import { Map, tileLayer, marker, Routing, Marker, Icon } from 'leaflet';
import { HttpService } from '../../service/http.service';
import 'leaflet-routing-machine';
import { DataService } from '../../service/data.service';
import { ModalController, Platform, ToastController } from '@ionic/angular';
import { TaskInfoPage } from 'src/app/pages/task-info/task-info.page';
import { Task } from 'src/app/class/Task';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';
import { acceptedTask } from 'src/app/class/acceptedTask';
import { TaskAcceptPage } from 'src/app/pages/task-accept/task-accept.page';

const osrm_url = 'http://195.128.100.64:5000/route/v1'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  private interval: any
  private map: Map
  private start: any
  private wp = []
  private route: any
  private currentLocation: any
  private routing: any
  public tracking: boolean = false


  constructor(
    private platform: Platform,
    private router: Router,
    private http: HttpService,
    private data: DataService,
    private modalController: ModalController,
    private toastCtrl: ToastController,
    private nfc: NFC,
    private ndef: Ndef
  ) {
    this.platform.ready().then(() => {
      this.addListenNFC()
    })
  }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    this.http.getTasks().subscribe( result => {
      result.subscribe( tasks => {
        this.data.tasks = tasks

        this.showOpenTasks(this.data.tasks)
      })
    })

    this.http.getAcceptedTasks().subscribe( result => {
      result.subscribe( tasks => {
        this.data.acceptedTasks = tasks

        this.showAcceptedTasks(this.data.acceptedTasks)
      })
    })

    const position = await Geolocation.getCurrentPosition()
    
    this.map = new Map("map").setView([position.coords.latitude, position.coords.longitude], 13)
    
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'MapData @ <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
    }).addTo(this.map)
  }

  addListenNFC() {
    console.log('Listen to NFC')

    this.nfc.addNdefListener(() => {
      console.log('successfully attached ndef  listener')
    }, async (err) => {
      console.log('erro attaching ndef listener', err)

      let toast = await this.toastCtrl.create({
        message: err,
        duration: 1000,
        position: 'bottom'
      })

      toast.present()
    }).subscribe(async data => {
      let payload = data.tag.ndefMessage[0].payload
      let tagContent = this.nfc.bytesToString(payload).substring(3)

      console.log('received ndef messag. the tag contains: ', data.tag)
      console.log('decoded tag id', this.nfc.bytesToHexString(data.tag.id))

      let toast = await this.toastCtrl.create({
        message: 'Route wird gestartet',
        duration: 1000,
        position: 'bottom'
      })

      toast.present()

      this.http.startRoute(tagContent).subscribe()
    })
  }

  async presentModalOpenTask(task: Task) {
    const modal = await this.modalController.create({
      component: TaskInfoPage,
      swipeToClose: true,
      componentProps: {
        task: task
      }
    })

    return await modal.present()
  }

  async presentModalAcceptedTask(task: acceptedTask) {
    const modal = await this.modalController.create({
      component: TaskAcceptPage,
      swipeToClose: true,
      componentProps: {
        task: task
      }
    })

    return await modal.present()
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
    
    let location = Icon({
      iconUrl: 'assets/icon/location.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 20]
    })*/

    let l = this.wp.length

    if (l > 0) {
      if (l >= 2) {
        this.map.removeControl(this.routing)
      }

      this.routing = Routing.control({
        routeWhileDragging: false,
        show: false,
        router: new Routing.OSRMv1({
          serviceUrl: osrm_url
        }),
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

  showOpenTasks(tasks) {  
    if (tasks != null) {
      tasks.forEach(task => {
        let marker = new Marker([task.startlat, task.startlng], { icon: new Icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41]
        })}).addTo(this.map)

        marker.on('click', () => {
          this.presentModalOpenTask(task)
        })
      })
    }
  }

  showAcceptedTasks(tasks) {
    if (tasks != null) {
      tasks.forEach(task => {
        let marker = new Marker([task.startlat, task.startlng], { icon: new Icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41]
        })}).addTo(this.map)

        marker.on('click', () => {
          this.presentModalAcceptedTask(task)
        })
      })
    }
  }

  //überarbeiten
  generateRoute() {
    //this.http.generateRoute().subscribe()
  }

  endRoute() {
    this.http.endRoute().subscribe( value => {
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
      this.endRoute()
    }
  }
}
