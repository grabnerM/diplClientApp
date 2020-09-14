import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../service/auth.service';
import { AlertController } from '@ionic/angular';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {

  credentials = {
    email: 'office@pts.com',
    pw: '1234'
  }

  username: string;
  password: string;

  constructor(
    private auth: AuthService,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {}

  login() {
    this.auth.login(this.credentials).subscribe(async res => {
      if (res) {
        this.router.navigateByUrl('/home')
      } else {
        const alert = await this.alertCtrl.create({
          header: 'Login Failed',
          message: 'Wrong credentials',
          buttons: ['OK']
        })

        await alert.present()
      }
    })
  }

}
