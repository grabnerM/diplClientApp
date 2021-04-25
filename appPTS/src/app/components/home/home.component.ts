/*
  Autor: Maximilian Grabner
  Titel: Home
  Beschreibung: Die HomeComponent ist der Hauptbestandteil der App. Hier wird eine Karte mit den 
    aktuellen Auftäge angezeigt, welche durch die Kuriere bearbeitet werden können. 
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/core';
import { Map, tileLayer, marker, Routing, Marker, Icon, latLng } from 'leaflet';
import { HttpService } from '../../service/http.service';
import 'leaflet-routing-machine';
import { DataService } from '../../service/data.service';
import { ModalController, Platform, ToastController } from '@ionic/angular';
import { TaskInfoPage } from '../../pages/task-info/task-info.page';
import { Task } from '../../class/Task';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';
import { acceptedTask } from '../../class/acceptedTask';
import { TaskAcceptPage } from '../../pages/task-accept/task-accept.page';
import { TaskFinishPage } from '../../pages/task-finish/task-finish.page';

//URL für die Open Street Routing Machine
const osrm_url = "https://v2202010130694129625.goodsrv.de:50/route/v1"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  private map: Map
  private route: any
  private currentLocation: any

  private wp = []

  private interval: any
  private tracking: boolean = false
  private routing: boolean = false

  private currentDrivingTask: acceptedTask
  private acceptedTaskMarker: Marker[] = []
  private openTaskMarker: Marker[] = []

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

  /**
   * Anzeigen der Karte mit dem Mittelpunkt auf der aktuellen Position
   * Alle offenen Tasks abfragen
   * Alle angenommenen Tasks eines Kuriers abfragen
   */
  async ionViewDidEnter() {
    const position = await Geolocation.getCurrentPosition()
    
    
    //Map setzen
    this.map = new Map("map").setView([position.coords.latitude, position.coords.longitude], 13)
    
    //TilesLayer zu der Map hinzufügen, damit die Map angezeigt wird.
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'MapData @ <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
    }).addTo(this.map)
    
    this.http.getOpenTasks().subscribe( result => {
      result.subscribe( tasks => {
        this.data.openTasks = tasks

        this.showOpenTasks(this.data.openTasks)
      })
    })

    this.http.getAcceptedTasks().subscribe( result => {
      result.subscribe( tasks => {
        this.data.acceptedTasks = tasks

        this.showAcceptedTasks(this.data.acceptedTasks)
      })
    })
  }

  /**
   * NFC-Listener mit anschließender Verarbeitung und anzeige eines Toasts
   */
  addListenNFC() {
    this.nfc.addNdefListener(() => {
    }, async (err) => {
      let toast = await this.toastCtrl.create({
        message: err,
        duration: 1000,
        position: 'bottom'
      })

      toast.present()
    }).subscribe(async data => {
      let payload = data.tag.ndefMessage[0].payload
      let tagContent = this.nfc.bytesToString(payload).substring(3)
      let task = this.data.acceptedTasks.find(i => i.taskid == Number(tagContent))

      if (this.routing) {
        let toast = await this.toastCtrl.create({
          message: 'Route beendet',
          duration: 2000,
          position: 'bottom'
        })
  
        toast.present()
  
        this.endRoute(this.currentDrivingTask)
      } else if (this.data.acceptedTasks.includes(task) && !this.routing) {
        let toast = await this.toastCtrl.create({
          message: 'Route wird gestartet',
          duration: 2000,
          position: 'bottom'
        })
  
        toast.present()
  
        this.http.startRoute(tagContent).subscribe( result => {
          result.subscribe( res => {
            this.startRoute(tagContent)
            this.reloadAcceptedTasks(tagContent)
            this.routing = true
          })
        })
      } else {
        let toast = await this.toastCtrl.create({
          message: 'Kein Task gefunden',
          duration: 2000,
          position: 'bottom'
        })
  
        toast.present()
      }
    })
  }

  /**
   * Bereitstellen eines Modals für das Annehmen eines Auftrags
   * Verarbeitung des Events bei Annahme des Auftrags
   * @param task Task, der angenommen wird
   * @returns 
   */
  async presentModalOpenTask(task: Task) {
    const modal = await this.modalController.create({
      component: TaskInfoPage,
      swipeToClose: true,
      componentProps: {
        task: task
      }
    })

    modal.onDidDismiss().then(data => {
      if ( data ) {
        this.acceptTask(data.data)
      }
    })

    return await modal.present()
  }

  /**
   * Bereitstellen eines Modals für das Starten eines Auftrags
   * Verarbeitung des Events bei Starten des Auftrags
   * @param task Task, der gestartet wird
   * @returns 
   */
  async presentModalAcceptedTask(task: acceptedTask) {
    const modal = await this.modalController.create({
      component: TaskAcceptPage,
      swipeToClose: true,
      componentProps: {
        task: task
      }
    })

    modal.onDidDismiss().then( data => {
      if ( data ) {
        this.http.startRoute(data.data).subscribe( result => {
          result.subscribe( res => {
            this.startRoute(data.data)
            this.reloadAcceptedTasks(data.data)
            this.routing = true
          })
        })
      }
    })

    return await modal.present()
  }
  
  /**
   * Bereitstellen eines Modals für das Beenden eines Auftrags
   * Verarbeitung des Events bei Beenden des Auftrags
   * @param task Task, der beendet wird
   * @returns 
   */
  async presentModalFinishTask(task: acceptedTask) {
    const modal = await this.modalController.create({
      component: TaskFinishPage,
      swipeToClose: true,
      componentProps: {
        task: task
      }
    })

    modal.onDidDismiss().then( data => {
      if ( data ) {
        this.endRoute(data.data)
      }
    })

    return await modal.present()
  }

  /**
   * Schnittstelle zwischen dem GPS-Modul des Smartphone und der App
   * Aktuelle Position wird abgefragt und anschließend an den Server geschickt
   */
  async getLocation() {
    const position = await Geolocation.getCurrentPosition()
    console.log(position)
    if (position.coords.latitude != null) {
      //this.currentLocation = [position.coords.latitude, position.coords.longitude]
      //Only for testing
      /*
      let body
      if (this.wp.length == 0) {
        this.wp.push(this.currentLocation)
        body = {
          routeid: this.data.routeId,
          lat: 48.263159,
          lng: 14.258552
        }
      } else if (this.wp.length == 1) {
        this.wp.push(this.currentLocation)
        body = {
          routeid: this.data.routeId,
          lat: 48.264988,
          lng: 14.257523
        }
      } else if (this.wp.length == 2) {
        this.wp.push(this.currentLocation)
        body = {
          routeid: this.data.routeId,
          lat: 48.265587,
          lng: 14.255188
        }
      } else if (this.wp.length == 3) {
        this.wp.push(this.currentLocation)
        body = {
          routeid: this.data.routeId,
          lat: 48.267959,
          lng: 14.253846
        }
      } else {
        this.wp.push(this.currentLocation)
        body = {
          routeid: this.data.routeId,
          lat: 48.268626,
          lng: 14.252578
        }
      }
      */
      
      let body = {
        routeid: this.data.routeId,
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      
      //this.wp.push(this.currentLocation)
      this.http.setLocation(body).subscribe( result => {
        result.subscribe()
        if (this.tracking) {
          this.updateRoute(body)
        }
      })
    }
  }

  /**
   * Setzen von verschiedenen Icons als Start und Endpunkt
   * Derzeit nur als Zwischenschritt für die Positionsabfrage
   */
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

    /*let l = this.wp.length

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
    }*/
  }

  /**
   * Anzeigen aller offenen Aufträge und anschließende Bindung mittels Click-Event an das Modal
   * @param tasks Alle aktuelle offenen Aufträge
   */
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

        this.openTaskMarker.push(marker)
      })
    }
  }

  /**
   * Anzeige aller angenommenen Aufträge und Bindung mittels Click-Event an das Modal
   * @param tasks Alle akzeptierten Aufträge eines Kuriers
   */
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

        this.acceptedTaskMarker.push(marker)
      })
    }
  }

  /**
   * Bei dem Annehmen eines Auftrags muss der Auftrag aus der Liste der offenen Aufträge gelöscht werden.
   * @param taskId Id des zu entferndenen Auftrags
   */
  reloadOpenTasks(taskId) {
    let tasks = this.data.openTasks
    let task = this.data.openTasks.find(i => i.taskid == taskId)
    let index = tasks.indexOf(task)

    this.openTaskMarker.forEach(marker => {
      this.map.removeLayer(marker)
    })

    tasks.splice(index, 1)
    this.data.openTasks = tasks
    this.openTaskMarker = []

    this.showOpenTasks(tasks)
  }

  /**
   * Bei dem Starten eines Auftrags muss der Auftrag aus der Liste der akzeptierten Aufträge gelöscht werden.
   * @param taskId Id des gestarteten Auftrags
   */
  reloadAcceptedTasks(taskId) {
    let tasks = this.data.acceptedTasks
    let task = this.data.acceptedTasks.find(i => i.taskid == taskId)
    let index = tasks.indexOf(task)

    this.currentDrivingTask = task
    this.acceptedTaskMarker.forEach( marker => {
      this.map.removeLayer(marker)
    })

    tasks.splice(index, 1)
    this.data.acceptedTasks = tasks
    this.acceptedTaskMarker = []

    this.showAcceptedTasks(tasks)
  }

  /**
   * Übermittelung der TaskId an den Server zur Annahme eines Auftrags
   * @param taskId Id des Task
   */
  acceptTask(taskId) {
    this.http.acceptTask(taskId).subscribe( result => {
      result.subscribe( (data: any) => {
        let task = this.data.openTasks.find(i => i.taskid == taskId)
        let newTask = new acceptedTask(task.taskid, task.startlat, task.startlng, task.endlat, task.endlng, task.title,
          task.description, task.status, task.receiverid, data.insertId)

        this.data.acceptedTasks.push(newTask)
        this.acceptedTaskMarker = []
        this.showAcceptedTasks(this.data.acceptedTasks)
        
        this.reloadOpenTasks(taskId)
      })
    })
  }

  /**
   * Aktualisierung der Route
   * @param body Enthält die aktuelle Position
   */
  updateRoute(body) {
    let task = this.currentDrivingTask
    let wp = []

    wp.push(latLng(body.lat, body.lng))
    wp.push(latLng(task.endlat, task.endlng))

    let targetMarker = new Marker(wp[1], { 
      icon: new Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41]
      }), 
      draggable: false
    })

    targetMarker.on('click', () => {
      this.presentModalFinishTask(task)
    })

    this.map.removeControl(this.route)

    this.route = Routing.control({
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
            return targetMarker
          }
        }
      })
    })

    this.map.addControl(this.route)
  }

  /**
   * Bei Starten eines Auftrags wird die vorgeschlagenen Route angezeigt
   * @param taskId Id des Tasks
   */
  startRoute(taskId) {
    let task = this.data.acceptedTasks.find(i => i.taskid == taskId)
    this.data.routeId = task.routeid
    let wp = []

    wp.push(latLng(task.startlat, task.startlng))
    wp.push(latLng(task.endlat, task.endlng))

    let targetMarker = new Marker(wp[1], { 
      icon: new Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41]
      }), 
      draggable: false
    })

    targetMarker.on('click', () => {
      this.presentModalFinishTask(task)
    })

    this.route = Routing.control({
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
            return targetMarker
          }
        }
      })
    })

    this.map.addControl(this.route)
    this.changeTracking()
  }

  /**
   * Beenden der aktuell gefahrenen Route
   * @param task Aktuell ausgelieferter Task
   */
  endRoute(task) {
    this.http.endRoute(task.routeid).subscribe( result => {
      result.subscribe( res => {
      })
    })

    this.routing = false
    this.map.removeControl(this.route)
    this.changeTracking()
  }
  
  /**
   * Setzen eines Intervals für die regelmäßige Abfrage der Position
   */
  changeTracking() {
    this.tracking = !this.tracking

    this.getLocation()

    if (this.tracking) {
      this.interval = setInterval(() => {
        this.getLocation()
      }, 8000);
    } else {
      clearInterval(this.interval);
    }
  }
}
