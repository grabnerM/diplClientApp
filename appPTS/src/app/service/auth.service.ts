/*
  Autor: Maximilian Grabner
  Titel: Authentication Service
  Beschreibung: Schnittstelle zur Authentication zwischen Server und Client
*/
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Sender } from '../class/Sender';

const TOKEN_KEY = 'token'
const corsUrl = "https://cors-anywhere.herokuapp.com/"
//const baseUrl = corsUrl + "http://195.128.100.64:8080/"
const baseUrl = "https://v2202010130694129625.goodsrv.de/"
//const baseUrl = "http://localhost:8080/"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private storage: Storage,
    private http: HttpClient,
    private router: Router
  ) { }

  /**
   * Login 
   * @param body Enthält Email und Passwort
   * @returns 
   */
  public login(body) {
    return this.http.post(baseUrl + 'authenticate/senderlogin', body, { responseType: 'text' })
  }

  /**
   * Receiver Login
   * @param body Enthält Email und Passwort
   * @returns 
   */
  public receiverLogin(body) {
    return this.http.post(baseUrl + 'authenticate/receiverlogin', body, { responseType: 'text' });
  }

  public getUser() {
    let token = this.storage.get(TOKEN_KEY)

    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token)

    return this.http.get<Sender>(baseUrl + 'sender/getUser', { headers })
  }

  /**
   * Log Out
   */
  public logOut() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.router.navigateByUrl('/')
    })
  }

  /**
   * Register
   * @param body Enthält alle Daten für die Registrierung
   * @returns 
   */
  public register(body) {
    return this.http.post(baseUrl + 'authenticate/createSender', body, { responseType: 'text' })
  }
}
