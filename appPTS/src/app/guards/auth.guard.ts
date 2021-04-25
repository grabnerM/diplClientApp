/*
  Autor: Maximilian Grabner
  Titel: Authentication Guard
  Beschreibung: Steuert den Zugriff auf geschützte Componenten
*/
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (
    private storage: Storage
  ) { }

  canActivate(): boolean {
    if (this.storage.get('token') ) {
      return true
    } else {
      return false
    }
  }
  
}
