import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { sha512 } from 'js-sha512';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-receiver-authentication',
  templateUrl: './receiver-authentication.component.html',
  styleUrls: ['./receiver-authentication.component.scss'],
})
export class ReceiverAuthenticationComponent implements OnInit {

  loginPage: FormGroup

  constructor(
    private auth: AuthService,
    private router: Router,
    private storage: Storage,
    private formBuilder: FormBuilder
  ) { 
    this.loginPage = formBuilder.group({
      email: ['', Validators.compose([Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
      password: ['']
    }) 
  }

  ngOnInit() {}

  login() {
    let body = {
      email: this.loginPage.controls['email'].value,
      password: sha512(this.loginPage.controls['password'].value)
    }

    /*this.auth.receiverLogin(body).subscribe( result => {
      if ( result ) {
        this.storage.set('token', result)
        this.router.navigate(['home'])
      }
    })*/
  }

}
