import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsernameValidator } from '../../validators/username';
import { PasswordValidator } from '../../validators/password';
import { PhoneNumberValidator } from '../../validators/phonenumber';
import { EmailValidator } from '../../validators/email';
import { sha512 } from 'js-sha512';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  loginPage: FormGroup
  registerFirstPage: FormGroup
  registerSecondPage: FormGroup

  segmentModel = "login"
  secondPage = true
  submitAttempt= false

  constructor(
    private auth: AuthService,
    private router: Router,
    private storage: Storage,
    private formBuilder: FormBuilder
  ) { 
    this.loginPage = formBuilder.group({
      lEmail: ['', Validators.compose([Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
      lPassword: ['', Validators.compose([Validators.required, Validators.pattern('^(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')])]
    })

    this.registerFirstPage = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$')]), UsernameValidator.checkUsername ],
      firstname: ['', Validators.compose([Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')])],
      lastname: ['', Validators.compose([Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')])],
      rPassword: ['', Validators.compose([Validators.required, Validators.pattern('^(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')]), (control => PasswordValidator.confirmPassword(control, this.registerFirstPage, 'cPassword'))],
      cPassword: ['', Validators.compose([Validators.required]), (control => PasswordValidator.confirmPassword(control, this.registerFirstPage, 'rPassword'))],
      sex: ['']
    },
    {
      updateOn: "blur"
    })

    this.registerSecondPage = formBuilder.group({
      rEmail: ['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]), (control => EmailValidator.confirmEmail(control, this.registerSecondPage, 'cEmail'))],
      cEmail: ['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]), (control => EmailValidator.confirmEmail(control, this.registerSecondPage, 'rEmail'))],
      areaCode: [''],
      phone: ['', Validators.compose([]), (control => PhoneNumberValidator.confirmPhoneNumber(control, this.registerSecondPage, 'areaCode'))],
      zip: ['', Validators.compose([Validators.minLength(4), Validators.maxLength(5)])],
      city: [''],
      street: [''],
      housenumber: ['']
    },
    {
      updateOn: 'blur'
    })
  }

  ngOnInit() {
  }

  login() {
    let body = {
      email: this.loginPage.controls['lEmail'].value,
      password: sha512(this.loginPage.controls['lPassword'].value)
    }

    this.auth.login(body).subscribe( result => {
      console.log(result)

      if ( result ) {
        this.storage.set('token', result)
        this.router.navigate(['home'])
      }
    })
  }

  register() {
    let body = {
      username: this.registerFirstPage.controls['username'].value,
      firstname: this.registerFirstPage.controls['firstname'].value,
      lastname: this.registerFirstPage.controls['lastname'].value,
      password: sha512(this.registerFirstPage.controls['rPassword'].value),
      sex: this.registerFirstPage.controls['sex'].value,
      email: this.registerSecondPage.controls['rEmail'].value,
      phone: this.registerSecondPage.controls['areaCode'].value + this.registerSecondPage.controls['phone'].value,
      zip: this.registerSecondPage.controls['zip'].value,
      city: this.registerSecondPage.controls['city'].value,
      street: this.registerSecondPage.controls['street'].value,
      houseno: this.registerSecondPage.controls['houseno'].value
    }

    this.auth.register(body).subscribe( result => {
      if ( result ) {
        this.storage.set('token', result)
        this.router.navigate(['home'])
      }
    })
  }

  next() {
    if (this.registerFirstPage.valid) {
      this.secondPage = true
      console.log(this.registerFirstPage.controls['username'].value)
      console.log(this.registerFirstPage.controls['firstname'].value)
      console.log(this.registerFirstPage.controls['lastname'].value)
      console.log(this.registerFirstPage.controls['rPassword'].value)
      console.log(this.registerFirstPage.controls['sex'].value)
    }
  }

  formInputIsRequired(formInput: string) {
    if (this.registerFirstPage.controls[formInput]) {
      if (this.registerFirstPage.controls[formInput].hasError('required')) {
        return true;
      }
    }

    return false;
  }

  segmentChanged(event) {
    this.secondPage = false

    //Reset login
    this.loginPage.controls['lEmail'].reset()
    this.loginPage.controls['lPassword'].reset()
    
    //Reset first register page
    this.registerFirstPage.controls['username'].reset()
    this.registerFirstPage.controls['firstname'].reset()
    this.registerFirstPage.controls['lastname'].reset()
    this.registerFirstPage.controls['rPassword'].reset()
    this.registerFirstPage.controls['cPassword'].reset()
    this.registerFirstPage.controls['sex'].reset()

    //Reset second register page
    this.registerSecondPage.controls['rEmail'].reset()
    this.registerSecondPage.controls['cEmail'].reset()
    this.registerSecondPage.controls['areaCode'].reset()
    this.registerSecondPage.controls['phone'].reset()
    this.registerSecondPage.controls['zip'].reset()
    this.registerSecondPage.controls['city'].reset()
    this.registerSecondPage.controls['street'].reset()
    this.registerSecondPage.controls['housenumber'].reset()
  }

}
