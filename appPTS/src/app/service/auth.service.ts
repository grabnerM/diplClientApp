import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Sender } from '../class/Sender';

const TOKEN_KEY = 'token'
const corsUrl = "https://cors-anywhere.herokuapp.com/"
const baseUrl = corsUrl + "http://195.128.100.64:8080/"
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

  public login(body) {
    return this.http.post(baseUrl + 'authenticate/senderlogin', body, { responseType: 'text' })
  }

  public getUser() {
    let token = this.storage.get(TOKEN_KEY)

    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token)

    return this.http.get<Sender>(baseUrl + 'sender/getUser', { headers })
  }

  public logOut() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.router.navigateByUrl('/')
    })
  }

  public register(body) {
    return this.http.post(baseUrl + 'authenticate/createSender', body, { responseType: 'text' })
  }
}
