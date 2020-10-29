import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  credentialsLogin = {
    email: '',
    pw: ''
  }

  credentialsRegister = {
    username: '',
    firstname: '',
    lastname: '',
    pw: '',
    pwRepeat: '',
    sex: '',
    email: '',
    emailRepeat: '',
    number: '',
    zip: '',
    city: '',
    street: '',
    houseno: ''
  }

  segmentModel = "login";
  secondPage = false;

  constructor(
    private auth: AuthService,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {}

  login() {
    this.auth.login(this.credentialsLogin).subscribe(async res => {
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

  register() {

  }

  next() {
    if (this.credentialsRegister.username == '' && this.credentialsRegister.username.length < 3) {
      
    } 
    if (this.credentialsRegister.firstname.length < 3) {

    }
    if (this.credentialsRegister.lastname.length < 3) {

    }
    if (this.credentialsRegister.pw) {
      
    }
  }

  segmentChanged(event) {
    this.credentialsLogin = {
      email: '',
      pw: ''
    }
  
    this.credentialsRegister = {
      username: '',
      firstname: '',
      lastname: '',
      pw: '',
      pwRepeat: '',
      sex: '',
      email: '',
      emailRepeat: '',
      number: '',
      zip: '',
      city: '',
      street: '',
      houseno: ''
    }
  }

}
