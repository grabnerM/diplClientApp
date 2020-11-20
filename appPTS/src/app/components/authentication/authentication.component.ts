import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidator } from '../../validators/username';
import { PasswordValidator } from '../../validators/password';
import { PhoneNumberValidator } from '../../validators/phonenumber';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  login: FormGroup
  registerFirstPage: FormGroup
  registerSecondPage: FormGroup

  segmentModel = "register"
  secondPage = true
  submitAttempt= false

  constructor(
    private auth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { 
    this.login = formBuilder.group({
      lEmail: [''],
      lPassword: ['']
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
      rEmail: ['', Validators.compose([Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
      cEmail: ['', Validators.compose([Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')])],
      areaCode: [''],
      phone: ['', Validators.compose([]), (control => PhoneNumberValidator.confirmPhoneNumber(control, this.registerSecondPage, 'areaCode'))],
      zip: [''],
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

  /*login() {
    this.auth.login().subscribe(async res => {
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
  }*/

  register() {

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

  onSubmit() {

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
    this.login.controls['lEmail'].reset()
    this.login.controls['lPassword'].reset()
    
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
